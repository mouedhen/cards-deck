import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as CardsDeckActions from '../../actions/cards-deck-actions';

import './CardsDeckControls.scss'

class CardsDeckControls extends Component {

  cantDealCard = (deck) => {
    return deck.length <= 0;
  };

  render() {
    return (
      <div className="CardsDeckControls">
        <button className="shuffle-button" onClick={this.props.shuffleDeck}>Shuffle Deck</button>
        <button className="deal-button" onClick={this.props.dealOneCard}
                disabled={this.cantDealCard(this.props.cardsDeck.deck)}>
          Deal One Card
        </button>
        <button className="reset-button" onClick={this.props.resetDeck}>Reset Deck</button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    cardsDeck: state.cardsDeck,
  };
};

export default connect(mapStateToProps, CardsDeckActions)(CardsDeckControls);
