// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

export const CaseStudy = styled.article`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    flex-wrap: nowrap;
  }
  .CaseStudy__img {
    position: relative;
    display: block;
    margin-bottom: ${() => rhythmUnit(1)};
    min-width: 300px;
    width: 100%;
    order: 1;
    @media (min-width: 900px) {
      left: ${props => (props.layout === 'left' ? '-100px' : '')};
      right: ${props => (props.layout === 'right' ? '-100px' : '')};
      order: ${props => (props.layout === 'left' ? 1 : 2)};
    }
  }
  .CaseStudy__content {
    max-width: 500px;
    order: 2;
    @media (min-width: 900px) {
      order: ${props => (props.layout === 'left' ? 2 : 1)};
    }
  }
  .CaseStudy__tagline {
    line-height: 1.2;
    font-weight: 900;
    margin-bottom: ${() => rhythmUnit(0.25)};
  }
  .CaseStudy__summary {
    font-size: ${props => props.theme.f3};
    line-height: 1.6;
    margin-bottom: ${() => rhythmUnit(1)};
  }
`
