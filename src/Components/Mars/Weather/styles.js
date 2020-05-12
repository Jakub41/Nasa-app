import Styled from "@emotion/styled";
import MarsBackGround from "../../../Assets/Images/marsWeather.jpg";
import { rgba } from "emotion-rgba";

/** Theme */
const Theme = {
  colors: {
    light: "#fff",
    gray: "#989898",
    dark: "#444",
    accent: "#D06D6D",
    accentDark: "#613131",
    black: "#000000",
  },

  alpha: 0.7,

  fontWeight: {
    light: 300,
    normal: 400,
    semi: 500,
    bold: 700,
  },

  fontSize: { h1: "1.5rem", h2: "2.25rem", body: "1rem", xl: "4.5rem" },

  typography: {
    lineHeight: 1,
  },

  border: {
    solid: "solid",
    color: "#613131",
    size: ".3em",
  },

  size: "5rem",
};

/** Container */
const MarsWeatherContainer = Styled.div`
  margin: 0;
  line-height: 1.6;
  background-image: url(${MarsBackGround});
  background-size: cover;
  font-family: Exo;
  height: 94vh;
  overflow: hidden;
  color: ${(props) => props.theme.colors.light};`;

/** main */
const MainCurrentWeather = Styled.main`
  background: ${rgba(Theme.colors.black, Theme.alpha)};
  padding: 2em;
  max-width: 1000px;
  margin: 4em 0 0 4em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
`;

const MainTitle = Styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};
  line-height: ${Theme.typography.lineHeight};
  font-weight: ${Theme.fontWeight.light};
  text-transform: uppercase;
  color: ${Theme.colors.accent};
  letter-spacing: 2px;
  grid-column: 1 / -1;
`;

/** Date */
const Date = Styled.div({
  gridColumn: 1 + "/" + 2,
});

const ParagraphDate = Styled.p`
  font-size: ${Theme.fontSize.h2};
  margin: 0;
  color: ${Theme.colors.gray};
  font-weight: ${Theme.fontWeight.light};
`;

/** Text Common */
const SectionTitle = Styled.h2`
  font-size: ${(props) =>
    props.date ? props.theme.fontSize.xl : props.theme.fontSize.h2};
  line-height: ${Theme.typography.lineHeight};
  grid-column: ${(props) => props.wind && "2 / 2"}
`;

const Paragraph = Styled.p`
  font-size: ${(props) => (props.reading ? Theme.fontSize.h1 : ".9rem")};
  margin: ${(props) => props.reading && "0"};
  color: ${(props) => props.reading && Theme.colors.gray};
  grid-column: ${(props) => props.wind && "2 / 3"};
`;

/** Temperature */
const Temp = Styled.div({
  gridColumn: 2 + "/" + 3,
  borderLeft: `${Theme.border.solid} ${Theme.border.size} ${Theme.border.color}`,
  borderRight: `${Theme.border.solid} ${Theme.border.size} ${Theme.border.color}`,
  padding: "0 2em",
});

/** Wind */
const Wind = Styled.div({
  gridColumn: 3 + "/" + 4,
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gridTemplateRows: "min-content 1fr",
  alignSelf: "start",
});

const WindDirection = Styled.div({
  width: `${Theme.size}`,
  height: `${Theme.size}`,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, .5)",
  display: "grid",
  placeItems: "center",
  gridRow: "1 / span 2",
});

const WindParagraph = Styled.p({});

const WindArrow = Styled.div({
  height: "calc(.75rem * 3)",
  width: ".75rem",
  background: `${Theme.colors.accentDark}`,
  clipPath: "polygon(50% 0, 0% 100%, 100% 100%)",
  transform: "translateY(-50%) rotate(180deg)",
  transformOrigin: "bottom center",
  transition: "transform 500ms ease",
});

/** Info */
const Info = Styled.div({
  gridColumn: 1 + "/" + 3,
});

/**   Unit */
const Unit = Styled.div({
  gridColumn: 3 + "/" + 4,
  placeSelf: "end",
  color: `${Theme.colors.light}`,
  display: "flex",
  gap: ".5em",
  opacity: ".7",
  transition:"opacity 275ms linear",
  ":hover":{
    opacity: 1,
  }
});

const UnitLabel = Styled.label`
  cursor: pointer;
  margin-right: ${props => props.cel && "1em"};
  margin-left: ${props => props.fah && "1em"};
  font-size: 20px;
`;

const UnitInputRadio = Styled.input`
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const UnitToggleButton = Styled.button`
  cursor: pointer;
  width: 4em;
  border: 2px solid ${Theme.colors.light};
  background: transparent;
  padding: 0;
  border-radius: 100vmax;
  &::after {
    content: "";
    display: block;
    background: ${Theme.colors.light};
    border-radius: 50%;
    height: 1rem;
    margin: 3px;
    margin-left: auto;
    width: 1rem;
  }
`;

/** Previous Weather */
const PreviousWeather = Styled.div({});

const PreviousWeatherLabel = Styled.label`

`;

const PreviousWeatherTitle = Styled.h2`
  line-height: ${Theme.typography.lineHeight};
`;

const PreviousWeatherDays = Styled.div({});

const PreviousWeatherDay = Styled.div({});

const PreviousWeatherSol = Styled.h3`
  line-height: ${Theme.typography.lineHeight};
`;

const PreviousWeatherDate = Styled.p({});

const MoreInfoButton = Styled.button({});

export {
  Theme,
  MarsWeatherContainer,
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
