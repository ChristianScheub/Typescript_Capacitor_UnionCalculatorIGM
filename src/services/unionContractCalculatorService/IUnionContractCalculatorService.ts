export interface IUnionContractCalculatorService {
  getRegions: () => string[];
  getYearsForRegion: () => string[];
  getEntgeltgruppenForRegionAndYear: () => string[];
  getSalary: () => number;
  getSalaryForEG: (salaryGroup: string) => number;
  getBasicWage: () => number;
  calculateSalaryWithBonus: () => number;
  calculateBonus: (bonusPercentage: string|number, salary: number) => number;
  caclulateChristmasBonus: () => number;
  calculateTransformationsGeld: () => number;
  calculateTZugA: () => number;
  calculateTZugB: () => number;
  calculateUrlaubsgeld: () => number;
  calculateSalaryForGroup: (region: string, year: string, salaryGroup: string) => number;
  calculateProfitSharing: () => number;
  calculateSalaryWithAllBonus: () => number;
  calculateGrossHourlyWage : () => number;
}