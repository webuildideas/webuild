// Packages
import { createGlobalStyle } from 'styled-components'

// Consts
import { reset } from './reset'

interface StyleProps {
  theme: {
    // Typography
    primaryFontFamily: string
    tracked: string
    tight: string
    f1: string
    f2: string
    f3: string
    f4: string
    f5: string
    f6: string
    f7: string

    // Color Palette
    black: string
    blackHover: string
    vulcan: string
    tuna: string
    comet: string
    stormGrey: string
    bisonHide: string
    coldTurkey: string
    concrete: string
    snow: string
    white: string
    grey: string
  }
}

export const GlobalStyle = createGlobalStyle<StyleProps>`
  ${reset}
  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.primaryFontFamily};
    color: ${(props) => props.theme.vulcan};
    font-size: 100%;
    /* overflow-x: hidden; */
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    &.overlayIsOpen {
      position: absolute;
      height: 100vh;
      overflow-y: hidden;
      width: 100%;
    }
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
    font-family: ${(props) => props.theme.primaryFontFamily};
    border: 1px solid currentColor;
    cursor: pointer;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:focus { outline: none; }
  }

  ul, ol {
    list-style-position: outside;
    padding-left: 0;
  }

  .Icon {
    position: relative;
    display: inline-flex;
    align-self: center;
    width: 1em;
    height: 1em;
  }
  
  .Icon--align-baseline {
    bottom: -0.125em;
  }

  .headroom {
    z-index: 50 !important;
  }


  .CaseStudyDetail .headroom--unfixed .NavContainer,
  .CaseStudyDetail .headroom--unpinned .NavContainer {
    color: #fff;
    .Nav-Logo {
      fill: #fff;
    }

    .MenuIcon {
      fill: #fff;
    }

    .NavDesktopLinks {
      a:before {
        background-color: #fff;
      }
    }

    .Button.Button {
      color: #fff;
      &:after {
        background-color: #fff ;
      }
      span.border {
        border-color: #fff;
        background: transparent;
      }
      &:hover {
        color: ${(props) => props.theme.vulcan};;
      }
    }
  }

  .tl-wrapper {
    position: static !important;
  }
  
  .tl-edges {
    overflow: visible;
  }
`
