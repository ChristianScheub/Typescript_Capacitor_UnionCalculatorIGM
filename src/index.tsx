import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './stateManagement/store';
import App from './App';

// Funktion zum Überprüfen, ob die Speicherung erlaubt ist
const isStorageAllowed = () => {
  const allowedLocalStorageUse = localStorage.getItem('allowedLocalStorageUse');
  return allowedLocalStorageUse === 'true';
};

// Komponente mit PersistGate, falls Persistierung erlaubt ist
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

// Komponente ohne PersistGate, falls Persistierung nicht erlaubt ist
const AppWithoutPersistGate = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  isStorageAllowed() ? <AppWithPersistGate /> : <AppWithoutPersistGate />,
  document.getElementById('root')
);
