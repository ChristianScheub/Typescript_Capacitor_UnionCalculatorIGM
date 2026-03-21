import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import taxReducer from './slices/TaxSlice';
import salaryReducer from './slices/SalarySlice';
import bonusReducer from './slices/BonusSlice';
import unionContractReducer from './slices/UnionContractSlice';
import { combineReducers, Reducer } from 'redux';

// Sicherer localStorage-Wrapper, der auch in Umgebungen ohne localStorage funktioniert
const createNoopStorage = () => ({
  getItem: (_key: string) => Promise.resolve(null),
  setItem: (_key: string, _value: unknown) => Promise.resolve(),
  removeItem: (_key: string) => Promise.resolve(),
});

const safeStorage = (() => {
  try {
    return createWebStorage('local');
  } catch {
    return createNoopStorage();
  }
})();

// Funktion zum Abrufen der Zustimmung
const getStorage = () => {
  try {
    const allowedLocalStorageUse = localStorage.getItem('storeReduxLocal');
    return allowedLocalStorageUse === 'true' ? safeStorage : null;
  } catch {
    return null;
  }
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
    storage: safeStorage,
  };

  // Erstelle den persistierten Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  storeConfig.reducer = persistedReducer as Reducer<any, any>; // Typanpassung
}

export const store = configureStore({
  ...storeConfig,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/FLUSH', 'persist/REGISTER'],
      },
    }),
});

export const persistor = storageAllowed ? persistStore(store) : undefined;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
