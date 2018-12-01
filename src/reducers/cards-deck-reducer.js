import cardsDeck from '../config/cards-deck';
import {
  SHUFFLE_DECK,
  RESET_DECK,
  DEAL_ONE_CARD,
} from '../actions/cards-deck-types';

const initialState = {
  ...cardsDeck,
  pickedCard: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {deck: action.payload.deck, ...state};
    case RESET_DECK:
      return action.payload;
    case DEAL_ONE_CARD:
      return action.payload;
    default:
      return state;
  }
}
