import React, { useState } from 'react';
import RoverCamerasView from './RoverCamerasView';
import RoverCamerasConst from './RoverCamerasConst';
import RoverPhotos from './RoverPhotos';
import { WrapperAlignedToCenter, RoverCamerasIndexWrapper, TopLevelTitle } from './styles';

export default function RoverCamerasIndex({ maxSol, roverName, setWholePageIsLoading }) {
  const initialCamera = RoverCamerasConst[roverName.toLowerCase()][0];
  const [camera, setCamera] = useState(initialCamera);
  return (
    <RoverCamerasIndexWrapper>
      <WrapperAlignedToCenter>
        <TopLevelTitle>Photos taken by {roverName}</TopLevelTitle>
      </WrapperAlignedToCenter>
      <hr />
      <RoverCamerasView
        camera={camera}
        changeCamera={setCamera}
        roverCameras={RoverCamerasConst[roverName.toLowerCase()]}
        roverName={roverName}
      />
      <hr />
      <RoverPhotos
        camera={camera}
        maxSol={maxSol}
        roverName={roverName}
        setWholePageIsLoading={setWholePageIsLoading}
      />
      <hr />
    </RoverCamerasIndexWrapper>
  );
}
