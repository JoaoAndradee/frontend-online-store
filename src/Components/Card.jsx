import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { name, price, image } = this.props;
    return (
      <div data-testid="product">
        <h2>{name}</h2>
        <img src={ image } alt={ name } />
        <h3>{price}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Card;
