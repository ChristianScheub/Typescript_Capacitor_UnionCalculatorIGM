import { RootState } from '../store';

export const selectSalary = (state: RootState) => state.salary.salary;
export const selectSalaryWithBonus = (state: RootState) => state.salary.salaryWithBonus;