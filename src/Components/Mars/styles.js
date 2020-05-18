import Styled from "@emotion/styled";
import MarsBackGround from "../../Assets/Images/marsWeather.jpg";

export const WrapperGlobal = Styled("div")`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    margin: 0;
    font-family: Exo;
    line-height: 1.6;
    background-image: url(${MarsBackGround});
    background-size: cover;
    height: 94vh;
    color: color: ${(props) => props.theme.colors.light};

    .sr-only:not(:focus):not(:active) {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    h1, h2, h3 {
      line-height: 1;
    }
    a {
      color:  ${(props) => props.theme.colors.accent};
   }
    a:hover {
      color: ${(props) => props.theme.colors.dark};
    }
`;

export const AppWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const MarsWeather = Styled.main`
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  max-width: 1000px;
  margin: 40px 0;
  border-radius: 20px;
  .main-title {
    font-size: ${(props) => props.theme.fontSize.h1};
    font-weight: ${(props) => props.theme.fontWeight.light};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.accent};
    letter-spacing: 2px;
    grid-column: 1 / -1;
  }
  .section-title {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin: 0;
  }
  .reading {
    font-size: ${(props) => props.theme.fontSize.h1};
    margin: 0;
    color: ${(props) => props.theme.colors.gray};
  }
`;
