import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store-toolkit';
import App from './App.js';
import './index.css';
import 'modern-normalize';

// import { getContacts } from './redux/operations';
// store.dispatch(getContacts());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
