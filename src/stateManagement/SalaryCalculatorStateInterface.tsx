import { Bundesland } from "../services/isWestGermany/Bundesland";

export interface SalaryCalculatorState {
    regions: string[];
    years: string[];
    salaryGroups: string[];
    selectedRegion: Bundesland;
    selectedYear: string;
    selectedSalaryGroup: string;
    bonus: number|null;
    nonTariffBonus: number|null;
    workingHours: number|null;
    salary: number | null;
    salaryWithBonus: number | null;
    taxClass: number | null;
    isChildless: boolean;
    christmasBonusP: number|null;
    profitSharingP: number|null;
    healthInsuranceSupplement: number|null;
    routeToWork: number | null;
    writeOff: number | null;
  }