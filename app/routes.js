import React from 'react';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';
import Layout from './components/layout';
import MainPage from './components/main_page';

export default (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path="*" component={MainPage} />
    </Route>
  </Router>
);
