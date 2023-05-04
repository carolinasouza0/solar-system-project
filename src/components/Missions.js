import { Component } from 'react';
import Title from './Title';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions1 extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          Missions
            .map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
        }
      </div>
    );
  }
}

export default Missions1;
