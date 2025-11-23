import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './stateManagement/store';
import App from './App';
import i18n from './i18n';

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

// Einmaliger Hinweis für Benutzer, wenn bereits persistierte Daten vorhanden sind
try {
  const hasPersisted = !!localStorage.getItem('persist:root');
  const hintDone = localStorage.getItem('updateHint2025_done') === 'true';
  if (hasPersisted && !hintDone) {
    // Übersetzten Text via i18n holen und als Alert anzeigen
    const msg = i18n.t('update2025_Note');
    // eslint-disable-next-line no-alert
    alert(msg);
    localStorage.setItem('updateHint2025_done', 'true');
  }
} catch (e) {
  // localStorage not available or other error — ignore silently
}

root.render(
  isStorageAllowed() ? <AppWithPersistGate /> : <AppWithoutPersistGate />
);
