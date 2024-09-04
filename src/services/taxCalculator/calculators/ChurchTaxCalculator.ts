import { store } from "../../../stateManagement/store";
import { STATE_CONFIGS, StateConfig } from "../taxConfig";
import { calculateTaxAfterChurch } from "./WageTaxCalculator";
import { ITaxCalculatorService } from "../ITaxCalculatorService";
import Logger from "../../logger/logger";

export const calculateChurchTax: ITaxCalculatorService['calculateChurchTax'] = (income, forYear) => {
  
  const state = store.getState();
  const isInChurch = state.tax.isInChurch;
  if (!isInChurch) {
    return 0;
  }

  if (!forYear) {
    income = income * 12;
  }

  const config: StateConfig = STATE_CONFIGS[state.unionContract.selectedRegion];
  const taxRate = config.taxRate;

  let incomeTax = calculateTaxAfterChurch(income);
  let churchTax = incomeTax * taxRate;

  const capRate = config.capRate;
  Logger.info("Kirchensteuer wird berechnet nun mit " + taxRate);

  let previousChurchTax: number;
  do {
    previousChurchTax = churchTax;
    incomeTax = calculateTaxAfterChurch(income - churchTax);
    churchTax = incomeTax * taxRate;

    if (capRate !== undefined) {
      const maxChurchTax = income * capRate;
      if (churchTax > maxChurchTax) {
        churchTax = maxChurchTax;
      }
    }

  } while (Math.abs(churchTax - previousChurchTax) > 0.01);

  if (!forYear) {
    churchTax = churchTax / 12;
  }
  Logger.info("Kirchensteuer final ist:" + churchTax)

  return Number(churchTax.toFixed(2));
};