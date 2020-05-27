import React from 'react';
import { Jumbotron, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RoverText from './RoverText';
import { JumboTronWrapper } from './Styles';
import Links from './Links';

export default function IntroRover({ roverName }) {
  return (
    <JumboTronWrapper>
      <Jumbotron className="jumbotron-intro">
        <div className="d-flex align-items-center">
          <h1>{roverName}</h1>
          <span className="ml-auto">
            <Badge pill variant="primary" className="mr-2">
              <Link className="text-white" to="/mars-rovers">
                Rovers
              </Link>
            </Badge>
            <Links roverName={roverName} />
          </span>
        </div>
        <RoverText roverName={roverName} />
      </Jumbotron>
    </JumboTronWrapper>
  );
}
