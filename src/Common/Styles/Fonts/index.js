import { css } from "@emotion/core";
import NasaFont from "../../../Assets/Fonts/Nasa/Nasa.ttf";

export const Fonts = css`
  @font-face {
    font-family: Nasa;
    src: url(${NasaFont});
  }

  @font-face {
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/exo2/v8/7cH1v4okm5zmbvwkAx_sfcEuiD8jWfWsOdC5jJ7bpAhL.woff)
      format("woff");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Space Mono Bold"), local("SpaceMono-Bold"),
      url(https://fonts.gstatic.com/s/spacemono/v5/i7dMIFZifjKcF5UAWdDRaPpZUFWaHi6WZ3Q.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Baloo";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("Baloo 2 Medium"), local("Baloo2-Medium"),
      url(https://fonts.gstatic.com/s/baloo2/v1/wXKuE3kTposypRyd76v_FeMKmF0xvdg.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;
