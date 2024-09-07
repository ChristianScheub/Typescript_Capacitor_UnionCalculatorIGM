import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // LocalStorage verwenden
import taxReducer from './slices/TaxSlice';
import salaryReducer from './slices/SalarySlice';
import bonusReducer from './slices/BonusSlice';
import unionContractReducer from './slices/UnionContractSlice';
import { combineReducers, Reducer } from 'redux';

// Funktion zum Abrufen der Zustimmung
const getStorage = () => {
  const allowedLocalStorageUse = localStorage.getItem('allowedLocalStorageUse');
  return allowedLocalStorageUse === 'true' ? storage : null;
};

// Kombinierte Reducer
const rootReducer = combineReducers({
  tax: taxReducer,
  salary: salaryReducer,
  bonus: bonusReducer,
  unionContract: unionContractReducer,
});

const storageAllowed = getStorage() !== null;

const storeConfig: {
  reducer: Reducer<any, any>;
} = {
  reducer: rootReducer,
};

if (storageAllowed) {
  // Konfiguration für redux-persist
  const persistConfig = {
    key: 'root',
    storage: storage!,
  };

  // Erstelle den persistierten Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  storeConfig.reducer = persistedReducer as Reducer<any, any>; // Typanpassung
}

export const store = configureStore(storeConfig);

export const persistor = storageAllowed ? persistStore(store) : undefined;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
