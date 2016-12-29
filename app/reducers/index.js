import { combineReducers } from 'redux';
import exhibitions from './exhibitions/reducer';
import artists from './artists/reducer';
import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  exhibitions,
  artists,
  routing: routerReducer
});

export default rootReducer;
