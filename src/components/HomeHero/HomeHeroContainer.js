// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const HomeHeroContainer = styled.div`
  position: relative;
  padding: ${() => `${rhythmUnit(1.5)} ${rhythmUnit(1)} ${rhythmUnit(3)}`};
  overflow: hidden;
  background: ${props => props.theme.darkBlue};
  text-align: center;
  color: ${props => props.theme.white};

  h1 {
    margin-bottom: ${() => rhythmUnit(1.5)};
    span {
      display: inline-block;
      white-space: nowrap;
    }
  }

  h2 {
    font-size: ${props => props.theme.f5};
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: ${() => rhythmUnit(1.5)};
  }

  a {
    display: flex;
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
  }

  .HomeHero__copy {
    position: relative;
    z-index: 100;
  }

  .HomeHero__mobile-bg {
    position: absolute;
    top: -17%;
    left: 0;
    width: 100%;
    height: 140%;
    z-index: 0;
  }
`

export default HomeHeroContainer
