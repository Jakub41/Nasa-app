import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RoverText from './RoverText';
import { JumboTronWrapper, BadgeWrapper } from './Styles';
import Links from './Links';
import RoverIcon from '../../../Assets/Icons/roverIcon.png';

export default function IntroRover({ roverName }) {
  return (
    <JumboTronWrapper>
      <Jumbotron className="jumbotron-intro">
        <div className="d-flex align-items-center margin-top">
          <h1>{roverName}</h1>
          <span className="ml-auto">
            <BadgeWrapper>
              <Link className="text-white" to="/mars-rovers">
                <div className="badge red">
                  <div className="circle">
                    <img src={RoverIcon} alt="rover-img" />
                  </div>
                  <div className="ribbon">
                    <span>Rovers</span>
                  </div>
                </div>
              </Link>
              <Links roverName={roverName} />
            </BadgeWrapper>
          </span>
        </div>
        <RoverText roverName={roverName} />
      </Jumbotron>
    </JumboTronWrapper>
  );
}
