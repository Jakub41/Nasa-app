import React from "react";
import Main from "./Pages/Main";
import { Router, Switch, Route } from "react-router-dom";
import history from "./Util/History";

// Pages
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Main />
          <Route path="/home" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
