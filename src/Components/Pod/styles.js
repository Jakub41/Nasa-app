import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Button, Card } from "react-bootstrap";
// import NasaFont from "../../Assets/Fonts/Nasa/Nasa.ttf";

const Body = styled.body({
  backgroundColor: "#000",
});

const TitleHeader = styled(Card.Header)`
  font-family: Nasa;
  font-size: 2rem;
  text-align: center;
`;

const CardContainer = styled(Card)({
  width: 100 + "%",
  border: "#000",
  marginTop: 20,
  marginBottom: 20
});

const Image = css`
  height: 800px;
`

export { Body, CardContainer, TitleHeader, Image };
