import React from "react";
import { ThemeProvider } from "emotion-theming";
import "./styles";
import {
  Theme,
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
  PreviousWeatherTitle,
  PreviousWeatherSol,
  PreviousWeatherDays,
  PreviousWeatherDay,
  PreviousWeatherDate,
  MoreInfoButton,
} from "./styles";

const WeatherMars = (props) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <MainCurrentWeather>
          <MainTitle>Discover the Mars weather today</MainTitle>
          <Date>
            <SectionTitle date>Sol 100</SectionTitle>
            <ParagraphDate>September 11</ParagraphDate>
          </Date>
          <Temp>
            <SectionTitle>Temperature</SectionTitle>
            <Paragraph>High: -20</Paragraph>
            <Paragraph>Low: -120</Paragraph>
          </Temp>
          <Wind>
            <SectionTitle>Wind</SectionTitle>
            <Paragraph>75 kph</Paragraph>
            <WindDirection>
              <WindParagraph className="sr-only">45deg</WindParagraph>
              <WindArrow></WindArrow>
            </WindDirection>
          </Wind>
          <Info>
            <Paragraph>
              The Interior Exploration using Seismic Investigations, Geodesy and
              Heat Transport mission is a robotic lander designed to study the
              deep interior of the planet Mars
            </Paragraph>
            <Paragraph>
              The Interior Exploration using Seismic Investigations, Geodesy and
              Heat Transport mission is a robotic lander designed to study the
              deep interior of the planet Mars
            </Paragraph>
          </Info>

          <Unit>
            <UnitLabel for="cel">C</UnitLabel>
            <UnitInputRadio
              type="radio"
              id="cel"
              name="unit"
              checked
            ></UnitInputRadio>
            <UnitToggleButton className="unit__toggle"></UnitToggleButton>
            <UnitLabel for="fah">F</UnitLabel>
            <UnitInputRadio type="radio" id="fah" name="unit"></UnitInputRadio>
          </Unit>
        </MainCurrentWeather>

        <PreviousWeather>
          <PreviousWeatherLabel for="weather-toggle">
            <span className="sr-only">Show previous weather</span>
          </PreviousWeatherLabel>
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
      </ThemeProvider>
    </>
  );
};

export default WeatherMars;
