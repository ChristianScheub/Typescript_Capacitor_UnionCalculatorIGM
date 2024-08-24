import unionContractCalculatorService from ".";
import { store } from "../../stateManagement/store";
import Logger from "../logger/logger";
import tarifdaten from "./tarifdaten.json";
import { UnionContractData } from "./types/UnionContractData";

const data: UnionContractData = tarifdaten as UnionContractData;

export const getRegions = (): string[] => {
  return Object.keys(data);
};

export const getYearsForRegion = (): string[] => {
  const state = store.getState();
  const selectedRegion = state.salaryCalculator.selectedRegion;

  if (!selectedRegion || !data[selectedRegion]) return [];
  return Object.keys(data[selectedRegion].years);
};

export const getEntgeltgruppenForRegionAndYear = (): string[] => {
  const state = store.getState();
  const selectedRegion = state.salaryCalculator.selectedRegion;
  const selectedYear = state.salaryCalculator.selectedYear;

  const yearData = data[selectedRegion]?.years?.[selectedYear];
  if (!yearData) return [];
  return Object.keys(yearData);
};

export const getSalary = (): number => {
  const state = store.getState();
  const salaryGroup = state.salaryCalculator.selectedSalaryGroup;
  const workingHours = state.salaryCalculator.workingHours;

  const salary = unionContractCalculatorService.getSalaryForEG(salaryGroup)
  const adjustedSalary = (salary / 35) * workingHours;
  return Number(adjustedSalary.toFixed(2));
};

export const getSalaryForEG = (salaryGroup: string): number => {
  const state = store.getState();
  const selectedRegion = state.salaryCalculator.selectedRegion;
  const selectedYear = state.salaryCalculator.selectedYear;

  if (!selectedRegion || !selectedYear || !salaryGroup) return 0;

  return unionContractCalculatorService.calculateSalaryForGroup(selectedRegion, selectedYear, salaryGroup);
};

export const getBasicWage = (): number => {
  const state = store.getState();
  const selectedRegion = state.salaryCalculator.selectedRegion;
  if(!selectedRegion) return 0;
  if((!data[selectedRegion].basicWage)) return 0;
  const salary = unionContractCalculatorService.getSalaryForEG(data[selectedRegion].basicWage)

  Logger.info("Basic Wage: " + data[selectedRegion].basicWage);
  return Number(salary.toFixed(2));
};