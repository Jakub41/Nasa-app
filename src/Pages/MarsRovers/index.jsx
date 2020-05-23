import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import MarsRovers from '../../Components/MarsRovers';

export default class MarsRoversIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <MarsRovers />
      </Container>
    );
  }
}
