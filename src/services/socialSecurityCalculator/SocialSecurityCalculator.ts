import { store } from "../../stateManagement/store";
import Logger from "../logger/logger";
import { socialSecurityRates, contributionLimits } from "../../config/socialSecurityConfig";
import { ISocialSecurityCalculator } from "./ISocialSecurityCalculator";
import { isWestGermany } from "../isWestGermany/isWestGermany";
import { calculateHourlyWage } from "../helper/hourlyWageCalculator";

const SocialSecurityCalculator: ISocialSecurityCalculator = {
  calculatePensionInsurance: (income: number): number => {

    const state = store.getState();
    const selectedRegion = state.unionContract.selectedRegion;
    let limit = 0;
    if(isWestGermany(selectedRegion)){
      limit = contributionLimits.pensionInsuranceWestGermany;
      Logger.info("WEST Deutschland");
    }
    else{
      limit = contributionLimits.pensionInsuranceWestGermany;
      Logger.info("OST Deutschland");
    }

    const effectiveIncome = Math.min(income, limit);
    return effectiveIncome * socialSecurityRates.pensionInsurance;
  },

  calculateUnemploymentInsurance: (income: number): number => {

    const state = store.getState();
    const selectedRegion = state.unionContract.selectedRegion;
    let limit = 0;
    if(isWestGermany(selectedRegion)){
      limit = contributionLimits.unemploymentInsuranceWestGermany;
      Logger.info("WEST Deutschland");
    }
    else{
      limit = contributionLimits.unemploymentInsurancOstGermany;
      Logger.info("OST Deutschland");
    }

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
    let healthInsuranceSupplement = state.tax.healthInsuranceSupplement ?? 0;
    healthInsuranceSupplement = healthInsuranceSupplement / 200;
    Logger.info("The additional contribution will be deducted:"+healthInsuranceSupplement);
    const limit = contributionLimits.healthInsurance;
    const effectiveIncome = Math.min(income, limit);
    Logger.info("Salary Effectiv:"+effectiveIncome);
    Logger.info("Total:"+effectiveIncome * healthInsuranceSupplement);

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
    const isChildless = state.tax.isChildless;

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

  calculateNetHourlyWageAfterSocialSecurity: (salaryAfterTax: number, salaryBeforeTax: number): number => {
    const salaryForYear = SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(salaryAfterTax,salaryBeforeTax,true);
    const hourlyWageGross = calculateHourlyWage(salaryForYear);
    return hourlyWageGross;
  }


};

export default SocialSecurityCalculator;