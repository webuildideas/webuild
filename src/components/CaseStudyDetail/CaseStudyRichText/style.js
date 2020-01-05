// Packages
import styled from 'styled-components'

export const CaseStudyRichText = styled.section`
  max-width: 1100px;
  h2 {
    font-size: ${props => props.theme.f1};
    font-weight: 900;
    max-width: 840px;
  }
  p {
    font-size: ${props => props.theme.f3};
    line-height: 1.6;
    max-width: 840px;
  }
`
