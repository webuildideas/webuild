// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

const SectionHeading = styled.div`
  .SectionHeading__title {
    font-size: ${(props) => props.theme.f3};
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: ${(props) => props.theme.tracked};
    margin-bottom: ${() => rhythmUnit(0.75)};
  }

  .SectionHeading__subtitle {
    font-size: ${(props) => props.theme.f2};
    font-weight: 400;
    max-width: 750px;
    margin-bottom: ${() => rhythmUnit(1)};
  }
`

export default SectionHeading
