import { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const startOfName = 14;
    const endOfName = -25;
    const planetId = planetImage.slice(startOfName, endOfName).toLowerCase();
    return (
      <div
        data-testid="planet-card"
        className={ `planet-card ${planetId}` }
      >
        <p data-testid="planet-name">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="planetImages"
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
