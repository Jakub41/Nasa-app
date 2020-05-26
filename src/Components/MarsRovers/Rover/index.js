import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Delayed from 'delayed';
import RoverIntro from './IntroRover';

export default function Rover(data) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Delayed.delay(() => {
      setIsLoading(false);
    }, 3000);
  });

  const roverName = `${data.location.state.roverName}`;
  return isLoading ? (
    <h1>LOADING</h1>
  ) : (
    <Container>
      <RoverIntro roverName={roverName} />
    </Container>
  );
}
