import Styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Jumbotron } from 'react-bootstrap';

export const RoverCamerasIndexWrapper = Styled(Jumbotron)`
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  padding-top: 0;
  margin: 0;
`;

export const RoverCamerasViewWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const CameraViewButtonsRow = Styled.div`
  display: inline-block;
  margin: 1rem 0.5rem;
`;

export const CameraButton = Styled.button`
  background: linear-gradient(to bottom, ${(props) =>
    props.isActive
      ? 'rgb(255, 108, 67) 0%, rgb(216, 49, 20) 100%'
      : 'rgba(252,176,69,0.5) 0%, rgba(193,44,44,0.5) 100%'});
  border: none;
  border-radius: 0.25rem;
  margin: 1rem 0.5rem;
  margin-top: 0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.27);
  display: inline-block;
  font-family: Baloo;
  color: ${(props) => (props.isActive ? '#ffffff;' : '')}

  &:hover {
    background: linear-gradient(to bottom, rgb(255, 108, 67) 0%, rgb(216, 49, 20) 100%);
    color: #ffffff;
  }
`;

export const RoverPhotosGrid = Styled.div`
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 47%);
  justify-content: space-between;
  row-gap: 1rem;

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(3, 30%);
    row-gap: 0.8rem;
  }

  @media only screen and (min-width: 750px) {
    grid-template-columns: repeat(4, 23%);
    row-gap: 0.8rem;
  }

  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(5, 18.8%);
    row-gap: 0.8rem;
  }

  @media only screen and (min-width: 1250px) {
    grid-template-columns: repeat(6, 15.8%);
    row-gap: 0.8rem;
  }
`;

export const ImageWithHoverToFitGrid = Styled.img`
  width: 100%;
  min-height: 4rem;
  height: auto;
  max-height: 10rem;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.075);
  }
`;

export const PulsingDotsContainer = Styled.div`
  margin: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 10rem;
`;

export const PulsingDot = Styled.div`
  width: 1.0rem;
  height: 1.0rem;
  margin: 0.25rem;
  display: inline-block;
  background-color: rgb(255,108,67);
  border-radius: 50%;
  animation: sizeOscilation 0.9s infinite linear;

  &:first-of-type {
    animation-delay: -0.2s;
  }

  &:last-of-type {
    animation-delay: 0.2s;
  }

  @keyframes sizeOscilation {
    0%, 100% {
      transform: scale(0);
    }
    30% {
      transform: scale(1);
    }
  }
`;

export const TopLevelTitle = Styled.h1`
  font-family: Nasa;
  font-size: 2.0rem;
  margin: 0.5rem 0;
  margin-right: 1rem;
  display: inline-block;
  text-align: center;
`;

export const SecondLevelTitle = Styled.h2`
  font-family: Baloo;
  font-size: 1.5rem;
  margin: 1rem 0.5rem;
`;

export const WrapperAlignedToCenter = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 1rem 0;
`;

export const Spinner = Styled.div`
  border: 0.3rem solid rgba(207, 49, 29, 0.4);
  border-top-color: rgb(207, 49, 29);
  width: 3rem;
  height: 3rem;
  margin: 10rem 0 20rem 0;
  border-radius: 50%;
  animation: spinner 0.9s infinite linear;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PaginationStyles = css`
  .pagination > li:first-of-type > a,
  .pagination > li:first-of-type > span {
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  .pagination > li:last-of-type > a,
  .pagination > li:last-of-type > span {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    text-decoration: none;
    color: #000000;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgb(201, 229, 229);
    margin-left: -1px;
    font-family: Baloo;
    font-size: 1rem;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    z-index: 3;
    color: #fff;
    background-color: rgb(216, 49, 20);
    border-color: rgb(255, 108, 67);
    cursor: default;
  }

  @media only screen and (min-width: 768px) {
    .pagination > li > a,
    .pagination > li > span {
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .pagination > li > a,
    .pagination > li > span {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 1600px) {
    .pagination > li > a,
    .pagination > li > span {
      font-size: 1.3rem;
    }
  }
`;
