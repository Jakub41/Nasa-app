import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Delayed from 'delayed';
import RoverIntro from './IntroRover';
import RoversLoader from '../../Loaders/RoversLoader';
import { BodyWrapper } from './Styles';
import RoverCamerasIndex from './RoverCameras';

export default function Rover(data) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Delayed.delay(() => {
      setIsLoading(false);
    }, 3000);
  });

  const roverName = `${data.location.state.roverName}`;
  return isLoading ? (
    <RoversLoader />
  ) : (
    <BodyWrapper>
      <Container>
        <RoverIntro roverName={roverName} />
        <RoverCamerasIndex roverName={roverName} />
      </Container>
    </BodyWrapper>
  );
}
