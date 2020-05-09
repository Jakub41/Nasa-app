import React from "react";
import { Route, NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Global } from "@emotion/core";
import Styles from "./Common/Styles";
import { BsArrowReturnLeft } from "react-icons/bs";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Global styles={Styles} />
      {useLocation().pathname !== "/" ? (
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">
                <BsArrowReturnLeft /> PoD
              </Nav.Link>
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : null}
      <Route path="/home" component={Home} exact />
    </>
  );
}

export default App;
