import { RootState } from '../store';

export const setIsChildless = (state: RootState) => state.salaryCalculator.isChildless;
export const selectHealthInsuranceSupplement = (state: RootState) => state.salaryCalculator.healthInsuranceSupplement;