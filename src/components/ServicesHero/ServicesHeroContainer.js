// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const ServicesHeroContainer = styled.div`
  padding: ${() => `${rhythmUnit(2.75)} ${rhythmUnit(1)}`};
  text-align: center;
  @media (min-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkBlue};

  h1 {
    text-align: center;
    margin-bottom: ${() => rhythmUnit(1.25)};
  }

  h2 {
    text-align: center;
    line-height: 1.6;
    font-weight: 400;
    br {
      display: none;
      @media (min-width: 600px) {
        display: block;
      }
    }
  }
`

export default ServicesHeroContainer
