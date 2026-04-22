import { store } from "../../../stateManagement/store";
import Logger from "../../logger/logger";
import { geldProKm, incomeLimits, taxRates } from "../taxConfig";
import { getWorkDaysPerYear } from "../../helper/hourlyWageCalculator";
import TaxCalculatorService from "..";
import { ITaxCalculatorService } from "../ITaxCalculatorService";
import { calculateChurchTax } from "./ChurchTaxCalculator";
import { socialSecurityRates, contributionLimits2026 } from "../../socialSecurityCalculator/socialSecurityConfig";

const ARBEITNEHMER_PAUSCHBETRAG = 1230;
const SONDERAUSGABEN_PAUSCHBETRAG = 36;
const ENTLASTUNGSBETRAG_ALLEINERZIEHEND = 4260;

const calculateVorsorgepauschale = (income: number, isChildless: boolean, healthInsuranceSupplement: number): number => {
  const BBG_RV_ANNUAL = contributionLimits2026.pensionInsuranceWestGermany * 12;
  const BBG_KV_ANNUAL = contributionLimits2026.healthInsurance * 12;

  const rvAnteil = Math.min(income, BBG_RV_ANNUAL) * socialSecurityRates.pensionInsurance;
  // healthInsuranceSupplement is stored as full percentage (e.g. 1.7), employee pays half → /200
  const kvRate = socialSecurityRates.healthInsurance + (healthInsuranceSupplement / 200);
  const kvAnteil = Math.min(income, BBG_KV_ANNUAL) * kvRate;
  const pvRate = isChildless ? socialSecurityRates.careInsuranceChildless : socialSecurityRates.careInsurance;
  const pvAnteil = Math.min(income, BBG_KV_ANNUAL) * pvRate;

  return rvAnteil + kvAnteil + pvAnteil;
};

// §32a EStG 2026 applied directly to zvE (Grundfreibetrag is embedded in zone boundaries)
const applyTaxFormula = (zvE: number): number => {
  if (zvE <= incomeLimits.lowerLimit1) {
    return 0;
  } else if (zvE <= incomeLimits.upperLimit1) {
    const y = (zvE - incomeLimits.lowerLimit1) / 10000;
    return (taxRates.b1Coefficient * y + taxRates.b1Intercept) * y;
  } else if (zvE <= incomeLimits.upperLimit2) {
    const z = (zvE - incomeLimits.upperLimit1) / 10000;
    return (taxRates.c1Coefficient * z + taxRates.c1Intercept) * z + taxRates.c2Intercept;
  } else if (zvE <= incomeLimits.upperLimit3) {
    return taxRates.dRate * zvE - taxRates.dIntercept;
  } else {
    return taxRates.eRate * zvE - taxRates.eIntercept;
  }
};


export const calculateTax: ITaxCalculatorService['calculateTax'] = (income: number, forYear: boolean): number => {
  const state = store.getState();
  if (!forYear) {
    income = income * 12;
  }

  let churchTaxWriteOff = 0;
  const isInChurch = state.tax.isInChurch;
  if (isInChurch) {
    churchTaxWriteOff = TaxCalculatorService.calculateChurchTax(income, true);
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
  return Number(tax.toFixed(2));
};

export const calculateTaxAfterChurch = (income: number): number => {
  const state = store.getState();
  const taxClass = state.tax.taxClass;
  const writeOff = state.tax.writeOff ?? 0;
  const routeToWork = state.tax.routeToWork ?? 0;
  const isChildless = state.tax.isChildless;
  const healthInsuranceSupplement = state.tax.healthInsuranceSupplement ?? 0;

  if (income === null || taxClass === null) {
    return 0;
  }

  const writeOffWayToWork = routeToWork * (routeToWork < 20 ? geldProKm.shortDistance : geldProKm.longDistance) * 2 * getWorkDaysPerYear();

  const vorsorgepauschale = calculateVorsorgepauschale(income, isChildless, healthInsuranceSupplement);

  let zvE: number;
  if (taxClass === 5 || taxClass === 6) {
    // SK5/6: no standard deductions, no Vorsorgepauschale deduction (GFB already in §32a)
    zvE = income - writeOff - writeOffWayToWork;
  } else {
    const klassenFreibetrag = taxClass === 2 ? ENTLASTUNGSBETRAG_ALLEINERZIEHEND : 0;
    zvE = income
      - ARBEITNEHMER_PAUSCHBETRAG
      - SONDERAUSGABEN_PAUSCHBETRAG
      - klassenFreibetrag
      - vorsorgepauschale
      - writeOff
      - writeOffWayToWork;
  }

  zvE = Math.max(0, zvE);

  // SK3: Splitting-Verfahren (halve zvE, apply §32a, double result)
  let tax: number;
  if (taxClass === 3) {
    tax = applyTaxFormula(zvE / 2) * 2;
  } else {
    tax = applyTaxFormula(zvE);
  }

  Logger.info("zvE: " + zvE + ", Vorsorgepauschale: " + vorsorgepauschale);
  Logger.info("Steuerbetrag: " + tax);
  return Math.max(0, Number(tax.toFixed(2)));
};

export const calculateSalaryAfterAllTax: ITaxCalculatorService['calculateSalaryAfterAllTax'] = (income: number, forYear: boolean): number => {
  Logger.info("Einkommen: " + income);

  if (income) {
    let netIncome = income - TaxCalculatorService.calculateSoli(income, forYear);
    netIncome = netIncome - calculateTax(income, forYear);
    netIncome = netIncome - calculateChurchTax(income, forYear);
    const shortNetIncome = Number(netIncome.toFixed(2));
    Logger.info("Nettoeinkommen nach Soli: " + shortNetIncome);
    return shortNetIncome;
  }
  return 0;
};
