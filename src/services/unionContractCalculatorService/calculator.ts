import { store } from "../../stateManagement/store";
import Logger from "../logger/logger";
import {
  tZugAProzent,
  tZugBProzent,
  transformationsGeldProzent,
  urlaubsgeldProzent
} from "../../config/unionContractConfig";
import unionContractCalculatorService from ".";
import { UnionContractData } from "./types/UnionContractData";
import tarifdaten from "./tarifdaten.json";

const data: UnionContractData = tarifdaten as UnionContractData;


export const calculateSalaryForGroup = (
  region: string,
  year: string,
  salaryGroup: string
): number => {

  const salary = data[region]?.years?.[year]?.[salaryGroup] || null;
  if (!salary) return 0;

  Logger.info("Salary: " + salary);
  const baseSalary = parseFloat(
    salary.replace("€", "").replace(".", "").replace(",", ".")
  );
  if (isNaN(baseSalary)) return 0;

  return baseSalary;
};

export const calculateBonus = (bonusPercentage: string | number, salary: number): number => {
  const bonusPercentageValue = typeof bonusPercentage === 'string'
    ? parseFloat(bonusPercentage)
    : bonusPercentage;
  if (isNaN(bonusPercentageValue)) return 0;
  const bonusAmount = salary * (bonusPercentageValue / 100);

  Logger.info("Bonus: " + bonusAmount);
  return bonusAmount;
};

export const calculateSalaryWithBonus = (): number => {
  const state = store.getState();
  const bonusPercentage = state.salaryCalculator.bonus;
  const nonTariffBonus = state.salaryCalculator.nonTariffBonus;
  const baseSalary = state.salaryCalculator.salary;

  Logger.info("Bonus Percentage: " + bonusPercentage);
  Logger.info("Base Salary: " + baseSalary);

  if (baseSalary) {
    const bonusAmount = calculateBonus(bonusPercentage, baseSalary);
    const totalSalary = baseSalary + bonusAmount+nonTariffBonus;
    return parseFloat(totalSalary.toFixed(2));
  }
  return 0;
};

export const calculateSalaryWithAllBonus = (): number => {
  //Warning: This function return the Salary with bonus for the whole year
  const state = store.getState();
  const bonusPercentage = state.salaryCalculator.bonus;
  const baseSalary = state.salaryCalculator.salary;

  if (baseSalary) {
    const bonusAmount = calculateBonus(bonusPercentage, baseSalary);
    let totalSalary = (baseSalary + bonusAmount) * 12;
    const christmasBonus = caclulateChristmasBonus();
    const transformationsGeld = calculateTransformationsGeld();
    const tZugA = calculateTZugA();
    const profitSharing = calculateProfitSharing();
    const tZugB = calculateTZugB();
    const urlaubsgeld = calculateUrlaubsgeld();
    totalSalary += christmasBonus + transformationsGeld + tZugA + profitSharing + tZugB + urlaubsgeld

    return parseFloat(totalSalary.toFixed(2));
  }
  return 0;
};

export const caclulateChristmasBonus = (): number => {
  const state = store.getState();
  const salaryWithBonus = state.salaryCalculator.salaryWithBonus || 0;
  const christmasBonusPercentage = state.salaryCalculator.christmasBonusP || 0;

  return calculateBonus(christmasBonusPercentage.toString(), salaryWithBonus);
};

export const calculateTransformationsGeld = (): number => {
  const state = store.getState();
  const salaryWithBonus = state.salaryCalculator.salaryWithBonus || 0;
  return calculateBonus(transformationsGeldProzent.toString(), salaryWithBonus);
};

export const calculateTZugA = (): number => {
  const state = store.getState();
  const salaryWithBonus = state.salaryCalculator.salaryWithBonus || 0;
  return calculateBonus(tZugAProzent.toString(), salaryWithBonus);
};

export const calculateProfitSharing = (): number => {
  const state = store.getState();
  const salaryWithBonus = state.salaryCalculator.salaryWithBonus || 0;
  const profitSharingP = state.salaryCalculator.profitSharingP || 0;
  return calculateBonus(profitSharingP.toString(), salaryWithBonus);
};

export const calculateTZugB = (): number => {
  const salary = unionContractCalculatorService.getBasicWage();
  return calculateBonus(tZugBProzent.toString(), salary);
};

export const calculateUrlaubsgeld = (): number => {
  const state = store.getState();
  const salaryWithBonus = state.salaryCalculator.salaryWithBonus || 0;
  return calculateBonus(urlaubsgeldProzent.toString(), salaryWithBonus);
};