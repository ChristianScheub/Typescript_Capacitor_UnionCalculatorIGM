import { ITaxCalculatorService } from "./ITaxCalculatorService";
import { store } from "../../stateManagement/store";
import Logger from "../logger/logger";
import { incomeLimits, soliThresholdMarried, soliThresholdSingle, taxClassFactors, taxRates } from "../../config/taxConfig";
import { getWorkDaysPerYear } from "../helper/hourlyWageCalculator";


const taxCalculatorService: ITaxCalculatorService = {


  calculateTax: (income: number, forYear: boolean): number => {
    const state = store.getState();
    if(!forYear){
      income = income*12;
    }

    const taxClass = state.tax.taxClass;
    let writeOff = state.tax.writeOff ?? 0;
    const routeToWork = state.tax.routeToWork ?? 0;
    
    let geldProKm = 0.38;

    if(routeToWork<20){
      geldProKm = 0.3;
    }

    let writeOffWayToWork = routeToWork * geldProKm * 2 * getWorkDaysPerYear();
    if(!forYear){
      writeOff = writeOff / 12;
      writeOffWayToWork = writeOffWayToWork / 12;
    }


    if (income === null || taxClass === null) {
      return 0;
    }

    let tax: number = 0;

     const taxFreeAllowance = (taxClassFactors[taxClass]);
     // Subtract tax-free allowance from adjusted income
     const adjustedIncome = income - taxFreeAllowance - writeOff - writeOffWayToWork;
    Logger.info("Income after deduction of the writeOffs etc: " + adjustedIncome);

    if (income <= incomeLimits.lowerLimit1) {
      // a) Up to 11,604 EUR: Tax is 0
      tax = 0;
    } else if (income <= incomeLimits.upperLimit1) {
      // b) From 11,605 EUR to 17,005 EUR
      const y = (adjustedIncome - incomeLimits.lowerLimit1) / 10000;
      tax = (taxRates.b1Coefficient * y + taxRates.b1Intercept) * y;
    } else if (income <= incomeLimits.upperLimit2) {
      // c) From 17,006 EUR to 66,760 EUR
      const z = (adjustedIncome - incomeLimits.lowerLimit2) / 10000;
      tax = (taxRates.c1Coefficient * z + taxRates.c1Intercept) * z + taxRates.c2Intercept;
    } else if (income <= incomeLimits.upperLimit3) {
      // d) From 66,761 EUR to 277,825 EUR
      tax = taxRates.dRate * adjustedIncome - taxRates.dIntercept;
    } else if (income >= incomeLimits.lowerLimit4) {
      // e) From 277,826 EUR and above
      tax = taxRates.eRate * adjustedIncome - taxRates.eIntercept;
    }
    
    if (tax) {
      if(!forYear){
        tax = tax/12;
      }
      if(tax<0){
        tax = 0;
      }
    }

    Logger.info("Steuerbetrag: " + tax);
    const shortTax= Number(tax.toFixed(2));
    return shortTax;
  },

  calculateSoli: (income: number, forYear: boolean): number => {
    const state = store.getState();
    const taxClass = state.tax.taxClass;
    if(!forYear){
      income = income*12;
    }
    const tax = taxCalculatorService.calculateTax(income,true)


    Logger.info("Einkommen für Soli: " + income);

    const soliThreshold =
      taxClass === 3 || taxClass === 4
        ? soliThresholdMarried
        : soliThresholdSingle;

    if (tax && income) {
      if (income > soliThreshold) {
        const soli = tax * 0.055;
        const shortSoli = Number(soli.toFixed(2));
        Logger.info("Solidaritätszuschlag: " + shortSoli);
        return shortSoli;
      }
    }
    return 0;
  },

  calculateSalaryAfterAllTax: (income: number, forYear: boolean): number => {
    Logger.info("Einkommen: " + income);

    if (income) {
      let netIncome = income - taxCalculatorService.calculateSoli(income,forYear);
      netIncome = (netIncome - taxCalculatorService.calculateTax(income,forYear));
      const shortNetIncome = Number(netIncome.toFixed(2));
      Logger.info("Nettoeinkommen nach Soli: " + shortNetIncome);
      return shortNetIncome;
    }
    return 0;
  },
};

export default taxCalculatorService;