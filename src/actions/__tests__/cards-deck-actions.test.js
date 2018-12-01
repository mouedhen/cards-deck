import * as actions from '../cards-deck-actions';
import {RESET_DECK, SHUFFLE_DECK, DEAL_ONE_CARD} from '../cards-deck-types';

describe('Cards Deck Actions', () => {

  describe('Reset Deck', () => {
    it('has the correct type', () => {
      const action = actions.resetDeck();
      expect(action.type).toEqual(RESET_DECK);
    });

    // it('has the correct payload', () => {});
  });

  describe('Shuffle Deck', () => {
    it('has the correct type', () => {
      const action = actions.shuffleDeck();
      expect(action.type).toEqual(SHUFFLE_DECK);
    });

    it('has the correct payload', () => {});
  });

  describe('Deal One Card', () => {
    it('has the correct type', () => {
      const action = actions.dealOneCard();
      expect(action.type).toEqual(DEAL_ONE_CARD);
    });

    // it('has the correct payload', () => {});
  });

});
