export interface SalaryCalculatorState {
    regions: string[];
    years: string[];
    salaryGroups: string[];
    selectedRegion: string;
    selectedYear: string;
    selectedSalaryGroup: string;
    bonus: string;
    workingHours: number;
    salary: number | null;
    salaryWithBonus: number | null;
    taxClass: number | null;
    isChildless: boolean;
    christmasBonusP: string;
    profitSharingP: string;
    healthInsuranceSupplement: number;
  }