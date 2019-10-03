// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const HomeHeroContainer = styled.div`
  position: relative;
  padding: ${() => `${rhythmUnit(1.5)} ${rhythmUnit(1)} ${rhythmUnit(3)}`};
  overflow: hidden;
  background: ${props => props.theme.darkBlue};
  color: ${props => props.theme.white};

  @media (min-width: 768px) {
    position: static;
    max-height: 650px;
    overflow: visible;
    margin-bottom: 150px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    padding-bottom: 0;
    max-height: 605px;
  }

  h1 {
    margin-bottom: ${() => rhythmUnit(1.5)};
    span {
      display: inline-block;
      white-space: nowrap;
    }
    @media (min-width: 1024px) {
      margin-bottom: ${() => rhythmUnit(1)};
    }
  }

  h2 {
    font-size: ${props => props.theme.f5};
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: ${() => rhythmUnit(1.5)};
    max-width: 535px;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    display: inline-flex;
    justify-content: center;
    text-transform: uppercase;
    .copy {
      margin-right: ${() => rhythmUnit(0.5)};
    }
    .Icon {
      position: relative;
      bottom: 1px;
      fill: ${props => props.theme.yellow};
      font-size: ${props => props.theme.f5};
    }
    @media (min-width: 768px) {
      margin-bottom: ${() => rhythmUnit(1.5)};
    }
  }

  .HomeHero__content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 1100px;
    margin: 0 auto;
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: left;
    }
  }

  .HomeHero__phone {
    display: none;
    position: relative;
    max-width: 280px;
    cursor: pointer;
    margin: 0 auto;
    width: 100%;
    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 1024px) {
      max-width: 375px;
      position: relative;
      top: 10px;
    }
  }

  .HomeHero__mobile-bg,
  .HomeHero__tablet-bg,
  .HomeHero__dt-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: visible;
  }

  .HomeHero__mobile-bg {
    top: -17%;
    left: 0;
    height: 140%;
  }

  .HomeHero__tablet-bg,
  .HomeHero__dt-bg {
    display: none;
  }

  @media (min-width: 768px) {
    .HomeHero__mobile-bg {
      display: none;
    }

    .HomeHero__tablet-bg {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .HomeHero__tablet-bg {
      display: none;
    }
    .HomeHero__dt-bg {
      display: block;
    }
  }
`

export default HomeHeroContainer
