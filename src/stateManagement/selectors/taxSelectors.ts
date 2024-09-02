import { RootState } from '../store';

// Zugriff auf Steuerklasse
export const selectTaxClass = (state: RootState) => state.salaryCalculator.taxClass;
export const selectRouteToWork = (state: RootState) => state.salaryCalculator.routeToWork;
export const selectWriteOff = (state: RootState) => state.salaryCalculator.writeOff;