export interface SalaryCalculatorViewProps {
  regions: string[];
  years: string[];
  salaryGroups: string[];
  selectedRegion: string;
  selectedYear: string;
  selectedSalaryGroup: string;
  bonus: number|null;
  nonTariffBonusChange: number|null;
  workingHours: number|null;
  salary: number | null;
  christmasBonus: number|null;
  profitSharing: number|null;
  onRegionChange: (region: string) => void;
  onYearChange: (year: string) => void;
  onSalaryGroupChange: (salaryGroup: string) => void;
  onBonusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNonTariffBonusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onWorkingHoursChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChristmasBonusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProfitSharingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}