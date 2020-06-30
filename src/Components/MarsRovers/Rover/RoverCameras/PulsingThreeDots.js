import React from 'react';
import { PulsingDot, PulsingDotsContainer } from './styles';

export default function PulsingThreeDots() {
  return (
    <PulsingDotsContainer>
      <PulsingDot />
      <PulsingDot />
      <PulsingDot />
    </PulsingDotsContainer>
  );
}
