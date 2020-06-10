/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  CameraButton,
  CameraViewButtonsRow,
  RoverCamerasViewWrapper,
  SecondLevelTitle,
} from './styles';

const RoverCamerasView = ({ camera, changeCamera, roverCameras }) => {
  return (
    <RoverCamerasViewWrapper>
      <SecondLevelTitle>Cameras:</SecondLevelTitle>
      <CameraViewButtonsRow>
        {roverCameras.map((roverCamera) => {
          return (
            <CameraButton
              key={uuidv4()}
              isActive={roverCamera === camera}
              onClick={() => changeCamera(roverCamera)}>
              {roverCamera}
            </CameraButton>
          );
        })}
      </CameraViewButtonsRow>
    </RoverCamerasViewWrapper>
  );
};

export default RoverCamerasView;
