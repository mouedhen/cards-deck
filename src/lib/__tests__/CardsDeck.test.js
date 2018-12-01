import CardsDeck from '../CardsDeck';

describe('Card Deck Lib', () => {

  it('should be initialized properly', () => {
    const suits = ['Suit #1', 'Suit #2'];
    const values = ['Value #1', 'Value #2'];

    let deck = [];

    for (let suit in suits) {
      for (let value in values) {
        deck.push({
          name: `${values[value]} of ${suits[suit]}`,
          value: values[value],
          suit: suits[suit],
        });
      }
    }

    let cardsDeck = new CardsDeck(suits, values);

    cardsDeck.init(suits, values);

    expect(cardsDeck.deck).toEqual(deck);
    expect(cardsDeck.dealedCards).toEqual([]);
  });

  it('should return empty deck if passed properties are not arrays', () => {
    const suits = undefined;
    const values = ['Value #1', 'Value #2'];

    let cardsDeck = new CardsDeck(suits, values);

    expect(cardsDeck.deck).toEqual([]);
    expect(cardsDeck.dealedCards).toEqual([]);
  });

  it('Should return null when dealing one card if empty deck', () => {
    const suits = [];
    const values = [];

    let cardsDeck = new CardsDeck(suits, values);

    let pickedCard = cardsDeck.dealOneCard()

    expect(pickedCard).toBeNull()
  })

});
