import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';

import reducer from '../reducers/index';

const middleware = [
  thunkMiddleware
].filter(Boolean);


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(...middleware)
  )(createStore);
  const store = finalCreateStore(reducer, initialState);
  return store;
};