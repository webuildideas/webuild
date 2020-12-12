// Packages
import styled from 'styled-components'

// Common
import { rhythmUnit } from '@common/utils/typography'

export const CaseStudyListing = styled.section`
  overflow: hidden;
  .CaseStudy:not(:last-child) {
    margin-bottom: ${() => rhythmUnit(5)};
  }
`
