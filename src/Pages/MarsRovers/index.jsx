import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import ImgMars from "../../Assets/Images/mars_view.jpg";
import { Image } from "./styles";

export default class MarsRoversIndex extends Component {
  render() {
    return (
      <Container>
        <Jumbotron className="mt-3">
          <Container>
            <Image src={ImgMars} alt="mars-view"/>
            <h1 class="display-4">THE ROVERS</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}
