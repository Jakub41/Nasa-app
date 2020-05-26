import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import RoverText from './RoverText';
import { JumboTronWrapper } from './Styles';

export default function IntroRover({ roverName }) {
  return (
    <JumboTronWrapper>
      <Jumbotron className="jumbotron-intro">
        <h1>{roverName}</h1>
        <RoverText roverName={roverName} />
      </Jumbotron>
    </JumboTronWrapper>
  );
}
