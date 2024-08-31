import { store } from "../../stateManagement/store";
import Logger from "../logger/logger";
import { socialSecurityRates, contributionLimits } from "../../config/socialSecurityConfig";
import { ISocialSecurityCalculator } from "./ISocialSecurityCalculator";

const SocialSecurityCalculator: ISocialSecurityCalculator = {
  calculatePensionInsurance: (income: number): number => {
    const limit = contributionLimits.pensionInsuranceWestGermany; //ToDo basierend auf Bundesland
    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * socialSecurityRates.pensionInsurance;
  },

  calculateUnemploymentInsurance: (income: number): number => {
    const limit = contributionLimits.unemploymentInsuranceWestGermany; //ToDo basierend auf Bundesland
    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * socialSecurityRates.unemploymentInsurance;
  },

  calculateHealthInsurance: (income: number): number => {
    const limit = contributionLimits.healthInsurance;
    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * socialSecurityRates.healthInsurance;
  },

  calculateHealthInsuranceSupplement: (income: number): number => {
    const state = store.getState();
    const healthInsuranceSupplement = state.salaryCalculator.healthInsuranceSupplement / 200;
    Logger.info("Es wird abgezogen an Zusatzbeitrag:"+healthInsuranceSupplement);
    const limit = contributionLimits.healthInsurance;
    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * healthInsuranceSupplement;
  },

  calculateCareInsurance: (income: number, isChildless: boolean): number => {
    const careInsuranceRate = isChildless ? socialSecurityRates.careInsuranceChildless : socialSecurityRates.careInsurance;
    const limit = contributionLimits.careInsurance;
    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * careInsuranceRate;
  },

  calculateTotalSocialSecurity: (salaryBeforeTax: number): number => {
    const state = store.getState();
    const isChildless = state.salaryCalculator.isChildless;

    const pension = SocialSecurityCalculator.calculatePensionInsurance(salaryBeforeTax);
    const unemployment = SocialSecurityCalculator.calculateUnemploymentInsurance(salaryBeforeTax);
    const health = SocialSecurityCalculator.calculateHealthInsurance(salaryBeforeTax);
    const healthSupplemnt = SocialSecurityCalculator.calculateHealthInsuranceSupplement(salaryBeforeTax);
    const care = SocialSecurityCalculator.calculateCareInsurance(salaryBeforeTax, isChildless);


    const totalSocialSecurity = pension + unemployment + health + care+healthSupplemnt;
    const shortTotalSocialSecurity = Number(totalSocialSecurity.toFixed(2));
    Logger.info("Gesamte Sozialabgaben (Arbeitnehmeranteil): " + shortTotalSocialSecurity);
    return shortTotalSocialSecurity;
  },

  calculateNetIncomeAfterSocialSecurity: (salaryAfterTax: number, salaryBeforeTax: number, forYear: boolean): number => {
    if (forYear) {
      salaryBeforeTax = salaryBeforeTax / 12;
    }
    if (salaryAfterTax !== null) {
      const totalSocialSecurity = SocialSecurityCalculator.calculateTotalSocialSecurity(salaryBeforeTax);
      Logger.info("Sozialabgaben: " + totalSocialSecurity);

      let netIncome = 0;
      if (forYear) {
        netIncome = salaryAfterTax - (totalSocialSecurity * 12);
      }
      else {
        netIncome = salaryAfterTax - (totalSocialSecurity);
      }

      netIncome = Number(netIncome.toFixed(2));
      Logger.info("Nettoeinkommen nach Sozialabgaben: " + netIncome);
      return netIncome;
    }
    return 0;
  },
};

export default SocialSecurityCalculator;