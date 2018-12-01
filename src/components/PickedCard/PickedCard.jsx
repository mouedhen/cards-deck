import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cardNameToImgName} from '../../helpers';

import './PickedCard.scss';

class PickedCard extends Component {

  renderCard = (card) => {
    if (card && card.name) {
      const imgPath = '/assets/img/cards/' +
          cardNameToImgName(this.props.card.name) + '.png';

      return (
          <div className="picked-card">
            <img className="picked-card-img"
                 src={imgPath}
                 alt={this.props.card.name}/>
            <h2 className="card-name">{this.props.card.name}</h2>
          </div>
      );
    }
    return <div className="no-card"><h2>Pick a card please</h2></div>;
  };

  render() {
    return (
        <div className="PickedCard">
          {this.renderCard(this.props.card)}
        </div>
    );
  }
}

const
    mapStateToProps = function(state) {
      return {
        card: state.cardsDeck.pickedCard,
      };
    };

export default connect(mapStateToProps)(PickedCard);
