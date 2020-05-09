import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Body, CardContainer, TitleHeader, CardFont } from "./styles";
import "./styles.scss";

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
                    <CardFont>{date} @{copyright}</CardFont>
                  </Card.Text>
                  <Card.Text>{explanation}</Card.Text>
                  <Button variant="primary" onClick={props.redirect}>
                    Enter
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
