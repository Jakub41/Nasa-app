/* eslint-disable import/no-named-as-default-member */
import React from 'react';
// import { Route } from 'react-router-dom';
import { Global } from '@emotion/core';
import Styles from './Common/Styles';
import { GlobalCss } from './styles';
import Routes from './Routes';

import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Global styles={(Styles, GlobalCss)} />
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
