import { combineReducers } from 'redux';
import exhibitions from './exhibitions/reducer';
import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  exhibitions,
  routing: routerReducer
});

export default rootReducer;
