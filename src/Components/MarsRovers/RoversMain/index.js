import PropTypes from 'prop-types';
import React from 'react';
import { Row } from 'react-bootstrap';
import CardComponent from './Card';

export default function RoversMain({ rovers }) {
  return (
    <Row>
      {rovers.map((rover) => (
        <CardComponent
          landingDate={rover.photo_manifest.landing_date}
          launchDate={rover.photo_manifest.launch_date}
          name={rover.photo_manifest.name}
          maxDate={rover.photo_manifest.max_date}
          maxSol={rover.photo_manifest.max_sol}
          status={rover.photo_manifest.status}
          totalPhotos={rover.photo_manifest.total_photos}
        />
      ))}
    </Row>
  );
}

RoversMain.propTypes = {
  rovers: PropTypes.arrayOf(
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
  ).isRequired,
};
