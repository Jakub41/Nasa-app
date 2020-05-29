/* eslint-disable import/prefer-default-export */
import Styled from '@emotion/styled';

export const BodyWrapper = Styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #e0ffff;
  min-height: 100vh;
`;

export const JumboTronWrapper = Styled.div`
  .jumbotron-intro {
    background: linear-gradient(to bottom,rgba(193,44,44,0.5) 0%,
                rgba(252,176,69,0.5) 100%);

    font-weight: 300;

    h1 {
      font-family: Nasa;
      font-size: 1.8rem;
      letter-spacing: 0.5rem;
      margin-left: 0;
    }

    p {
      margin-top: 30px;
      font-family: Baloo;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0.2rem;
      line-height: 1.5;
    }
  }

  .margin-top{}
`;

export const BadgeWrapper = Styled.div`
  width: 100%;
	max-width: 900px;
  text-align: center;
  font-family: Space Mono;
  @media (max-width: 767px) {
    margin-top: 0;
  }
  .badge {
    position: relative;
    margin: 1.5em 3em;
    width: 4em;
    height: 6.2em;
    border-radius: 10px;
    display: inline-block;
    top: 0;
    transition: all 0.2s ease;
    text-align: center;
    &:before,
    &:after {
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: inherit;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    &:before {
      transform: rotate(60deg);
    }
    &:after {
      transform: rotate(-60deg);
    }
    &:hover {
      top: -4px;
    }
    .circle {
      width: 60px;
      height: 60px;
      position: absolute;
      z-index: 10;
      border-radius: 50%;
      top: -15px;
      left: -17px;
      right: 0;
      bottom: 0;
      img {
        width: 4rem;
        margin-top: 16px;
        margin-left: 10px;
      }
    }
    .font {
      display: inline-block;
      margin-top: 1em;
    }
    .ribbon {
      position: absolute;
      border-radius: 4px;
      padding: 5px 5px 4px;
      width: 112px;
      z-index: 11;
      color: #fff;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      height: 15px;
      font-size: 14px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      text-transform: uppercase;
      background: linear-gradient(to bottom right, #555 0%, #333 100%);
      span {
        position: relative;
        top: -4px;
      }
    }


  }

  .red {
    background: linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%);
    color: #c62828;
  }
`;
