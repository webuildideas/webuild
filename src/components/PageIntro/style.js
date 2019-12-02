// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const PageIntro = styled.div`
  font-size: ${props => props.theme.f1};
  line-height: 1.2;
  padding: ${() => `${rhythmUnit(2.75)} ${rhythmUnit(1)}`};
  @media (min-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }

  .PageIntro__inner {
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
  }
  span {
    font-weight: 900;
  }
`
