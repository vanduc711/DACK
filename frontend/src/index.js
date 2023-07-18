import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles>
            <App />
          </GlobalStyles>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

