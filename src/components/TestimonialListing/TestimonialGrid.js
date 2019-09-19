// Packages
import styled from 'styled-components'

const TestimonialGrid = styled.div`
  display: grid;
  justify-items: center;
  @media (max-width: 1160px) {
    padding: 0 1.875rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.875rem;
`

export default TestimonialGrid
