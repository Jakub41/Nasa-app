import React from 'react';
import './styles.scss';

const MarsLoader = () => (
  <div className="space">
    <div className="ship">
      <div className="ship-rotate">
        <div className="pod" />
        <div className="fuselage" />
      </div>
    </div>
    <div className="ship-shadow" />
    <div className="mars">
      <div className="tentacle" />
      <div className="flag">
        <div className="small-tentacle" />
      </div>
      <div className="planet">
        <div className="surface" />
        <div className="crater1" />
        <div className="crater2" />
        <div className="crater3" />
      </div>
    </div>
    <div className="formLoader">
      <ul className="formLoading">
        <li />
        <li />
        <li />
      </ul>
    </div>
  </div>
);

export default MarsLoader;
