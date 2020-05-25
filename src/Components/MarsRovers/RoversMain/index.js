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
