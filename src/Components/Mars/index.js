import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Theme } from "./theme.styles";
import { WrapperGlobal, AppWrapper, MarsWeather, InfoWrapper } from "./styles";

import WeatherMarsData from "./Weather";
import Info from "./Info";
import Unit from "./Unit";

const WeatherMars = ({ sol, weather, metric, prev }) => {
  console.log("Sol", sol);
  console.log("Weather", weather);
  console.log("Metric", metric);
  console.log("Previous", prev);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <WrapperGlobal>
          <AppWrapper>
            <MarsWeather>
              <h1 className="main-title">
                Latest weather at Elysium Plantitia
              </h1>
              <WeatherMarsData sol={sol} isMetric={metric} />
              <InfoWrapper>
                <Info />
                <Unit metric={metric} />
              </InfoWrapper>
            </MarsWeather>
          </AppWrapper>
        </WrapperGlobal>
      </ThemeProvider>
    </>
  );
};

export default WeatherMars;
