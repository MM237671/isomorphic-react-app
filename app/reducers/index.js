import { combineReducers } from 'redux';
import matches from './matches/reducer';
import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  matches,
  routing: routerReducer
});

export default rootReducer;
