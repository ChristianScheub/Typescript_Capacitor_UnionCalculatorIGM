import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './stateManagement/store';
import App from './App';

const isStorageAllowed = () => {
  const allowedLocalStorageUse = localStorage.getItem('storeReduxLocal');
  return allowedLocalStorageUse === 'true';
};

const AppWithPersistGate = () => (
  <Provider store={store}>
    {persistor ? (
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    ) : (
      <App />
    )}
  </Provider>
);

const AppWithoutPersistGate = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  isStorageAllowed() ? <AppWithPersistGate /> : <AppWithoutPersistGate />
);
