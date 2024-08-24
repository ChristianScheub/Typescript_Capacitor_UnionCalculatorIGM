import { store } from "../../stateManagement/store";
import Logger from "../logger/logger";
import { socialSecurityRates, contributionLimits } from "../../config/socialSecurityConfig";
import { ISocialSecurityCalculator } from "./ISocialSecurityCalculator";

const SocialSecurityCalculator: ISocialSecurityCalculator = {
    calculatePensionInsurance: (income: number): number => {
    return income * socialSecurityRates.pensionInsurance;
  },

  calculateUnemploymentInsurance: (income: number): number => {
    return income * socialSecurityRates.unemploymentInsurance;
  },

  calculateHealthInsurance: (income: number): number => {
    const limit = contributionLimits.healthInsurance;
    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * socialSecurityRates.healthInsurance;
  },

  calculateCareInsurance: (income: number, isChildless: boolean): number => {
    const careInsuranceRate = isChildless ? socialSecurityRates.careInsuranceChildless : socialSecurityRates.careInsurance;
    return income * careInsuranceRate;
  },

  calculateTotalSocialSecurity: (): number => {
    const state = store.getState();
    const income = state.salaryCalculator.salaryWithBonus!;
    const isChildless = state.salaryCalculator.isChildless;

    const pension = SocialSecurityCalculator.calculatePensionInsurance(income);
    const unemployment = SocialSecurityCalculator.calculateUnemploymentInsurance(income);
    const health = SocialSecurityCalculator.calculateHealthInsurance(income);
    const care = SocialSecurityCalculator.calculateCareInsurance(income, isChildless);

    const totalSocialSecurity = pension + unemployment + health + care;
    const shortTotalSocialSecurity = Number(totalSocialSecurity.toFixed(2));
    Logger.info("Gesamte Sozialabgaben (Arbeitnehmeranteil): " + shortTotalSocialSecurity);
    return shortTotalSocialSecurity;
  },

  calculateNetIncomeAfterSocialSecurity: (salaryAfterTax: number): number => {
    const state = store.getState();
    
    if (salaryAfterTax !== null) {
      const totalSocialSecurity = SocialSecurityCalculator.calculateTotalSocialSecurity();
      Logger.info("Sozialabgaben: " + totalSocialSecurity);

      const netIncome = salaryAfterTax - totalSocialSecurity;
      const shortNetIncome = Number(netIncome.toFixed(2));
      Logger.info("Nettoeinkommen nach Sozialabgaben: " + shortNetIncome);
      return shortNetIncome;
    }
    return 0;
  },
};

export default SocialSecurityCalculator;