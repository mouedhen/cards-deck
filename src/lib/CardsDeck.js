/**
 *
 */
class CardsDeck {

  /**
   * CardsDeck constructor
   * @param {Array} suits
   * @param {Array} values
   */
  constructor(suits, values) {
    this.reset(suits, values);
  }

  /**
   * Init the deck
   * @param {Array} suits
   * @param {Array} values
   * @returns {CardsDeck}
   */
  init(suits, values) {
    this.deck = [];
    this.dealedCards = [];

    if (!Array.isArray(suits) || !Array.isArray(values)) {
      return this;
    }

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({
          name: `${values[value]} of ${suits[suit]}`,
          value: values[value],
          suit: suits[suit],
        });
      }
    }
    return this;
  }

  /**
   * Reset the deck to an initial state
   * @param {Array} suits
   * @param {Array}  values
   */
  reset(suits, values) {
    this.init(suits, values);
    this.shuffle();
    return this;
  }

  /**
   * Shuffle deck
   * @returns {CardsDeck}
   */
  shuffle() {
    const {deck} = this;
    let m = deck.length, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  /**
   * Deal one card
   * @returns {*}
   */
  dealOneCard() {
    if (this.deck.length <= 0) return null;
    const card = this.deck.pop();
    this.dealedCards.push(card);
    return card;
  }
}

export default CardsDeck;
