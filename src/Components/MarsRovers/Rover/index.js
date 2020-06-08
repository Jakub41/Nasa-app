import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Delayed from 'delayed';
import RoverIntro from './IntroRover';
import RoversLoader from '../../Loaders/RoversLoader';
import { BodyWrapper } from './Styles';
import RoverCamerasIndex from './RoverCameras';
import rovers from './ConstRover';

export default function Rover({ match, maxSol }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Delayed.delay(() => {
      setIsLoading(false);
    }, 3000);
  });

  const roverNameFromUrl = match.params.roverName.toLowerCase();
  if (!Object.hasOwnProperty.call(rovers, roverNameFromUrl)) {
    return <Redirect to="/" />;
  }
  const roverName = rovers[roverNameFromUrl];

  return (
    <>
      {isLoading && <RoversLoader />}
      <BodyWrapper style={isLoading ? { display: 'none' } : null}>
        <Container>
          <RoverIntro roverName={roverName} />
          <RoverCamerasIndex
            maxSol={maxSol}
            roverName={roverName}
            setWholePageIsLoading={setIsLoading}
          />
        </Container>
      </BodyWrapper>
    </>
  );
}
