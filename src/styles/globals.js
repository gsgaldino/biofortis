import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1200px;

    /** Colors **/
    --primary-1: #436A3B;
    --light-gray: #EDF2F4;
    --absolute-white: #fff;
    --absolute-black: #1E1E1C;

    --text-light: #FDFDFD;
    --text-dark: #7C7C7B;

    /** Fonts **/
    --font-family: "Arial", sans-serif;

    /** body-default **/
    --body-default-font-size: 16px;

    /** h1-normal **/
    --h1-normal-font-size: 2em;

    /** Spacements **/
    --spacement-small: 6px;
    --spacement-default: 10px;
    --spacement-large: 20px;
    --spacement-x-large: 28px;

    /** Borders **/
    --border-radius: 0px;
    --border-color: 0.5px solid rgba(0, 0, 0, 0.1);

    /* Radius */
    --chakra-radii-md: 0px !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: var(--body-default-font-size);
    font-family: var(--font-family);
    background: var(--absolute-white) !important;
    padding-right: 0px !important;
  }
`;

export default GlobalStyles;
