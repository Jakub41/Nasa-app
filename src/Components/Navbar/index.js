import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { BsArrowReturnLeft } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      {useLocation().pathname !== "/" ? (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">
                <BsArrowReturnLeft /> PoD
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mars-weather">
                Mars Weather
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mars-rovers">
                Mars Rovers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : null}
    </>
  );
};

export default NavBar;
