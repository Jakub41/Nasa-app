import styled from "@emotion/styled";
import { Button, Card } from "react-bootstrap";
import NasaFont from "../../Assets/Fonts/Nasa/Nasa.ttf";

const Body = styled.body({
  backgroundColor: "#000",
});

const TitleHeader = styled(Card.Header)`
  @font-face {
    font-family: Nasa;
    src: url(${NasaFont});
  }

  font-family: Nasa;
  font-size: 2rem;
  text-align: center;
`;

const CardContainer = styled(Card)({ width: 100 + "%", border: "#000" });

export { Body, CardContainer, TitleHeader };
