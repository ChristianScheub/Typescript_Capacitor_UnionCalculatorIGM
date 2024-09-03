import { RootState } from '../store';

export const setIsChildless = (state: RootState) => state.tax.isChildless;
export const selectHealthInsuranceSupplement = (state: RootState) => state.tax.healthInsuranceSupplement;