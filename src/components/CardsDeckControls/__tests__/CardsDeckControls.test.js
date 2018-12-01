import React from 'react';
import {mount} from 'enzyme';

import Root from '../../../Root';
import CardsDeckControls from '../CardsDeckControls';
import CardsDeck from '../../../lib/CardsDeck';

let wrapped;
const suits = ['Suit #1', 'Suit #2'];
const values = ['Value #1', 'Value #2'];
let cardsDeck = new CardsDeck(suits, values);
let initialState;

beforeEach(() => {

  cardsDeck = new CardsDeck(suits, values);

  initialState = {
    cardsDeck: {
      ...cardsDeck,
      pickedCard: {},
    },
  };

  wrapped = mount(
      <Root initialState={initialState}>
        <CardsDeckControls/>
      </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('Cards Deck Controls Component', () => {

  it('should have 3 buttons', () => {
    expect(wrapped.find('button').length).toEqual(3);
  });

  it('should have .shuffle-button', () => {
    expect(wrapped.find('.shuffle-button').length).toEqual(1);
  });

  it('should have .deal-button', () => {
    expect(wrapped.find('.deal-button').length).toEqual(1);
  });

  it('should have .reset-button', () => {
    expect(wrapped.find('.reset-button').length).toEqual(1);
  });

});
