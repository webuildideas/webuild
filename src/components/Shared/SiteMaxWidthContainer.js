// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const SiteMaxWidthContainer = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1072')}px;
  margin: 0 auto;
  padding-left: ${() => rhythmUnit(1)};
  padding-right: ${() => rhythmUnit(1)};

  @media (min-width: 768px) {
    padding-left: ${() => rhythmUnit(0.75)};
    padding-right: ${() => rhythmUnit(0.75)};
  }

  @media (min-width: 1160px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export default SiteMaxWidthContainer
