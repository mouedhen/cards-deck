import {combineReducers} from 'redux';
import cardsDeckReducer from './cards-deck-reducer';

export default combineReducers({
  cardsDeck: cardsDeckReducer,
});
