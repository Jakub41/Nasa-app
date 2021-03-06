/* eslint-disable import/prefer-default-export */
import Styled from '@emotion/styled';
import MarsBk from '../../Assets/Images/marsBK2.jpg';
import ImgMars from '../../Assets/Images/marsBK3.jpg';

export const ImgBK = Styled.div`
  background-image: url(${MarsBk});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  min-height: 100vh;
`;

export const Image = Styled.img`
  min-width: 100%;
  height: 40vh;
  position: relative;
  top: -30px;
  left: 0;
  z-index: 0;
`;

export const JumbotronWrapper = Styled.div`
  .jumbo-rovers{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.7) 0%,
                      rgba(0,0,0,.2) 100%),
                      url(${ImgMars});

    color: white;
    font-weight: 300;
    line-height: 1;
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
      font-weight: 100;
      letter-spacing: 0.2rem;
      line-height: 1.5;
    }



    @media(max-width: 796px) {
      height: 60vh;
      p {
        margin-top: 50px;
      }
    }
  }
`;
