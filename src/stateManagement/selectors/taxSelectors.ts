import { RootState } from '../store';

// Zugriff auf Steuerklasse
export const selectTaxClass = (state: RootState) => state.salaryCalculator.taxClass;