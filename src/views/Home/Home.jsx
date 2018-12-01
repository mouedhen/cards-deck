import React, {Component} from 'react';

import CardsDeckControls from '../../components/CardsDeckControls';
import PickedCard from '../../components/PickedCard';
import CardsDeck from '../../components/CardsDeck';

import './Home.scss'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="title">Deck of Cards</h1>
        <div className="cards">
          <PickedCard/>
          <CardsDeck/>
        </div>
        <CardsDeckControls/>
      </div>
    );
  }
}

export default Home;
