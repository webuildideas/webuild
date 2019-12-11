// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const TestimonialGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${() => rhythmUnit(1)};

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`
