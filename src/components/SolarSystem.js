import { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar">
        <Title headline="Planetas" />
        <section className="planets">
          {
            Planets
              .map(({ name, image }) => (
                <PlanetCard
                  key={ name }
                  planetName={ name }
                  planetImage={ image }
                />
              ))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
