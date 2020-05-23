import React from 'react';
import { InfoCss } from './styles';

const Info = () => (
  <InfoCss>
    <p>
      InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of
      Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.
    </p>
    <p>
      This is only a part of InSight’s mission.{' '}
      <a
        href="https://mars.nasa.gov/insight/mission/overview/"
        target="_blank"
        rel="noopener noreferrer">
        Click here{' '}
      </a>
      to find out more.
    </p>
  </InfoCss>
);

export default Info;
