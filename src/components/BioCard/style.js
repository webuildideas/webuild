// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const BioCard = styled.div`
  display: grid;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 100%;
    grid-template-columns: 1fr 2fr;
  }

  .BioCard__img-wrapper {
    height: 100%;
    max-height: 400px;

    @media (min-width: 550px) {
      img {
        object-position: top center !important;
      }
    }

    @media (min-width: 768px) {
      max-height: 100%;
    }
  }
`

export const BioContent = styled.div`
  background-color: #fff;
  padding-top: ${() => rhythmUnit(2.25)};
  padding-bottom: ${() => rhythmUnit(2)};
  padding-left: ${() => rhythmUnit(0.75)};
  padding-right: ${() => rhythmUnit(0.75)};

  @media (min-width: 768px) {
    padding-left: ${() => rhythmUnit(1.5)};
    padding-right: ${() => rhythmUnit(1.5)};
  }

  @media (min-width: 1060px) {
    padding-right: ${() => rhythmUnit(3)};
    padding-left: ${() => rhythmUnit(1.5)};
  }

  h2 {
    font-size: ${props => props.theme.f3};
    text-transform: uppercase;
    margin-bottom: ${() => rhythmUnit(0.75)};
    font-weight: 800;
    letter-spacing: 1px;
  }

  p {
    line-height: 1.6;
    font-size: ${props => props.theme.f4};
    @media (min-width: 768px) {
      font-size: ${props => props.theme.f3};
    }
  }

  a {
    font-weight: 700;
    transition: 200ms ease color;
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.comet};
      text-decoration: underline;
    }
  }

  p + p {
    margin-top: ${() => rhythmUnit(0.75)};
  }
`
