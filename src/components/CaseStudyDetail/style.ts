// Packages
import styled from 'styled-components'
import { motion } from 'framer-motion'

// utils
import { rhythmUnit } from '@common/utils/typography'

export const CaseStudyDetail = styled(motion.article)`
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
`

const CaseStudyGrid = styled.div`
  display: grid;
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
