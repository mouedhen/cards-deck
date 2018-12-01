/**
 * Cards deck singleton
 */
import CardsDeck from '../lib/CardsDeck';
import config from '../config';

let cardsDeck = new CardsDeck(config.deck.suits, config.deck.values);

export default cardsDeck;
