import React, { useState } from 'react';
import RoverCamerasView from './RoverCamerasView';
import RoverCamerasConst from './RoverCamerasConst';

export default function RoverCamerasIndex({ roverName }) {
  const initialCamera = RoverCamerasConst[roverName.toLowerCase()][0];
  const [camera, setCamera] = useState(initialCamera);

  return (
    <div>
      <h1>Photos taken by {roverName}</h1>
      <hr />
      <RoverCamerasView
        camera={camera}
        changeCamera={setCamera}
        roverCameras={RoverCamerasConst[roverName.toLowerCase()]}
        roverName={roverName}
      />
    </div>
  );
}
