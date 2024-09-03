import { RootState } from '../store';

export const selectRegions = (state: RootState) => state.unionContract.regions;
export const selectYears = (state: RootState) => state.unionContract.years;
export const selectSalaryGroups = (state: RootState) => state.unionContract.salaryGroups;
export const selectSelectedRegion = (state: RootState) => state.unionContract.selectedRegion;
export const selectSelectedYear = (state: RootState) => state.unionContract.selectedYear;
export const selectSelectedSalaryGroup = (state: RootState) => state.unionContract.selectedSalaryGroup;
export const selectWorkingHours = (state: RootState) => state.unionContract.workingHours;