/* eslint-disable import/prefer-default-export */
import Styled from '@emotion/styled';

const Theme = {
  clr: {
    white: '#FCFCFC',
    gray: '#CBCDD3',
    dark: '#777777',
    error: '#EF8D9C',
    orange: '#FFC39E',
    success: '#B0DB7D',
    secondary: '#99DBB4',
  },

  font: 'Exo',
};

export const ErrorContainer = Styled('div')`
  display: flex;
  flex-flow: column;
  align-items:center;
  font-family: ${Theme.font};
  text-transform: uppercase;

  h1 {
    font-size: 0.9em;
    font-weight: 100;
    letter-spacing: 3px;
    padding-top: 5px;
    color: ${Theme.clr.white};
    padding-bottom: 5px;
    text-transform: uppercase;
  }

  .red {
    color: ${Theme.clr.error};
  }

  .alert {
    font-weight: 700;
    letter-spacing: 5px;
  }

  p {
    margin-top: -5px;
    font-size: 0.5em;
    font-weight: 100;
    color: ${Theme.clr.dark};
    letter-spacing: 1px;
  }

  #error-box {
    position: absolute;
    width: 247px;
    height: 289px;
    background: linear-gradient(to bottom left, ${Theme.clr.error} 40%, ${Theme.clr.orange} 100%);
    border-radius: 20px;
    box-shadow: 5px 5px 20px rgba(${Theme.clr.gray}, 10%);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .message {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 40%;
    top: 47%;
    font-size: 1.5rem;
  }

  .error-message {
    display: flex;
    align-items: center;

    &__img {
      margin: 0 auto;
      max-width: 150px;
      svg {
        margin: -0.5rem 0;
      }
    }
  }

  .button-box {
    position: absolute;
    background: ${Theme.clr.white};
    opacity: .5;
    width: 50%;
    height: 15%;
    border-radius: 20px;
    top: 83%;
    left: 25%;
    outline: 0;
    border: none;
    box-shadow: 2px 2px 10px rgba(${Theme.clr.dark}, .5);
    transition: all .5s ease-in-out;

    &:hover {
      background: ${Theme.clr.white};
      transform: scale(1.05);
      transition: all .3s ease-in-out;
      opacity: 1;
    }

    h1 {
      margin: 0;
    }
  }

  @keyframes scale {
    50% {
      transform: scale(0.9);
    }
  }

  #crashed-rocket {
  width: 100%;
  &:hover {
      .head {
        transform: rotate(4deg) translate(2%,0);
        transform-origin: center;
      }
    }
  }

  #smoke {
	position: absolute;
	z-index: 3;
	width: 1px;
  height: 160px;
	left: 50%;
  bottom: 30px;
}

#crashed-rocket circle {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  cx: 50%;
  cy: 50%;
  r: 25;
  opacity: 0;
  transform: scale(1) translate(-22%, -7%);
  transform-origin: 30% 50%;
}


/* Smoke animation */
@keyframes smokeL {
	0%   { opacity: 0; transform: scale(1) translate(-22%, -7%); }
	10%  { opacity: 1; transform: scale(1) translate(-20%, -7%); }
	100% { opacity: 0; transform: scale(4.5) translate(-22%, -7%); }
}

@keyframes smokeR {
	0%   { opacity: 0; transform: scale(1) translate(-22%, -7%); }
	10%  { opacity: 1; transform: scale(1) translate(-24%, -7%); }
	100% { opacity: 0; transform: scale(4.5) translate(-22%, -7%); }
}

#crashed-rocket circle:nth-of-type(1) { animation: smokeR 5s 0s infinite }
#crashed-rocket circle:nth-of-type(2) { animation: smokeL 5s 1s infinite }
#crashed-rocket circle:nth-of-type(3) { animation: smokeR 5s 2s infinite }
#crashed-rocket circle:nth-of-type(4) { animation: smokeL 5s 3s infinite }
#crashed-rocket circle:nth-of-type(5) { animation: smokeR 5s 4s infinite }
#crashed-rocket circle:nth-of-type(6) { animation: smokeL 5s 5s infinite }`;
