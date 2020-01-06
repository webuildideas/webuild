// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

export const CaseStudyDetail = styled.article`
  position: absolute;
  top: 0;
  width: 100%;

  .CaseStudy__img {
    mix-blend-mode: multiply;
  }
`

const CaseStudyGrid = styled.div`
  display: grid;
  h3 {
    font-size: ${props => props.theme.f3};
    text-transform: uppercase;
    margin-bottom: ${() => rhythmUnit(0.5)};
  }
  p {
    line-height: 1.6;
    font-weight: 400;
    font-size: ${props => props.theme.f3};
  }
`

export const CaseStudyChallengeSolution = styled(CaseStudyGrid)`
  max-width: 750px;
  grid-template-columns: 1fr;
  grid-gap: ${() => rhythmUnit(2)};
  margin-top: ${() => rhythmUnit(3.5)};

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${() => rhythmUnit(2.5)};
  }
`

export const CaseStudyResults = styled(CaseStudyGrid)`
  grid-template-columns: minmax(200px, 400px);
  grid-template-rows: auto;
  grid-gap: ${() => rhythmUnit(2)};
  margin-bottom: ${() => rhythmUnit(3.75)};

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${() => rhythmUnit(1.5)};
  }

  @media (min-width: 900px) {
    grid-gap: ${() => rhythmUnit(2.5)};
  }
`
