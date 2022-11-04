import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
  }

  html {
    font-size: 62.5%;
    line-height: 1;
    overflow-x: hidden;
  }

  body {
    font-family: 'Outfit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    background-color: hsl(224, 30%, 9%);
    overflow-x: hidden;
  }
  
  .attribution {
    margin-top: 2rem;
    font-size: 11px;
    text-align: center; 
    width: 100%;
    bottom: 0;
    color: hsl(0, 0%, 90%);

    a {
      color: hsl(228, 45%, 44%); 
    }
  }
`;

const MEDIA_SIZES = {
  laptop: '67em',
  tablet: '48em',
  mobile: '29em',
};

export const devices = {
  laptop: `(max-width: ${MEDIA_SIZES.laptop})`,
  tablet: `(max-width: ${MEDIA_SIZES.tablet})`,
  mobile: `(max-width: ${MEDIA_SIZES.mobile})`,
};

export const TEXT = {
  headingL: css`
    font-size: 3.2rem;
    font-weight: 300;
    letter-spacing: -0.5px;
    color: hsl(0, 0%, 100%);

    @media ${devices.mobile} {
      font-size: 2rem
    }
  `,

  headingM: css`
    font-size: 2.4rem;
    font-weight: 300;
    color: hsl(0, 0%, 100%);

    @media ${devices.mobile} {
      font-size: 1.6rem
    }
  `,

  headingS: css`
    font-size: 2.4rem;
    font-weight: 500;
    color: hsl(0, 0%, 100%);

    @media ${devices.mobile} {
      font-size: 1.5rem
    }
  `,

  headingXS: css`
    font-size: 1.8rem;
    font-weight: 500;
    color: hsl(0, 0%, 100%);

    @media ${devices.mobile} {
      font-size: 1.4rem
    }
  `,

  bodyM: css`
    font-size: 1.5rem;
    font-weight: 300;
    color: hsl(0, 0%, 100%);

    @media ${devices.mobile} {
      font-size: 1.2rem
    }
  `,

  bodyS: css`
    font-size: 1.3rem;
    font-weight: 300;
    color: hsl(0, 0%, 100%);
    opacity: 0.75;

    @media ${devices.mobile} {
      font-size: 1.1rem
    }
  `,
};
