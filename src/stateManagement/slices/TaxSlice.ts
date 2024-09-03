import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "../../services/logger/logger";
import { TaxState } from "./ITaxSlice";

const initialState: TaxState = {
  isChildless: true,
  routeToWork: 0,
  writeOff: 0,
  healthInsuranceSupplement: 1.5,
  taxClass: 1,
  isInChurch: false
};

const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    setTaxClass: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Tax class has been set to: " + action.payload);
      state.taxClass = action.payload;
    },
    setChildless: (state, action: PayloadAction<boolean>) => {
      Logger.infoRedux("Childless was set to " + action.payload);
      state.isChildless = action.payload;
    },
    setRouteToWork: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("RouteToWork was set to " + action.payload);
      state.routeToWork = action.payload;
    },
    setWriteOff: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("WriteOff was set to " + action.payload);
      state.writeOff = action.payload;
    },
    setHealthInsuranceSupplement: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("HealthInsuranceSupplement % was set to " + action.payload);
      state.healthInsuranceSupplement = action.payload;
    },
    setIsInChurch: (state, action: PayloadAction<boolean>) => {
      Logger.infoRedux("IsInChurch % was set to " + action.payload);
      state.isInChurch = action.payload;
    },
  },
});

export const {
  setTaxClass,
  setChildless,
  setRouteToWork,
  setWriteOff,
  setHealthInsuranceSupplement,
  setIsInChurch
} = taxSlice.actions;

export default taxSlice.reducer;