// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

export const CaseStudyGridContainer = styled.div`
  display: grid;
  justify-items: center;
  column-gap: ${() => rhythmUnit(1)};
  row-gap: ${() => rhythmUnit(2)};
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
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
