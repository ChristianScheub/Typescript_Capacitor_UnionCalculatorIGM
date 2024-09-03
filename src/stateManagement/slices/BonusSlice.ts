import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "../../services/logger/logger";
import { BonusState } from "./IBonusSlice";

const initialState: BonusState = {
  christmasBonusP: 0,
  profitSharingP: 0,
  nonTariffBonus: 0,
  bonus: 10,
};

const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    setChristmasBonusP: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("ChristmasBonus % was set to " + action.payload);
      state.christmasBonusP = action.payload;
    },
    setProfitSharingP: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("ProfitSharing % was set to " + action.payload);
      state.profitSharingP = action.payload;
    },
    setNonTariffBonus: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Non-tariff bonus has been set to: " + action.payload);
      state.nonTariffBonus = action.payload;
    },
    setBonus: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Bonus has been set to: " + action.payload);
      state.bonus = action.payload;
    },
  },
});

export const {
  setChristmasBonusP,
  setProfitSharingP,
  setNonTariffBonus,
  setBonus,
} = bonusSlice.actions;

export default bonusSlice.reducer;