import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bundesland } from "../../services/isWestGermany/Bundesland";
import Logger from "../../services/logger/logger";
import { UnionContractState } from "./IUnionContractSlice";

const initialState: UnionContractState = {
  regions: [],
  years: [],
  salaryGroups: [],
  selectedRegion: Bundesland.EMPTY,
  selectedYear: "",
  selectedSalaryGroup: "",
  workingHours: 35,
};

const unionContractSlice = createSlice({
  name: "unionContract",
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
    setWorkingHours: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Working hours have been set to: " + action.payload);
      state.workingHours = action.payload;
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
  setWorkingHours,
} = unionContractSlice.actions;

export default unionContractSlice.reducer;