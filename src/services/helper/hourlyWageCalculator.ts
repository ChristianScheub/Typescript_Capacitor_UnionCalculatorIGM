import { store } from "../../stateManagement/store";
import { holidaysPerState } from "../isWestGermany/holidayDays";

export const calculateHourlyWage = (salaryForYear:number): number => {
    const state = store.getState();
    const hoursPerWeek = state.salaryCalculator.workingHours || 0;
    const bundesland = state.salaryCalculator.selectedRegion;
  
    // Gesamtzahl der Wochen pro Jahr
    const weeksPerYear = 52.14;
  
    // Feiertage im Bundesland abrufen
    const holidays = holidaysPerState[bundesland] || 0;
  
    // Arbeitstage pro Jahr (angenommen 5 Tage pro Woche)
    const workDaysPerYear = 5 * weeksPerYear - holidays;
  
    // Berechne die effektiven Arbeitsstunden pro Jahr
    const effectiveWorkingHoursPerYear = hoursPerWeek * workDaysPerYear / 5;
  
    // Berechnung des Brutto-Stundenlohns
    const hourlyWageGross = salaryForYear / effectiveWorkingHoursPerYear;
    
    return hourlyWageGross;
  }