export interface ITaxCalculatorService {
  calculateTax(income: number, forYear: boolean): number;
  calculateSoli(income: number, forYear: boolean): number;
  calculateSalaryAfterAllTax(salary: number, forYear: boolean): number;
  calculateChurchTax(income: number, forYear: boolean): number;
}