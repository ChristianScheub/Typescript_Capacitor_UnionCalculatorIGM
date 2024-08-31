import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "../services/logger/logger";
import { SalaryCalculatorState } from "./SalaryCalculatorStateInterface";

const initialState: SalaryCalculatorState = {
  regions: [],
  years: [],
  salaryGroups: [],
  selectedRegion: "",
  selectedYear: "",
  selectedSalaryGroup: "",
  bonus: "10",
  workingHours: 35,
  salary: 0,
  salaryWithBonus: 0,
  taxClass: 1,
  isChildless: true,
  christmasBonusP: "0",
  profitSharingP: "0",
};

const salaryCalculatorSlice = createSlice({
  name: "salaryCalculator",
  initialState,
  reducers: {
    setRegions: (state, action: PayloadAction<string[]>) => {
      Logger.infoRedux("Regions wurde gesetzt mit Wert: " + action.payload);
      state.regions = action.payload;
    },
    setYears: (state, action: PayloadAction<string[]>) => {
      Logger.infoRedux("Years wurde gesetzt mit Wert: " + action.payload);
      state.years = action.payload;
    },
    setSalaryGroups: (state, action: PayloadAction<string[]>) => {
      Logger.infoRedux(
        "SalaryGroups wurde gesetzt mit Wert: " + action.payload
      );
      state.salaryGroups = action.payload;
    },
    setSelectedRegion: (state, action: PayloadAction<string>) => {
      Logger.infoRedux(
        "SelectedRegion wurde gesetzt mit Wert: " + action.payload
      );
      state.selectedRegion = action.payload;
    },
    setSelectedYear: (state, action: PayloadAction<string>) => {
      Logger.infoRedux(
        "SelectedYear wurde gesetzt mit Wert: " + action.payload
      );
      state.selectedYear = action.payload;
    },
    setSelectedSalaryGroup: (state, action: PayloadAction<string>) => {
      Logger.infoRedux(
        "SelectedSalaryGroup wurde gesetzt mit Wert: " + action.payload
      );
      state.selectedSalaryGroup = action.payload;
    },
    setBonus: (state, action: PayloadAction<string>) => {
      Logger.infoRedux("Bonus wurde gesetzt mit Wert: " + action.payload);
      state.bonus = action.payload;
    },
    setSalary: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Salary wurde gesetzt mit Wert: " + action.payload);
      state.salary = action.payload;
    },
    setSalaryWithBonus: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Salary wurde gesetzt mit Wert: " + action.payload);
      state.salaryWithBonus = action.payload;
    },
    setWorkingHours: (state, action: PayloadAction<number>) => {
      state.workingHours = action.payload;
    },
    setTaxClass: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("TaxClass wurde gesetzt mit Wert: " + action.payload);
      state.taxClass = action.payload;
    },
    setChildless: (state, action: PayloadAction<boolean>) => {
      Logger.infoRedux("Childless was set to " + action.payload);
      state.isChildless = action.payload;
    },
    setChristmasBonusP: (state, action: PayloadAction<string>) => {
      Logger.infoRedux("ChristmasBonus % was set to " + action.payload);
      state.christmasBonusP = action.payload;
    },
    setProfitSharingP: (state, action: PayloadAction<string>) => {
      Logger.infoRedux("ProfitSharing % was set to " + action.payload);
      state.profitSharingP = action.payload;
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
  setSalary,
  setSalaryWithBonus,
  setWorkingHours,
  setTaxClass,
  setChildless,
  setChristmasBonusP,
  setProfitSharingP
} = salaryCalculatorSlice.actions;

export default salaryCalculatorSlice.reducer;
