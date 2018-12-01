import reducer from '../reducer';
import {
  DEAL_ONE_CARD,
  SHUFFLE_DECK,
  RESET_DECK,
} from '../../actions/cards-deck-types';

import CardsDeck from '../../lib/CardsDeck';

let cardsDeck;

let initialState;

beforeEach(() => {
  cardsDeck = new CardsDeck(['suit #1', 'suit #2'],
      ['value #1', 'value #2']);

  initialState = {
    cardsDeck: {
      ...cardsDeck,
      pickedCard: {},
    },
  };
});

describe('cards deck reducer', () => {

  it('should return the initial state', () => {
    expect(reducer({cardsDeck: {...cardsDeck, pickedCard: {}}}, {}))
        .toEqual(initialState);
  });

  it('should handle SHUFFLE_DECK', () => {
    const shuffleAction = {
      type: SHUFFLE_DECK,
      payload: {...cardsDeck.shuffle()},
    };

    expect(
        reducer({cardsDeck: {...cardsDeck, pickedCard: {}}},
            shuffleAction).cardsDeck.deck)
        .toEqual(cardsDeck.deck);
  });

  it('should handle RESET_DECK', () => {
    const resetAction = {
      type: RESET_DECK,
      payload: {...cardsDeck.reset([], []), pickedCard: {}},
    };

    expect(
        reducer({cardsDeck: {...cardsDeck, pickedCard: {}}},
            resetAction).cardsDeck.deck)
        .toEqual(cardsDeck.deck);
  });

  it('should handle DEAL_ONE_CARD', () => {

    const pickedCard = cardsDeck.dealOneCard();
    const dealOneCardAction = {
      type: DEAL_ONE_CARD,
      payload: {...cardsDeck, pickedCard},
    };

    const state = reducer({cardsDeck: {...cardsDeck, pickedCard: {}}},
        dealOneCardAction);

    expect(state.cardsDeck.deck).toEqual(cardsDeck.deck);
    expect(state.cardsDeck.pickedCard).toEqual(pickedCard);
    expect(state.cardsDeck.dealedCards).toEqual(cardsDeck.dealedCards);
  });

});
