export interface SalaryCalculatorState {
    regions: string[];
    years: string[];
    salaryGroups: string[];
    selectedRegion: string;
    selectedYear: string;
    selectedSalaryGroup: string;
    bonus: number;
    nonTariffBonus: number;
    workingHours: number;
    salary: number | null;
    salaryWithBonus: number | null;
    taxClass: number | null;
    isChildless: boolean;
    christmasBonusP: number;
    profitSharingP: number;
    healthInsuranceSupplement: number;
  }