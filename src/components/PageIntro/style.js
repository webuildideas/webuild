// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const PageIntroContainer = styled.div`
  padding: ${() => `${rhythmUnit(2.75)} ${rhythmUnit(1)}`};
  text-align: center;
  @media (min-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
  h1 {
    color: ${props => props.theme.black};
    text-align: center;
    margin-bottom: ${() => rhythmUnit(1.25)};
  }

  h2 {
    color: ${props => props.theme.grey};
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
