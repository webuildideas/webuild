// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const TestimonialGridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${() => rhythmUnit(1)};
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  padding: 0px ${() => rhythmUnit(1)};
  @media (min-width: 768px) {
    padding: 0px ${() => rhythmUnit(1.25)};
  }

  @media (min-width: 1160px) {
    padding: 0;
  }
`

export default TestimonialGridContainer
