import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  isStorageAllowed() ? <AppWithPersistGate /> : <AppWithoutPersistGate />,
  document.getElementById('root')
);
