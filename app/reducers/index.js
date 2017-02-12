import { combineReducers } from 'redux';
import exhibitions from './exhibitions/reducer';
import artists from './artists/reducer';
import places from './places/reducer';
import locale from './locale/reducer';
import translate from './translate/reducer';
import artworks from './artworks/reducer';
import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  exhibitions,
  artworks,
  artists,
  places,
  locale,
  translate,
  routing: routerReducer
});

export default rootReducer;
