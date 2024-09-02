import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "../services/logger/logger";
import { SalaryCalculatorState } from "./SalaryCalculatorStateInterface";
import { Bundesland } from "../services/isWestGermany/Bundesland";

const initialState: SalaryCalculatorState = {
  regions: [],
  years: [],
  salaryGroups: [],
  selectedRegion: Bundesland.EMPTY,
  selectedYear: "",
  selectedSalaryGroup: "",
  bonus: 10,
  nonTariffBonus: 0,
  workingHours: 35,
  salary: 0,
  salaryWithBonus: 0,
  taxClass: 1,
  isChildless: true,
  christmasBonusP: 0,
  profitSharingP: 0,
  healthInsuranceSupplement: 1.5,
  routeToWork:0,
  writeOff:0
}; 

const salaryCalculatorSlice = createSlice({
  name: "salaryCalculator",
  initialState,
  reducers: {
    setRegions: (state, action: PayloadAction<string[]>) => {
      Logger.infoRedux("Regions have been set to: " + action.payload.join(", "));
      state.regions = action.payload;
    },
    setYears: (state, action: PayloadAction<string[]>) => {
      Logger.infoRedux("Years have been set to: " + action.payload.join(", "));
      state.years = action.payload;
    },
    setSalaryGroups: (state, action: PayloadAction<string[]>) => {
      Logger.infoRedux("Salary groups have been set to: " + action.payload.join(", "));
      state.salaryGroups = action.payload;
    },
    setSelectedRegion: (state, action: PayloadAction<Bundesland>) => {
      Logger.infoRedux("Selected region has been set to: " + action.payload);
      state.selectedRegion = action.payload;
    },
    setSelectedYear: (state, action: PayloadAction<string>) => {
      Logger.infoRedux("Selected year has been set to: " + action.payload);
      state.selectedYear = action.payload;
    },
    setSelectedSalaryGroup: (state, action: PayloadAction<string>) => {
      Logger.infoRedux("Selected salary group has been set to: " + action.payload);
      state.selectedSalaryGroup = action.payload;
    },
    setBonus: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("Bonus has been set to: " + action.payload);
      state.bonus = action.payload;
    },
    setNonTariffBonus: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("Non-tariff bonus has been set to: " + action.payload);
      state.nonTariffBonus = action.payload;
    },
    setSalary: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Salary has been set to: " + action.payload);
      state.salary = action.payload;
    },
    setSalaryWithBonus: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Salary with bonus has been set to: " + action.payload);
      state.salaryWithBonus = action.payload;
    },
    setWorkingHours: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("Working hours have been set to: " + action.payload);
      state.workingHours = action.payload;
    },
    setTaxClass: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Tax class has been set to: " + action.payload);
      state.taxClass = action.payload;
    },
    setChildless: (state, action: PayloadAction<boolean>) => {
      Logger.infoRedux("Childless was set to " + action.payload);
      state.isChildless = action.payload;
    },
    setChristmasBonusP: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("ChristmasBonus % was set to " + action.payload);
      state.christmasBonusP = action.payload;
    },
    setProfitSharingP: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("ProfitSharing % was set to " + action.payload);
      state.profitSharingP = action.payload;
    },
    setHealthInsuranceSupplement: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("HealthInsuranceSupplement % was set to " + action.payload);
      state.healthInsuranceSupplement = action.payload;
    },
    setRouteToWork: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("RouteToWork was set to " + action.payload);
      state.routeToWork = action.payload;
    },
    setWriteOff: (state, action: PayloadAction<number|null>) => {
      Logger.infoRedux("WriteOff was set to " + action.payload);
      state.writeOff = action.payload;
    },
  },
});

export const {
  setRegions,
  setYears,
  setSalaryGroups,
  setSelectedRegion,
  setSelectedYear,
  setSelectedSalaryGroup,
  setBonus,
  setNonTariffBonus,
  setSalary,
  setSalaryWithBonus,
  setWorkingHours,
  setTaxClass,
  setChildless,
  setChristmasBonusP,
  setProfitSharingP,
  setHealthInsuranceSupplement,
  setRouteToWork,
  setWriteOff
} = salaryCalculatorSlice.actions;

export default salaryCalculatorSlice.reducer;