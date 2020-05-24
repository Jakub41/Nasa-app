import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import ImgCuriosityRover from '../../../Assets/Images/curiosity_rover.jpg';
import ImgOpportunityRover from '../../../Assets/Images/oppoertunity_rover.jpg';
import ImgSpiritRover from '../../../Assets/Images/spiritRover.jpg';
import { TopCardImg } from './styles';

export default function CardComponent({
  landingDate,
  launchDate,
  name,
  maxDate,
  maxSol,
  status,
  totalPhotos,
}) {
  const imgRover = () => {
    if (name === 'Curiosity')
      return <TopCardImg variant="top" src={ImgCuriosityRover} alt={name} />;

    if (name === 'Opportunity')
      return <TopCardImg variant="top" src={ImgOpportunityRover} alt={name} />;

    return <TopCardImg variant="top" src={ImgSpiritRover} alt={name} />;
  };
  return (
    <Col md={4} className="mb-5">
      <Card className="border-black mt-3">
        {imgRover()}
        <Card.Body>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Text>{launchDate}</Card.Text>
            <Card.Text>{landingDate}</Card.Text>
            <Card.Text>{maxDate}</Card.Text>
            <Card.Text>{maxSol}</Card.Text>
            <Card.Text>{status}</Card.Text>
            <Card.Text>{totalPhotos}</Card.Text>
          </Card.Body>
          <Button variant="primary">ENTER</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
