// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const TestimonialGrid = styled.div`
  display: grid;
  justify-items: center;
  padding: 0px ${() => rhythmUnit(1)};
  @media (min-width: 768px) and (max-width: 1160px) {
    padding: 0px ${() => rhythmUnit(1.25)};
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr;
  grid-gap: ${() => rhythmUnit(1.25)};
`

export default TestimonialGrid
