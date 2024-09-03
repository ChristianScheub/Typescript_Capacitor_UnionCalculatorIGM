import { RootState } from '../store';

export const selectTaxClass = (state: RootState) => state.tax.taxClass;
export const selectRouteToWork = (state: RootState) => state.tax.routeToWork;
export const selectWriteOff = (state: RootState) => state.tax.writeOff;
export const selectIsInChurch = (state: RootState) => state.tax.isInChurch;