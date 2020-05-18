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
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { FaRegCopyright } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import ReactPlayer from "react-player";

const PodCard = (props) => {
  const {
    title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type,
  } = props.data;

  console.log("What media >> ", media_type);

  return (
    <>
      <Body>
        <Container>
          <Row>
            <Col>
              <CardContainer>
                <TitleHeader>{title}</TitleHeader>
                {media_type === "video" ? (
                  <ReactPlayer url={url} width="100%" height="500px" controls="true" />
                ) : (
                  <a href={hdurl} target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" src={url} alt={title} />
                  </a>
                )}
                <Card.Body>
                  <Card.Text>
                    <CardFontTop>
                      <IconContext.Provider
                        value={{
                          color: "#0B3E92",
                        }}
                      >
                        {date}
                        {copyright === undefined ? (
                          <>
                          <FiYoutube className="video-icon"/>
                          </>
                        ) : (
                          <>
                            <FaRegCopyright />
                            {copyright}
                          </>
                        )}
                      </IconContext.Provider>
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
    hdurl: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    media_type: PropTypes.string,
  }),
};
