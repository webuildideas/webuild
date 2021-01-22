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
    // Base Font size is 20px
    font-size: 125%;
    line-height: 1.6;
    overflow-x: hidden;

    @media (max-width: 425px) {
      font-size: 100%; // Base Font Size 16px
    }

    @media (min-width: 425px ) and (max-width: 768px) {
      font-size: 112.5%; // Base Font Size 18px
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    &.overlayIsOpen {
      position: fixed;
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

  /* h1,
  .h1{
    font-size: ${(props) => props.theme.f1};
    letter-spacing: -0.035rem;
    font-weight: 900;
  } */

  h2,
  .h2{
    font-size: ${(props) => props.theme.f2};
    letter-spacing: -0.03rem;
    font-weight: 900;
  }

  h3,
  .h3{
    font-size: ${(props) => props.theme.f3};
    letter-spacing: -0.02rem;
    font-weight: 800;
  }

  h4,
  .h4{
    font-size: ${(props) => props.theme.f4};
  }

  h5,
  .h5{
    font-size: ${(props) => props.theme.f5};
    letter-spacing: .035rem;
  }

  h6,
  .h6{
    font-size: ${(props) => props.theme.f6};
    letter-spacing: .05rem;
  }

   .f1 {
    font-size: ${(props) => props.theme.f1};
    letter-spacing: -0.035rem;
    font-weight: 900;
  }


  .f2 {
    font-size: ${(props) => props.theme.f2};
    letter-spacing: -0.03rem;
    font-weight: 900;
  }

  .f3 {
    font-size: ${(props) => props.theme.f3};
    letter-spacing: -0.03rem;
    font-weight: 800;
  }

  .f4 {
    font-size: ${(props) => props.theme.f4};
    letter-spacing: -0.03rem;
  }

  .f5 {
    font-size: ${(props) => props.theme.f5};
    letter-spacing: .035rem;
  }

  .f6 {
    font-size: ${(props) => props.theme.f6};
    letter-spacing: .05rem;
  }

  .f7 {
    font-size: ${(props) => props.theme.f7}
  }


  /* h1,
  h2,
  h3 {
    line-height: 1.2;
    font-weight: 900;
  } */
  
  h4,
  h5,
  h6 {
    line-height: 1.4;
    font-weight: 800;
  }

  .Icon {
    position: relative;
    display: none;
    display: inline-flex;
    align-self: center;
    width: 1em;
    height: 1em;
  }
  
  .Icon--align-baseline {
    bottom: -0.125em;
  }

  .headroom {
    z-index: 5 !important;
  }


  .CaseStudyDetail .headroom--unfixed .NavContainer,
  .CaseStudyDetail .headroom--unpinned .NavContainer {
    color: #fff;
    .Logo {
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
`
