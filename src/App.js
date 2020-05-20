import React from "react";
import { Route } from "react-router-dom";
import { Global } from "@emotion/core";
import Styles from "./Common/Styles";
import { Container } from "react-bootstrap";

import Navbar from "./Components/Navbar";
import MarsWeather from "./Pages/MarsWeather";

function App() {
  return (
    <>
      <Global styles={Styles} />
      <Container>
        <Navbar />
      </Container>
      <Route path="/mars-weather" component={MarsWeather} exact />
    </>
  );
}

export default App;
