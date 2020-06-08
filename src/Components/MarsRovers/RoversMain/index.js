import PropTypes from 'prop-types';
import React from 'react';
import { Row } from 'react-bootstrap';
import CardComponent from './Card';

export default function RoversMain({ curiosity, opportunity, spirit }) {
  return (
    <Row>
      {[curiosity, opportunity, spirit].map(function makeCardComponentFromRover(rover) {
        const manifest = rover.photo_manifest;
        return (
          <CardComponent
            key={`CardComponent.${rover}`}
            landingDate={manifest.landing_date}
            launchDate={manifest.launch_date}
            name={manifest.name}
            maxDate={manifest.max_date}
            maxSol={manifest.max_sol}
            status={manifest.status}
            totalPhotos={manifest.total_photos}
          />
        );
      })}
    </Row>
  );
}

const defaultRoverProps = {
  photo_manifest: {
    landing_date: '',
    launch_date: '',
    max_date: '',
    max_sol: 0,
    name: '',
    status: '',
    total_photos: 0,
  },
};

RoversMain.defaultProps = {
  curiosity: defaultRoverProps,
  opportunity: defaultRoverProps,
  spirit: defaultRoverProps,
};

RoversMain.propTypes = PropTypes.objectOf(
  PropTypes.shape({
    photo_manifest: PropTypes.shape({
      landing_date: PropTypes.string.isRequired,
      launch_date: PropTypes.string.isRequired,
      max_date: PropTypes.string.isRequired,
      max_sol: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      total_photos: PropTypes.number.isRequired,
    }),
  })
);
