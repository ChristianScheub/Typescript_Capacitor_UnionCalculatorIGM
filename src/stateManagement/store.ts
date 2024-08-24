import { configureStore } from '@reduxjs/toolkit';
import salaryCalculatorReducer from './salaryCalculatorSlice';

export const store = configureStore({
  reducer: {
    salaryCalculator: salaryCalculatorReducer,
  },
});

// Typen für TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;