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
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

export const RoverPhotoItem = Styled.img`
  width: 47.5%;
  min-height: 4rem;
  height: auto;
  max-height: 47.5vw;
  margin: 0.5rem 0;
  margin-right: 5%;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.075);
  }

  @media only screen and (max-width: 499px) {
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 500px) {
    width: calc(90%/3);
    max-height: calc(90vw/3);
  }

  @media only screen and (min-width: 500px) and (max-width: 749px) {
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 750px) {
    width: calc(92.5%/4);
    max-height: calc(92.5vw/4);
    margin-right: 2.5%;
  }

  @media only screen and (min-width: 750px) and (max-width: 999px) {
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 1000px) {
    width: calc(94%/5);
    max-height: calc(94vw/5);
    margin-right: 1.5%;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1249px) {
    &:nth-of-type(5n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 1250px) {
    width: calc(95%/6);
    max-height: calc(95vw/6);
    margin-right: 1%;
  }

  @media only screen and (min-width: 1250px) {
    &:nth-of-type(6n) {
      margin-right: 0;
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
