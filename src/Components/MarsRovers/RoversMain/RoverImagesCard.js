import React from 'react';
import { TopCardImg } from './styles';
import ImgCuriosityRover from '../../../Assets/Images/curiosity_rover.jpg';
import ImgOpportunityRover from '../../../Assets/Images/oppoertunity_rover.jpg';
import ImgSpiritRover from '../../../Assets/Images/spiritRover.jpg';

export default function RoverImagesCard({ name }) {
  let roverImg = '';

  if (name === 'Curiosity') roverImg = ImgCuriosityRover;
  if (name === 'Opportunity') roverImg = ImgOpportunityRover;
  if (name === 'Spirit') roverImg = ImgSpiritRover;

  return <TopCardImg variant="top" src={roverImg} alt={name} />;
}
