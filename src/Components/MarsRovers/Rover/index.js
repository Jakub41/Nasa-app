import React from 'react';
import { Container } from 'react-bootstrap';

export default function Rover(data) {
  console.log('ROVER NAME', data.location.state.roverName);

  const roverName = `${data.location.state.roverName}`;
  return (
    <Container>
      <h1>{roverName}</h1>
    </Container>
  );
}
