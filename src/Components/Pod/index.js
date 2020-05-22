import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaRegCopyright } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import ReactPlayer from 'react-player';
import {
  Body,
  CardContainer,
  TitleHeader,
  CardFontTop,
  CardFontBodyText,
  ButtonText,
} from './styles';

const PodCard = (props) => {
  const {
    data: { title, url, hdurl, explanation, date, copyright, mediaType },
    redirect,
  } = props;

  const mediaTypeCheck = () => {
    if (mediaType !== 'video' && copyright === undefined)
      return <span className="nasa">nasa</span>;
    if (mediaType === 'video' && copyright === undefined)
      return <FiYoutube className="pod-icon" />;
    return false;
  };

  return (
    <>
      <Body>
        <Container>
          <Row>
            <Col>
              <CardContainer>
                <TitleHeader>{title}</TitleHeader>
                {mediaType === 'video' ? (
                  <ReactPlayer
                    url={url}
                    width="100%"
                    height="500px"
                    controls="true"
                  />
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
                          color: '#0B3E92',
                        }}
                      >
                        {date}
                        {mediaTypeCheck() || (
                          <FaRegCopyright className="pod-icon" />
                        )}
                        {copyright}
                      </IconContext.Provider>
                    </CardFontTop>
                  </Card.Text>
                  <Card.Text>
                    <CardFontBodyText>{explanation}</CardFontBodyText>
                  </Card.Text>
                  <Button variant="success" onClick={redirect}>
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

PodCard.defaultProps = {
  data: PropTypes.shape({
    title: '',
    url: '',
    hdurl: '',
    explanation: '',
    date: '',
    copyright: '',
    media_type: '',
  }),
};

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
