import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RoverCamerasView = ({ changeCamera, roverCameras }) => {
  return (
    <>
      <h2>Cameras:</h2>
      {roverCameras.map((roverCamera) => {
        return (
          <button type="submit" key={uuidv4()} onClick={() => changeCamera(roverCamera)}>
            {roverCamera}
          </button>
        );
      })}
    </>
  );
};

export default RoverCamerasView;
