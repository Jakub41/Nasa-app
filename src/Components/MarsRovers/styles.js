/* eslint-disable import/prefer-default-export */
import Styled from '@emotion/styled';
import MarsBk from '../../Assets/Images/marsBK.jpg';

export const ImgBK = Styled.div`
  background-image: url(${MarsBk});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 100%;
`;

export const Image = Styled.img`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
