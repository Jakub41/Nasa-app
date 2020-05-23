import React from 'react';
import { Row } from 'react-bootstrap';
import CardComponent from './Card';

export default function RoversMain() {
  return (
    <Row>
      <CardComponent title="Hello" text="lorem ipsus" />
      <CardComponent title="KIKI" text="lorem ipsus" />
      <CardComponent title="BIBI" text="lorem ipsus" />
    </Row>
  );
}
