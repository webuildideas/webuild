// Packages
import { createGlobalStyle } from 'styled-components'

// Consts
import { reset } from './reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-size: 100%;
    font-family: ${props => props.theme.primaryFontFamily};
    color: ${props => props.theme.black};

    @media (max-width: 425px) {
      font-size: 70%;
    }

    @media (min-width: 425px ) and (max-width: 768px) {
      font-size: 82%;
    }
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

.Icon {
    position: relative;
    display: none;
    display: inline-flex;
    align-self: center;
    width: 1em;
    height: 1em;
  }
`
