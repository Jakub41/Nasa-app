import React from "react";
import History from "../../Util/History";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Body, CardContainer, TitleHeader } from "./styles";

const PodCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data;

  const routeChange = () => {
    let path = "/home";
    History.push(path);
  };

  return (
    <>
      <Body>
        <Container>
          <Row>
            <Col>
              <CardContainer>
                <TitleHeader>{title}</TitleHeader>
                <Card.Img variant="top" src={url} alt={title} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button onClick={routeChange} variant="primary">
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
