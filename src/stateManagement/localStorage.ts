import { Store } from 'redux';

export const saveState = (store: Store) => {
  try {
    const state = store.getState();

    const formattedState = {
      tax: JSON.stringify(state.tax),
      salary: JSON.stringify(state.salary),
      bonus: JSON.stringify(state.bonus),
      unionContract: JSON.stringify(state.unionContract),
      _persist: JSON.stringify(state._persist),
    };

    localStorage.setItem('persist:root', JSON.stringify(formattedState));
  } catch (err) {
    console.error('Could not save state', err);
  }
};
