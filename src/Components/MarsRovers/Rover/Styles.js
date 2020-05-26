/* eslint-disable import/prefer-default-export */
import Styled from '@emotion/styled';

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
`;
