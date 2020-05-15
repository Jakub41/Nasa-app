import React from "react";
import { ThemeProvider } from "emotion-theming";
import "./styles.scss";
import {
  Theme,
  MarsWeatherContainer,
  MainCurrentWeather,
  MainTitle,
  PreviousWeather,
  SectionTitle,
  Date,
  Temp,
  Wind,
  ParagraphDate,
  Paragraph,
  WindDirection,
  WindParagraph,
  WindArrow,
  Info,
  Unit,
  UnitLabel,
  UnitInputRadio,
  UnitToggleButton,
  PreviousWeatherLabel,
  PreviousWeatherButton,
  PreviousWeatherTitle,
  PreviousWeatherSol,
  PreviousWeatherDays,
  PreviousWeatherDay,
  PreviousWeatherDate,
  MoreInfoButton,
} from "./styles";
import { IconContext } from "react-icons";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { WiCloudUp } from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const WeatherMars = (props) => {
  console.log("Weather Props >> ", props);
  console.log("SOL", props.sol);
  const {
    date,
    maxTemp,
    minTemp,
    sol,
    windDirectionDegrees,
    windSpeed,
  } = props.sol;

  return (
    <>
      <ThemeProvider theme={Theme}>
        <MarsWeatherContainer>
          <MainCurrentWeather>
            <MainTitle>Discover the Mars weather today</MainTitle>
            <Date>
              <SectionTitle date>Sol {sol}</SectionTitle>
              <ParagraphDate>{date}</ParagraphDate>
            </Date>
            <Temp>
              <SectionTitle>Temperature</SectionTitle>
              <Paragraph reading>
                <FaTemperatureHigh /> -20
              </Paragraph>
              <Paragraph reading>
                <FaTemperatureLow /> -120
              </Paragraph>
            </Temp>
            <Wind>
              <SectionTitle wind>Wind</SectionTitle>
              <Paragraph reading wind>
                75 kph
              </Paragraph>
              <WindDirection>
                <WindParagraph className="sr-only">45deg</WindParagraph>
                <WindArrow>
                  {/** Arrow will move based on the API values props */}
                </WindArrow>
              </WindDirection>
            </Wind>
            <Info>
              <Paragraph>
                The Interior Exploration using Seismic Investigations, Geodesy
                and Heat Transport mission is a robotic lander designed to study
                the deep interior of the planet Mars
              </Paragraph>
              <Paragraph>
                The Interior Exploration using Seismic Investigations, Geodesy
                and Heat Transport mission is a robotic lander designed to study
                the deep interior of the planet Mars
              </Paragraph>
            </Info>

            <Unit>
              <IconContext.Provider value={{ className: "unit-icons" }}>
                <UnitLabel cel htmlFor="cel">
                  <RiCelsiusLine />
                </UnitLabel>
                <UnitInputRadio
                  type="radio"
                  id="cel"
                  name="unit"
                  defaultChecked
                ></UnitInputRadio>
                <UnitToggleButton className="unit__toggle"></UnitToggleButton>
                <UnitLabel fah htmlFor="fah">
                  <RiFahrenheitLine />
                </UnitLabel>
                <UnitInputRadio
                  type="radio"
                  id="fah"
                  name="unit"
                ></UnitInputRadio>
              </IconContext.Provider>
            </Unit>
          </MainCurrentWeather>

          <PreviousWeather className="prev-weather">
            <PreviousWeatherLabel htmlFor="weather-toggle">
              <span className="sr-only">Show previous weather</span>
            </PreviousWeatherLabel>

            <PreviousWeatherButton
              className="show-prev-weather"
              htmlFor="weather-toggle"
            >
              <WiCloudUp />
              <span className="sr-only">Show previous weather</span>
            </PreviousWeatherButton>

            <PreviousWeatherTitle>Previous 7 days</PreviousWeatherTitle>

            <PreviousWeatherDays>
              <PreviousWeatherDay>
                <PreviousWeatherSol>Sol 555</PreviousWeatherSol>
                <PreviousWeatherDate>September 31</PreviousWeatherDate>
                <Paragraph>High: -20</Paragraph>
                <Paragraph>Low: -120</Paragraph>
                <MoreInfoButton className="more-info">more info</MoreInfoButton>
              </PreviousWeatherDay>
            </PreviousWeatherDays>
          </PreviousWeather>
        </MarsWeatherContainer>
      </ThemeProvider>
    </>
  );
};

export default WeatherMars;
