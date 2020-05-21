/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { Route } from 'react-router-dom'
import { Global } from '@emotion/core'
import { Container } from 'react-bootstrap'
import Styles from './Common/Styles'

import Navbar from './Components/Navbar'
import MarsWeather from './Pages/MarsWeather'

function App() {
  return (
    <>
      <Global styles={Styles} />
      <Container>
        <Navbar />
      </Container>
      <Route path="/mars-weather" component={MarsWeather} exact />
    </>
  )
}

export default App
