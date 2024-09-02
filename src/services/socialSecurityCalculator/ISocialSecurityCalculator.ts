export interface ISocialSecurityCalculator {
    calculatePensionInsurance: (income: number) => number;
    calculateUnemploymentInsurance: (income: number) => number;
    calculateHealthInsurance: (income: number) => number;
    calculateHealthInsuranceSupplement: (income: number) => number;
    calculateCareInsurance: (income: number, isChildless: boolean) => number;
    calculateTotalSocialSecurity: (salaryBeforeTax: number) => number;
    calculateNetIncomeAfterSocialSecurity: (salaryAfterTax: number,salaryBeforeTax: number,forYear: boolean) => number;
    calculateNetHourlyWageAfterSocialSecurity: (salaryAfterTax: number,salaryBeforeTax: number) => number;
  }  