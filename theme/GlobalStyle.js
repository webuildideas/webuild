import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'overpass';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/Overpass-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'overpass';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/Overpass-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'overpass';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/Overpass-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'overpass';
    font-style: normal;
    font-weight: 800;
    src: url('/static/fonts/Overpass-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'overpass';
    font-style: normal;
    font-weight: 900;
    src: url('/static/fonts/Overpass-Black.ttf') format('truetype');
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    font-family: ${props => props.theme.primaryFontFamily};
    color: ${props => props.theme.black}
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }
  
  img {
    max-width: 100%;
    vertical-align: middle;
  }

  img[width],
  img[height] {
    max-width: none;
  }

  button,
  input[type="button"],
  input[type="submit"] {
    font-family: ${props => props.theme.primaryFontFamily};
    border: 1px solid currentColor;
    cursor: pointer;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:focus { outline: none; }
}
`
