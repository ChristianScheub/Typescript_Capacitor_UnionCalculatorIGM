import { store } from "../../../stateManagement/store";
import Logger from "../../logger/logger";
import { geldProKm, incomeLimits, taxClassFactors, taxRates } from "../taxConfig";
import { getWorkDaysPerYear } from "../../helper/hourlyWageCalculator";
import TaxCalculatorService from "..";
import { ITaxCalculatorService } from "../ITaxCalculatorService";
import { calculateChurchTax } from "./ChurchTaxCalculator";


export const calculateTax: ITaxCalculatorService['calculateTax'] = (income: number, forYear: boolean): number => {
  const state = store.getState();
  if (!forYear) {
    income = income * 12;
  }

  let churchTaxWriteOff = 0;
  const isInChurch = state.tax.isInChurch;
  if (isInChurch) {
    churchTaxWriteOff = TaxCalculatorService.calculateChurchTax(income, true)
  }
  let tax = calculateTaxAfterChurch(income - churchTaxWriteOff);


  if (tax) {
    if (!forYear) {
      tax = tax / 12;
    }
    if (tax < 0) {
      tax = 0;
    }
  }

  Logger.info("Steuerbetrag: " + tax);
  const shortTax = Number(tax.toFixed(2));
  return shortTax;
}

export const calculateTaxAfterChurch = (income: number): number => {
  const state = store.getState();

  const taxClass = state.tax.taxClass;
  const writeOff = state.tax.writeOff ?? 0;
  const routeToWork = state.tax.routeToWork ?? 0;

  const writeOffWayToWork = routeToWork * (routeToWork < 20 ? geldProKm.shortDistance : geldProKm.longDistance) * 2 * getWorkDaysPerYear();


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

  if (tax < 0) {
    tax = 0;
  }


  Logger.info("Steuerbetrag: " + tax);
  const shortTax = Number(tax.toFixed(2));
  return shortTax;
}

export const calculateSalaryAfterAllTax: ITaxCalculatorService['calculateSalaryAfterAllTax'] = (income: number, forYear: boolean): number => {
  Logger.info("Einkommen: " + income);

  if (income) {
    let netIncome = income - TaxCalculatorService.calculateSoli(income, forYear);
    netIncome = (netIncome - calculateTax(income, forYear));
    netIncome = netIncome - calculateChurchTax(income,forYear);
    const shortNetIncome = Number(netIncome.toFixed(2));
    Logger.info("Nettoeinkommen nach Soli: " + shortNetIncome);
    return shortNetIncome;
  }
  return 0;
}