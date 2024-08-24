import { RootState } from '../store';

export const selectRegions = (state: RootState) => state.salaryCalculator.regions;
export const selectYears = (state: RootState) => state.salaryCalculator.years;
export const selectSalaryGroups = (state: RootState) => state.salaryCalculator.salaryGroups;
export const selectSelectedRegion = (state: RootState) => state.salaryCalculator.selectedRegion;
export const selectSelectedYear = (state: RootState) => state.salaryCalculator.selectedYear;
export const selectSelectedSalaryGroup = (state: RootState) => state.salaryCalculator.selectedSalaryGroup;
export const selectWorkingHours = (state: RootState) => state.salaryCalculator.workingHours;
export const selectChristmasBonusP = (state: RootState) => state.salaryCalculator.christmasBonusP;
export const selectProfitSharingP = (state: RootState) => state.salaryCalculator.profitSharingP;