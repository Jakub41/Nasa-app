/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default function Links({ roverName }) {
  const rovers = {
    curiosity: 'Curiosity',
    opportunity: 'Opportunity',
    spirit: 'Spirit',
  };

  if (roverName === 'Opportunity') {
    return (
      <>
        <Badge pill variant="primary" className="mr-2">
          <Link
            className="text-white"
            to={{
              pathname: `/mars-rovers/rover/${rovers.curiosity}`,
              state: { roverName: rovers.curiosity },
            }}>
            Curiosity
          </Link>
        </Badge>
        <Badge pill variant="primary" className="mr-2">
          <Link
            className="text-white"
            to={{
              pathname: `/mars-rovers/rover/${rovers.spirit}`,
              state: { roverName: rovers.spirit },
            }}>
            Spirit
          </Link>
        </Badge>
      </>
    );
  }
  if (roverName === 'Curiosity') {
    return (
      <>
        <Badge pill variant="primary" className="mr-2">
          <Link
            className="text-white"
            to={{
              pathname: `/mars-rovers/rover/${rovers.opportunity}`,
              state: { roverName: rovers.opportunity },
            }}>
            Opportunity
          </Link>
        </Badge>
        <Badge pill variant="primary" className="mr-2">
          <Link
            className="text-white"
            to={{
              pathname: `/mars-rovers/rover/${rovers.spirit}`,
              state: { roverName: rovers.spirit },
            }}>
            Spirit
          </Link>
        </Badge>
      </>
    );
  }
  return (
    <>
      <Badge pill variant="primary" className="mr-2">
        <Link
          className="text-white"
          to={{
            pathname: `/mars-rovers/rover/${rovers.curiosity}`,
            state: { roverName: rovers.curiosity },
          }}>
          Curiosity
        </Link>
      </Badge>
      <Badge pill variant="primary" className="mr-2">
        <Link
          className="text-white"
          to={{
            pathname: `/mars-rovers/rover/${rovers.opportunity}`,
            state: { roverName: rovers.opportunity },
          }}>
          Opportunity
        </Link>
      </Badge>
    </>
  );
}
