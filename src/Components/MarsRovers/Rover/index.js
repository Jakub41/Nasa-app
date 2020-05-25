import React from 'react';
import { useParams } from 'react-router-dom';

export default function Rover() {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <h1>Rover page</h1>
    </div>
  );
}
