import React, {Component} from 'react';
import {connect} from 'react-redux';

import './CardsDeck.scss';

class CardsDeck extends Component {

  renderDeck = (cardsDeck) => {
    if (cardsDeck.deck.length > 0) {
      return (cardsDeck.deck.map((card, index) => {

        let cardBack = 'red-back.png';

        if ((index % 2) === 0) {
          cardBack = 'black-back.png';
        }

        return (
            <div className="deck" key={index}>
              <img className="card"
                   style={{marginTop: index * .5, marginLeft: index * .5}}
                   src={'/assets/img/cards/' + cardBack} height={250}
                   alt={card.name}/>
            </div>
        );
      }));
    }
    return <div className="empty-deck"><h3>The deck was empty</h3></div>;
  };

  render() {
    return (
        <div className="CardsDeck">
          {this.renderDeck(this.props.cardsDeck)}
        </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    cardsDeck: state.cardsDeck,
  };
};

export default connect(mapStateToProps)(CardsDeck);
