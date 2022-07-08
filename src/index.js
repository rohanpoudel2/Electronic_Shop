import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persister } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <App />
    </PersistGate >
  </Provider>
);