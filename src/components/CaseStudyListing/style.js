// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

export const CaseStudyListing = styled.section`
  overflow: hidden;
  .CaseStudy:not(:last-child) {
    margin-bottom: ${() => rhythmUnit(7)};
  }
`
