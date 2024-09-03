import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "../../services/logger/logger";
import { SalaryState } from "./ISalarySlice";

const initialState: SalaryState = {
  salary: 0,
  salaryWithBonus: 0,
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setSalary: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Salary has been set to: " + action.payload);
      state.salary = action.payload;
    },
    setSalaryWithBonus: (state, action: PayloadAction<number | null>) => {
      Logger.infoRedux("Salary with bonus has been set to: " + action.payload);
      state.salaryWithBonus = action.payload;
    },
  },
});

export const {
  setSalary,
  setSalaryWithBonus,
} = salarySlice.actions;

export default salarySlice.reducer;