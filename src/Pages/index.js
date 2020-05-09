import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from '../Util/History';

import Home from "./Home";

export default class Pages extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
