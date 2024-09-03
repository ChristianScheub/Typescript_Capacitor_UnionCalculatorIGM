import { Bundesland } from "../../services/isWestGermany/Bundesland";

export interface UnionContractState {
    regions: string[];
    years: string[];
    salaryGroups: string[];
    selectedRegion: Bundesland;
    selectedYear: string;
    selectedSalaryGroup: string;
    workingHours: number | null;
  }  