import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';
import App from './App';

test('renders app without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // Just verify the app renders without errors
  expect(document.body).toBeInTheDocument();
});
