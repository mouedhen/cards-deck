import React from 'react';
import {mount} from 'enzyme';

import CardsDeck from '../../../lib/CardsDeck';

import Root from '../../../Root';
import CardsDeckComponent from '../CardsDeck';

let wrapped;
let cardsDeck;
let initialState;

describe('Cards Deck Component', () => {

  cardsDeck = new CardsDeck(['Suit #1', 'Suit #2'],
      ['Value #1', 'Value #2']);

  initialState = {
    cardsDeck: {...cardsDeck},
  };

  beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
          <CardsDeckComponent/>
        </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows one .card per deck element', () => {
    expect(wrapped.find('.card').length).toEqual(cardsDeck.deck.length);
  });

  it('shows an image per deck element', () => {
    let cardsName = cardsDeck.deck.map(card => {
      return card.name;
    });

    wrapped.find('img.card').forEach(card => {
      expect(cardsName).toContain(card.props().alt);
    });
  });

  it('render the correct card image', () => {
    wrapped.find('img.card').forEach((card, index) => {

      let cardBack = '/assets/img/cards/red-back.png';

      if ((index % 2) === 0) {
        cardBack = '/assets/img/cards/black-back.png';
      }

      expect(card.props().src).toEqual(cardBack);
    });
  });

});

describe('Empty cards deck in Cards Deck component', () => {

  cardsDeck = new CardsDeck([], []);

  initialState = {
    cardsDeck: {...cardsDeck},
  };

  beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
          <CardsDeckComponent/>
        </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('show .empty-deck if the deck contain no cards', () => {
    expect(wrapped.find('.empty-deck').length).toEqual(1);
  });

  it('do not render .card', () => {
    expect(wrapped.find('.card').length).toEqual(0);
  });
});
