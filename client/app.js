import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from '../app/store/configureStore';
import routes from '../app/routes.js';


const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);


ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
