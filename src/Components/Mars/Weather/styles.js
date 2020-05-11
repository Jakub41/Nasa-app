import Styled from "@emotion/styled";
import { jsx } from "@emotion/core";

/** Theme */
const Theme = {
  colors: {
    light: "#fff",
    gray: "#989898",
    dark: "#444",
    accent: "#D06D6D",
    accentDark: "#613131"
  },
  fontWeight: {},
  fontSize: {}

};

/** main */
const MainCurrentWeather = Styled.main({});

const MainTitle = Styled.h1({});

/** Date */
const Date = Styled.div({});

const ParagraphDate = Styled.p({});

/** Text Common */
const SectionTitle = Styled.h2`
  color: ${(props) => (props.date ? "red" : "yellow")};
`;

const Paragraph = Styled.p({});

/** Temperature */
const Temp = Styled.div({});

/** Wind */
const Wind = Styled.div({});

const WindDirection = Styled.div({});

const WindParagraph = Styled.p({});

const WindArrow = Styled.div({});

/** Info */
const Info = Styled.div({});

/**   Unit */
const Unit = Styled.div({});

const UnitLabel = Styled.label({});

const UnitInputRadio = Styled.input({});

const UnitToggleButton = Styled.button({});

/** Previous Weather */
const PreviousWeather = Styled.div({});

const PreviousWeatherLabel = Styled.label({});

const PreviousWeatherTitle = Styled.h2({});

const PreviousWeatherDays = Styled.div({});

const PreviousWeatherDay = Styled.div({});

const PreviousWeatherSol = Styled.h3({});

const PreviousWeatherDate = Styled.p({});

const MoreInfoButton = Styled.button({});

export {
  Theme,
  MainCurrentWeather,
  MainTitle,
  SectionTitle,
  Date,
  Temp,
  Wind,
  PreviousWeather,
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
};
