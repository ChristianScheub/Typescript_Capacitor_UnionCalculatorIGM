export interface ITaxCalculatorService {
    calculateTax(salary: number,forYear: boolean): number;
    calculateSoli(salary: number,forYear: boolean): number;
    calculateSalaryAfterAllTax(salary: number, forYear: boolean): number;
  }