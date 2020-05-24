/* eslint-disable import/prefer-default-export */
import Styled from '@emotion/styled';
import { Card } from 'react-bootstrap';

export const TopCardImg = Styled(Card.Img)`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

export const Image = Styled.img`
  width: 40px;
  height: 40px;
`;

export const CardHead = Styled(Card.Header)`
  background: rgba(166, 78, 50, 0.5);
  color: #613131;
  font-family: Bool;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1em;
`;

export const TextStyle = Styled.span`
    font-family: Exo;
    font-size: 1.5rem;
    font-weight: 300;
`;
