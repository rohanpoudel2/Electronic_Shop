import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);