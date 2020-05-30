/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link } from 'react-router-dom';
import Rover2 from '../../../Assets/Icons/rover2.png';
import Rover1 from '../../../Assets/Icons/rover1.png';
import rovers from './ConstRover';

export default function Links({ roverName: currentRover }) {
  return Object.keys(rovers).map((key) => {
    if (rovers[key] === currentRover) return null;

    const roverName = rovers[key];

    let roverImg = '';

    if (roverName === 'Curiosity') roverImg = Rover1;
    if (roverName === 'Opportunity') roverImg = Rover2;
    if (roverName === 'Spirit') roverImg = Rover1;

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
