import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MarsWeather from './Pages/MarsWeather';
import MarsRovers from './Pages/MarsRovers';
import Rover from './Components/MarsRovers/Rover';

function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/mars-weather" component={MarsWeather} exact />
          <Route path="/mars-rovers" component={MarsRovers} exact />
          <Route path="/mars-rovers/:name" component={Rover} exact />
        </Switch>
      </>
    </Router>
  );
}

export default Routes;
