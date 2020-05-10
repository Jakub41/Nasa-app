import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Button, Card } from "react-bootstrap";
// import NasaFont from "../../Assets/Fonts/Nasa/Nasa.ttf";

const Body = styled.div({
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
  marginBottom: 20,
});

const Image = css`
  height: 800px;
`;

const CardFontTopText = styled.text({
  fontFamily: "Space Mono",
  fontSize: 1.5 + "em",
});

const CardFontBodyText = styled.text({
  fontFamily: "Baloo",
  fontSize: 1 + "em",
});

const ButtonText = styled.text({
  fontFamily: "Exo",
  fontSize: 1 + "em",
  textTransform: "uppercase"
});

export {
  Body,
  CardContainer,
  TitleHeader,
  Image,
  CardFontTopText,
  CardFontBodyText,
  ButtonText,
};
