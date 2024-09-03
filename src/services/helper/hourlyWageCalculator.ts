import { store } from "../../stateManagement/store";
import { holidaysPerState } from "../isWestGermany/holidayDays";

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
  // Gesamtzahl der Wochen pro Jahr
  const weeksPerYear = 52.14;

  // Feiertage im Bundesland abrufen
  const holidays = holidaysPerState[bundesland] || 0;

  // Arbeitstage pro Jahr (angenommen 5 Tage pro Woche)
  const workDaysPerYear = 5 * weeksPerYear - holidays;
  return workDaysPerYear;
}