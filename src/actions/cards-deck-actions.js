import {SHUFFLE_DECK, RESET_DECK, DEAL_ONE_CARD} from './cards-deck-types';
import cardsDeck from '../config/cards-deck';
import config from '../config';

export function shuffleDeck() {
  return {
    type: SHUFFLE_DECK,
    payload: {...cardsDeck.shuffle()}
  };
}

export function resetDeck() {
  return {
    type: RESET_DECK,
    payload: {...cardsDeck.reset(config.deck.suits, config.deck.values), pickedCard: {}}
  };
}

export function dealOneCard() {
  const pickedCard = cardsDeck.dealOneCard();
  return {
    type: DEAL_ONE_CARD,
    payload: {
      pickedCard,
      ...cardsDeck
    }
  };
}
