import React from 'react';
import { Route } from 'react-router-dom';

import MarsWeather from './Pages/MarsWeather';
import MarsRovers from './Pages/MarsRovers';
import Rover from './Components/MarsRovers/Rover';

function Routes() {
  return (
    <>
      <Route path="/mars-weather" component={MarsWeather} exact />
      <Route path="/mars-rovers" component={MarsRovers} exact />
      <Route path="/mars-rovers/rover/:roverName" component={Rover} exact />
    </>
  );
}

export default Routes;
