import { RootState } from '../store';

export const selectBonus = (state: RootState) => state.bonus.bonus;
export const selectNonTariffBonus = (state: RootState) => state.bonus.nonTariffBonus;
export const selectChristmasBonusP = (state: RootState) => state.bonus.christmasBonusP;
export const selectProfitSharingP = (state: RootState) => state.bonus.profitSharingP;