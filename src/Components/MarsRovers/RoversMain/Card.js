import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

export default function CardComponent({ title, text }) {
  return (
    <Col md={4}>
      <Card className="border-black">
        <Card.Img variant="top" src="holder.js/100px180" alt="" />
        <Card.Body>
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
