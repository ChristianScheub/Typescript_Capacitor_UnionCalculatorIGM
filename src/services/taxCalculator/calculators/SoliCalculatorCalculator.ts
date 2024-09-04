import { store } from "../../../stateManagement/store";
import { soliThresholdMarried, soliThresholdSingle } from "../taxConfig";
import { ITaxCalculatorService } from "../ITaxCalculatorService";
import { calculateTax } from "./WageTaxCalculator";

export const calculateSoli: ITaxCalculatorService['calculateSoli'] = (income, forYear) => {
  const state = store.getState();
  const taxClass = state.tax.taxClass;
  if (!forYear) {
    income = income * 12;
  }
  const tax = calculateTax(income, true);

  const soliThreshold =
    taxClass === 3 || taxClass === 4
      ? soliThresholdMarried
      : soliThresholdSingle;

  if (income > soliThreshold) {
    const soli = tax * 0.055;
    return Number(soli.toFixed(2));
  }
  return 0;
};