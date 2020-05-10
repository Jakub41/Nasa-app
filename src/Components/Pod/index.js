import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  Body,
  CardContainer,
  TitleHeader,
  CardFontTop,
  CardFontBodyText,
  ButtonText,
} from "./styles";
import "./styles.scss";
import PropTypes from "prop-types";

const PodCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data;

  return (
    <>
      <Body>
        <Container>
          <Row>
            <Col>
              <CardContainer>
                <TitleHeader>{title}</TitleHeader>
                <a href={hdurl} target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={url} alt={title} />
                </a>
                <Card.Body>
                  <Card.Text>
                    <CardFontTop>
                      {date} @{copyright}
                    </CardFontTop>
                  </Card.Text>
                  <Card.Text>
                    <CardFontBodyText>{explanation}</CardFontBodyText>
                  </Card.Text>
                  <Button variant="success" onClick={props.redirect}>
                    <ButtonText>Enter</ButtonText>
                  </Button>
                </Card.Body>
              </CardContainer>
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
};

export default PodCard;

PodCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    hdurl: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired,
  }),
};
