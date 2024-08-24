export interface ISocialSecurityCalculator {
    calculatePensionInsurance: (income: number) => number;
    calculateUnemploymentInsurance: (income: number) => number;
    calculateHealthInsurance: (income: number) => number;
    calculateCareInsurance: (income: number, isChildless: boolean) => number;
    calculateTotalSocialSecurity: () => number;
    calculateNetIncomeAfterSocialSecurity: (salaryAfterTax: number) => number;
  }  