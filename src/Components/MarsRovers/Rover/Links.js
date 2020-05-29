/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link } from 'react-router-dom';
import Rover2 from '../../../Assets/Icons/rover2.png';

export default function Links({ roverName: currentRover }) {
  const rovers = {
    curiosity: 'Curiosity',
    opportunity: 'Opportunity',
    spirit: 'Spirit',
  };

  return Object.keys(rovers).map((key) => {
    if (rovers[key] === currentRover) return null;

    const roverName = rovers[key];

    return (
      <Link
        key={key}
        className="text-white"
        to={{
          pathname: `/mars-rovers/rover/${roverName}`,
          state: { roverName },
        }}>
        <div className="badge red">
          <div className="circle">
            <img src={Rover2} alt="rover-img" />
          </div>
          <div className="ribbon">
            <span>{roverName}</span>
          </div>
        </div>
      </Link>
    );
  });
}
