import { RootState } from '../store';

export const selectBonus = (state: RootState) => state.salaryCalculator.bonus;
export const selectNonTariffBonus = (state: RootState) => state.salaryCalculator.nonTariffBonus;
export const selectSalary = (state: RootState) => state.salaryCalculator.salary;
export const selectSalaryWithBonus = (state: RootState) => state.salaryCalculator.salaryWithBonus;