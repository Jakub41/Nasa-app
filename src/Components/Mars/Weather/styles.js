import Styled from "@emotion/styled";

export const Wrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2em;
  padding: 40px 0;
`;

export const Date = Styled.div`
  h2 {
    font-size:${(props) => props.theme.fontSize.xl};
    margin: 0;
  }
  p {
    font-size:${(props) => props.theme.fontSize.h2};
    margin: 0;
    color: ${(props) => props.theme.colors.gray};
    font-weight: ${(props) => props.theme.fontWeight.light};
  }
`;
