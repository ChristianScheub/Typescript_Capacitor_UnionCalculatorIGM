export interface SalaryCalculatorViewProps {
  regions: string[];
  years: string[];
  salaryGroups: string[];
  selectedRegion: string;
  selectedYear: string;
  selectedSalaryGroup: string;
  bonus: string;
  workingHours: number;
  salary: number | null;
  christmasBonus: string;
  profitSharing: string;
  onRegionChange: (region: string) => void;
  onYearChange: (year: string) => void;
  onSalaryGroupChange: (salaryGroup: string) => void;
  onBonusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onWorkingHoursChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChristmasBonusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProfitSharingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}