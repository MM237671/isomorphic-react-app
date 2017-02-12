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
import Artist from './components/artistDetail';
import Places from './components/places';
import Contacts from './components/contacts';
import Catalog from './components/catalog';
import CatalogItem from './components/catalogItem';

export default (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path="/" component={MainPage} />
      <Route path="/artist" component={Artists} />
      <Route path="/artist/:id" component={Artist} />
      <Route path="/exhibition" component={Exhibition} />
      <Route path="/exhibition/:id" component={ExhibitionDetail} />
      <Route path="/places" component={Places} />
      <Route path="/contacts" component={Contacts} />

      <Route path="/catalog/:material/:artist" component={Catalog} />
      <Route path="/catalog/:material/:artist/:artwork" component={CatalogItem} />
    </Route>
  </Router>
);
