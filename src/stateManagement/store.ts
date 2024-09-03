import { configureStore } from '@reduxjs/toolkit';
import taxReducer from './slices/TaxSlice';
import salaryReducer from './slices/SalarySlice';
import bonusReducer from './slices/BonusSlice';
import unionContractReducer from './slices/UnionContractSlice';

export const store = configureStore({
  reducer: {
    tax: taxReducer,
    salary: salaryReducer,
    bonus: bonusReducer,
    unionContract: unionContractReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;