import React from 'react';
import { Spinner, WrapperAlignedToCenter } from './styles';

export default function LoadingSpinner() {
  return (
    <WrapperAlignedToCenter>
      <Spinner />
    </WrapperAlignedToCenter>
  );
}
