import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';
import App from './App';
import i18n from './i18n';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

// Einmaliger Hinweis für Benutzer, wenn bereits persistierte Daten vorhanden sind
try {
  const hasPersisted = !!localStorage.getItem('persist:root');
  const hintDone = localStorage.getItem('updateHint2025_done') === 'true';
  if (hasPersisted && !hintDone) {
    const msg = i18n.t('update2025_Note');
    // eslint-disable-next-line no-alert
    alert(msg);
    localStorage.setItem('updateHint2025_done', 'true');
  }
} catch (e) {
  // localStorage not available or other error — ignore silently
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
