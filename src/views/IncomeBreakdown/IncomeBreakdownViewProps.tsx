export interface IncomeBreakdownProps {
  title: string;
  salary: number | null;
  salaryWithBonus: number | null;
  salaryAfterTax: number | null;
  tax: number | null;
  churchTax?: number | null;
  solidarityTax: number | null;
  pensionInsurance: number;
  unemploymentInsurance: number;
  healthInsuranceSupplement: number;
  healthInsurance: number;
  careInsurance: number;
  calcultedSalaryAfterSocialSecurity: number;
  christmasBonus?: number;
  vacationBonus?: number;
  tZugA?: number;
  tZugB?: number;
  transformationsGeld?: number;
  profitSharing?: number;
  salaryWithAllBonus?: number;
}
