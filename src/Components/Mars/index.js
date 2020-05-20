import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Theme } from "./theme.styles";
import { WrapperGlobal, AppWrapper, MarsWeather, InfoWrapper } from "./styles";

// Mars Weather sections
import WeatherMarsData from "./Weather";
import Info from "./Info";
import Unit from "./Unit";
import Previous from "./Previous";

const WeatherMars = ({
  sol,
  weather,
  metric,
  prev,
  handleIsPrevious,
  handleIsMetric,
  handleSelectedSol,
  setSelectedSol,
}) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <WrapperGlobal>
          <AppWrapper>
            <MarsWeather>
              <h1 className="main-title">
                Latest weather at Elysium Plantitia
              </h1>
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
};

export default WeatherMars;
