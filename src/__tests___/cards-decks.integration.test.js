import React from 'react';
import {mount} from 'enzyme';

import Root from '../Root';
import Home from '../views/Home';

import cardsDeck from '../config/cards-deck';

let wrapped;

let pickedCard = {};
let initialState = {
  cardsDeck: {
    ...cardsDeck,
    pickedCard,
  },
};

beforeEach(() => {
  wrapped = mount(
      <Root initialState={initialState}>
        <Home/>
      </Root>,
  );
});

afterEach(() => {
  wrapped.find('.reset-button').simulate('click');
  wrapped.update();

  wrapped.unmount();
});

describe('Cards Deck integration test', () => {

  it('should have an initial state', () => {
    // Have a deck with all cards
    expect(wrapped.find('.card').length).toEqual(cardsDeck.deck.length);

    // Have an empty picked card
    expect(wrapped.find('.no-card').length).toEqual(1);

    // Pick a card button is active
    expect(wrapped.find('.deal-button').props().disabled).toBeFalsy();
  });

  it('should pick a card on every click on .deal-button', () => {
    const initialLength = cardsDeck.deck.length;

    for (let i = 0; i < initialLength; i++) {

      wrapped.find('.deal-button').simulate('click');
      wrapped.update();

      expect(wrapped.find('.card').length).toEqual(initialLength - i - 1);

    }

    // Pick a card button was been disabled
    expect(wrapped.find('.deal-button').props().disabled).toBeTruthy();
  });

  it('should not contain the picked card in deck', () => {
    const initialLength = cardsDeck.deck.length;
    for (let i = 0; i < initialLength; i++) {
      wrapped.find('.deal-button').simulate('click');
      wrapped.update();

      let cardsName = cardsDeck.deck.map(card => {
        return card.name;
      });

      expect(cardsName)
          .not
          .toContain(wrapped.find('.picked-card-img').props().alt);
    }
  });

  it('should shuffle the deck when clicking to .shuffle-button', () => {
    const initialDeck = cardsDeck.deck.map(card => card);

    wrapped.find('.shuffle-button').simulate('click');
    wrapped.update();

    // Check that every card deck is present
    initialDeck.forEach(card => {
      expect(cardsDeck.deck).toContain(card)
    });

    // Check that the deck was shuffled
    expect(cardsDeck.deck).not.toEqual(initialDeck)
  })

});
