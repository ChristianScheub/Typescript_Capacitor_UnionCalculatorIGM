import { configureStore } from '@reduxjs/toolkit';
import taxReducer from './slices/TaxSlice';
import salaryReducer from './slices/SalarySlice';
import bonusReducer from './slices/BonusSlice';
import unionContractReducer from './slices/UnionContractSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tax: taxReducer,
  salary: salaryReducer,
  bonus: bonusReducer,
  unionContract: unionContractReducer,
});

const isStorageAllowed = (): boolean => {
  try {
    return localStorage.getItem('storeReduxLocal') === 'true';
  } catch {
    return false;
  }
};

// Synchrones Laden aus localStorage — kein async, kein Timing-Problem
const loadPersistedState = () => {
  try {
    if (!isStorageAllowed()) return undefined;
    const serialized = localStorage.getItem('persist:root');
    if (!serialized) return undefined;
    const raw = JSON.parse(serialized);
    return {
      tax: raw.tax ? JSON.parse(raw.tax) : undefined,
      salary: raw.salary ? JSON.parse(raw.salary) : undefined,
      bonus: raw.bonus ? JSON.parse(raw.bonus) : undefined,
      unionContract: raw.unionContract ? JSON.parse(raw.unionContract) : undefined,
    };
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadPersistedState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Automatisches Speichern bei jeder State-Änderung
if (isStorageAllowed()) {
  store.subscribe(() => {
    try {
      const state = store.getState();
      const serialized = JSON.stringify({
        tax: JSON.stringify(state.tax),
        salary: JSON.stringify(state.salary),
        bonus: JSON.stringify(state.bonus),
        unionContract: JSON.stringify(state.unionContract),
      });
      localStorage.setItem('persist:root', serialized);
    } catch {
      // ignore write errors
    }
  });
}

// persistor wird nicht mehr benötigt, bleibt undefined für Kompatibilität
export const persistor = undefined;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
