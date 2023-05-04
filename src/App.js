import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions1 from './components/Missions';
import './App.css';
// import background from './images/background.png';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions1 />
      </div>
    );
  }
}

export default App;
