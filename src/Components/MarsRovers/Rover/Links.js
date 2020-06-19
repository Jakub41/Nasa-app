/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Rover2 from '../../../Assets/Icons/rover2.png';
import Rover1 from '../../../Assets/Icons/rover1.png';
import rovers from './ConstRover';

const roverImages = {
  curiosity: Rover1,
  opportunity: Rover2,
  spirit: Rover1,
};

export default function Links({ roverName: currentRover }) {
  return Object.keys(rovers).map(function makeLinkFromRover(roverName) {
    if (roverName === currentRover.toLowerCase()) return null;
    const roverImg = roverImages[roverName];
    return (
      <Link
        key={uuidv4()}
        className="text-white"
        to={{
          pathname: `/mars-rovers/rover/${roverName}`,
          state: { roverName },
        }}>
        <div className="badge red">
          <div className="circle">
            <img src={roverImg} alt="rover-img" />
          </div>
          <div className="ribbon">
            <span>{roverName}</span>
          </div>
        </div>
      </Link>
    );
  });
}
