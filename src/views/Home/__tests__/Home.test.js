import React from 'react';
import {shallow} from 'enzyme';

import Home from '../Home';

import CardsDeck from '../../../components/CardsDeck';
import PickedCard from '../../../components/PickedCard';
import CardsDeckControls from '../../../components/CardsDeckControls';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Home/>);
});

describe('Home page view', () => {

  it('shows the cards deck component', () => {
    expect(wrapped.find(CardsDeck).length).toEqual(1);
  });

  it('shows the picked card components', () => {
    expect(wrapped.find(PickedCard).length).toEqual(1);
  });

  it('shows the cards deck controls component', () => {
    expect(wrapped.find(CardsDeckControls).length).toEqual(1);
  });

});
