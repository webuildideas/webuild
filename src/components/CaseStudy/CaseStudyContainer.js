// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

const CaseStudyContainer = styled.div`
  max-width: 26.75rem;
  text-align: center;

  .CaseStudy__img {
    margin-bottom: ${() => rhythmUnit(1)};
  }

  .CaseStudy__name {
    font-size: ${props => props.theme.f3};
    font-weight: 800;
    margin-bottom: ${() => rhythmUnit(0.5)};
  }

  .CaseStudy__tagline {
    color: ${props => props.theme.grey};
  }
`

export default CaseStudyContainer
