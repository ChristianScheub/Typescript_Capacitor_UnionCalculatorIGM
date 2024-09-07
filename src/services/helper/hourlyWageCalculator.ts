import { store } from "../../stateManagement/store";
import { holidaysPerState } from "../isWestGermany/holidayDays";
import Logger from "../logger/logger";

export const calculateHourlyWage = (salaryForYear: number): number => {
  const state = store.getState();
  const hoursPerWeek = state.unionContract.workingHours || 0;
  const workDaysPerYear = getWorkDaysPerYear();

  const effectiveWorkingHoursPerYear = hoursPerWeek * workDaysPerYear / 5;

  // Berechnung des Brutto-Stundenlohns
  const hourlyWageGross = salaryForYear / effectiveWorkingHoursPerYear;

  return hourlyWageGross;
}

export const getWorkDaysPerYear = (): number => {
  const state = store.getState();

  const bundesland = state.unionContract.selectedRegion;
  const weeksPerYear = 52.14;

  if (!(bundesland in holidaysPerState)) {
    Logger.warn(`selectedRegion ${bundesland} is not defined in holidaysPerState.`);
    return 0; 
  }

  const holidays = holidaysPerState[bundesland as keyof typeof holidaysPerState] || 0;

  // Arbeitstage pro Jahr (angenommen 5 Tage pro Woche)
  const workDaysPerYear = 5 * weeksPerYear - holidays;
  return workDaysPerYear;
}