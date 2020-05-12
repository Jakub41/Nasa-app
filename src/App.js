import React from "react";
import { Route } from "react-router-dom";
import { Global } from "@emotion/core";
import Styles from "./Common/Styles";
import { Container } from "react-bootstrap";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Global styles={Styles} />
      <Container>
        <Navbar />
      </Container>
      <Route path="/home" component={Home} exact />
    </>
  );
}

export default App;
