import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import { Theme } from './theme.styles';
import {
  WrapperGlobal, AppWrapper, MarsWeather, InfoWrapper,
} from './styles';

// Mars Weather sections
import WeatherMarsData from './Weather';
import Info from './Info';
import Unit from './Unit';
import Previous from './Previous';

const WeatherMars = ({
  sol,
  weather,
  metric,
  prev,
  handleIsPrevious,
  handleIsMetric,
  handleSelectedSol,
  setSelectedSol,
}) => (
  <>
    <ThemeProvider theme={Theme}>
      <WrapperGlobal>
        <AppWrapper>
          <MarsWeather>
            <h1 className="main-title">Latest weather at Elysium Plantitia</h1>
            <WeatherMarsData
              sol={sol}
              isMetric={metric}
              setSelectedSol={setSelectedSol}
            />
            <InfoWrapper>
              <Info />
              <Unit metric={metric} handleIsMetric={handleIsMetric} />
            </InfoWrapper>
          </MarsWeather>
          <Previous
            weather={weather}
            previous={prev}
            sol={sol}
            setSelectedSol={setSelectedSol}
            metric={metric}
            handleIsPrevious={handleIsPrevious}
            handleSelectedSol={handleSelectedSol}
          />
        </AppWrapper>
      </WrapperGlobal>
    </ThemeProvider>
  </>
);

export default WeatherMars;

WeatherMars.defaultProps = {
  sol: PropTypes.shape({
    sol: '',
    maxTemp: 0,
    minTemp: 0,
    date: '',
    windDirectionDegrees: 0,
    windSpeed: 0,
  }),
  weather: [],
  setSelectedSol: {},
};

WeatherMars.propTypes = {
  sol: PropTypes.shape({
    sol: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    windDirectionDegrees: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
  }),
  weather: PropTypes.arrayOf(PropTypes.shape({
    sol: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    windDirectionDegrees: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
  })),
  metric: PropTypes.bool.isRequired,
  prev: PropTypes.bool.isRequired,
  handleIsPrevious: PropTypes.func.isRequired,
  handleIsMetric: PropTypes.func.isRequired,
  handleSelectedSol: PropTypes.func.isRequired,
  setSelectedSol: PropTypes.shape({
    sol: PropTypes.string,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    date: PropTypes.string,
    windDirectionDegrees: PropTypes.number,
    windSpeed: PropTypes.number,
  }),
};
