import React from 'react';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';
import Layout from './components/layout';
import MainPage from './components/main';
import Exhibition from './components/exhibition';
import ExhibitionDetail from './components/exhibitionDetail';
import Artists from './components/artists';
import Artist from './components/artists';

export default (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path="/" component={MainPage} />
      <Route path="/artist" component={Artists} />
      <Route path="/artist/:id" component={Artist} />
      <Route path="/exhibition" component={Exhibition} />
      <Route path="/exhibition/:id" component={ExhibitionDetail} />
    </Route>
  </Router>
);
