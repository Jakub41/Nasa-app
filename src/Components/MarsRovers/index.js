/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import RoversMain from './RoversMain';
import { JumbotronWrapper } from './styles';

export default function MarsRoversIndex({ rovers }) {
  return (
    <JumbotronWrapper>
      <Jumbotron className="jumbo-rovers">
        <h1 className="display-4">MARS Exploration Rovers</h1>
        <p className="lead">
          NASA's Mars Exploration Rover (MER) mission was a robotic space mission involving two Mars
          rovers, Spirit and Opportunity exploring the planet Mars. It began in 2003 with the launch
          of the two rovers to explore the Martian surface and geology; both landed on Mars at
          separate locations in January 2004. Both rovers far outlived their planned missions of 90
          Martian solar days: MER-A Spirit was active until March 22, 2010,[1] while MER-B
          Opportunity was active until June 10, 2018[2] and holds the record for the longest
          distance driven by any off-Earth wheeled vehicle.
        </p>
      </Jumbotron>
      <RoversMain rovers={rovers} />
    </JumbotronWrapper>
  );
}

MarsRoversIndex.defaultProps = {
  curiosity: {},
  opportunity: {},
  redirect: {},
  spirit: {},
};

MarsRoversIndex.propTypes = {
  curiosity: PropTypes.shape({}),
  opportunity: PropTypes.shape({}),
  redirect: PropTypes.shape({}),
  spirit: PropTypes.shape({}),
};
