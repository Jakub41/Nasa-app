import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Theme } from "./theme.styles";
import { WrapperGlobal, AppWrapper, MarsWeather } from "./styles";

import WeatherMarsInfo from "./Weather";

const WeatherMars = ({ sol, weather, metric, prev }) => {
  console.log("Sol", sol);
  console.log("Weather", weather);
  console.log("Metric", metric);
  console.log("Metric", prev);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <WrapperGlobal>
          <AppWrapper>
            <MarsWeather>
              <h1 className="main-title">
                Latest weather at Elysium Plantitia
              </h1>
              <WeatherMarsInfo sol={sol} isMetric={metric} />
            </MarsWeather>
          </AppWrapper>
        </WrapperGlobal>
      </ThemeProvider>
    </>
  );
};

export default WeatherMars;
