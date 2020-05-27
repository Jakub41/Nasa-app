import PropTypes from 'prop-types';
import React from 'react';
import { Row } from 'react-bootstrap';
import CardComponent from './Card';

export default function RoversMain({ curiosity, opportunity, spirit }) {
  return (
    <Row>
      <CardComponent
        landingDate={curiosity.photo_manifest.landing_date}
        launchDate={curiosity.photo_manifest.launch_date}
        name={curiosity.photo_manifest.name}
        maxDate={curiosity.photo_manifest.max_date}
        maxSol={curiosity.photo_manifest.max_sol}
        status={curiosity.photo_manifest.status}
        totalPhotos={curiosity.photo_manifest.total_photos}
      />
      <CardComponent
        landingDate={opportunity.photo_manifest.landing_date}
        launchDate={opportunity.photo_manifest.launch_date}
        name={opportunity.photo_manifest.name}
        maxDate={opportunity.photo_manifest.max_date}
        maxSol={opportunity.photo_manifest.max_sol}
        status={opportunity.photo_manifest.status}
        totalPhotos={opportunity.photo_manifest.total_photos}
      />
      <CardComponent
        landingDate={spirit.photo_manifest.landing_date}
        launchDate={spirit.photo_manifest.launch_date}
        name={spirit.photo_manifest.name}
        maxDate={spirit.photo_manifest.max_date}
        maxSol={spirit.photo_manifest.max_sol}
        status={spirit.photo_manifest.status}
        totalPhotos={spirit.photo_manifest.total_photos}
      />
    </Row>
  );
}

RoversMain.defaultProps = {
  curiosity: {
    photo_manifest: {
      landing_date: '',
      launch_date: '',
      max_date: '',
      max_sol: 0,
      name: '',
      status: '',
      total_photos: 0,
    },
  },
  opportunity: {
    photo_manifest: {
      landing_date: '',
      launch_date: '',
      max_date: '',
      max_sol: 0,
      name: '',
      status: '',
      total_photos: 0,
    },
  },
  spirit: {
    photo_manifest: {
      landing_date: '',
      launch_date: '',
      max_date: '',
      max_sol: 0,
      name: '',
      status: '',
      total_photos: 0,
    },
  },
};

RoversMain.propTypes = {
  curiosity: PropTypes.shape({
    photo_manifest: PropTypes.shape({
      landing_date: PropTypes.string.isRequired,
      launch_date: PropTypes.string.isRequired,
      max_date: PropTypes.string.isRequired,
      max_sol: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      total_photos: PropTypes.number.isRequired,
    }),
  }),
  opportunity: PropTypes.shape({
    photo_manifest: PropTypes.shape({
      landing_date: PropTypes.string.isRequired,
      launch_date: PropTypes.string.isRequired,
      max_date: PropTypes.string.isRequired,
      max_sol: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      total_photos: PropTypes.number.isRequired,
    }),
  }),
  spirit: PropTypes.shape({
    photo_manifest: PropTypes.shape({
      landing_date: PropTypes.string.isRequired,
      launch_date: PropTypes.string.isRequired,
      max_date: PropTypes.string.isRequired,
      max_sol: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      total_photos: PropTypes.number.isRequired,
    }),
  }),
};
