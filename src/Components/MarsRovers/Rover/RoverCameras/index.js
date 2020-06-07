import React from 'react';
import RoverCamerasView from './RoverCamerasView';

export default function RoverCamerasIndex({ roverName }) {
  return (
    <div>
      <RoverCamerasView roverName={roverName} />
    </div>
  );
}
