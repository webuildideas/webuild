// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

interface StyleProps {
  maxWidth: number
}

const SiteMaxWidthContainer = styled.div<StyleProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1100')}px;
  margin: 0 auto;
  padding-left: ${() => rhythmUnit(1)};
  padding-right: ${() => rhythmUnit(1)};

  @media (min-width: 1180px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export default SiteMaxWidthContainer
