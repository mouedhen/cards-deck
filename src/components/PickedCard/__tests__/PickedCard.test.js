import React from 'react';
import {mount} from 'enzyme';

import Root from '../../../Root';
import PickedCard from '../PickedCard';
import {cardNameToImgName} from '../../../helpers';

let wrapped;
let pickedCard;
let initialState;

describe('Picked Card Component', () => {

  beforeEach(() => {

    pickedCard = {name: 'picked card', suit: 'picked card', value: '#1'};

    initialState = {
      cardsDeck: {pickedCard},
    };

    wrapped = mount(
        <Root initialState={initialState}>
          <PickedCard/>
        </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows .picked-card if picked card', () => {
    expect(wrapped.find('.picked-card').length).toEqual(1);
  });

  it('shows an image per picked img', () => {
    expect(wrapped.find('img').props().alt).toEqual(pickedCard.name);
  });

  it('render the correct card image', () => {
    const imgPath = '/assets/img/cards/' +
        cardNameToImgName(pickedCard.name) + '.png';

    expect(wrapped.find('img').props().src).toEqual(imgPath);
  });

});

describe('Empty picked card in Picked Card Component', () => {

  beforeEach(() => {
    wrapped = mount(
        <Root>
          <PickedCard/>
        </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('show .empty-deck if the deck contain no cards', () => {
    expect(wrapped.find('.no-card').length).toEqual(1);
  });

  it('do not render .picked-card', () => {
    expect(wrapped.find('.picked-card').length).toEqual(0);
  });

});
