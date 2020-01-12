// Packages
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Utils
import { rhythmUnit } from '../../../utils/typography'

export const CaseStudyHero = styled.div`
  position: relative;
  color: white;
  padding-top: ${() => rhythmUnit(4)};
  z-index: 1;
  overflow: hidden;
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(8)};
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -2.5%;
    display: block;
    width: 105%;
    height: 90%;
    background-image: url(${props => props.backgroundSvg});
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom-left-radius: 90% 18%;
    border-bottom-right-radius: 90% 18%;
    z-index: 0;
    @media (min-width: 768px) {
      height: 75%;
    }
  }
`

export const CaseStudyLogo = styled.img`
  max-width: 120px;
  margin-bottom: ${() => rhythmUnit(0.5)};
  @media (min-width: 768px) {
    max-width: 150px;
  }
`

export const CaseStudySuccessSummary = styled(motion.h1)`
  position: relative;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: ${() => rhythmUnit(1.5)};
  @media (min-width: 768px) {
    margin-bottom: ${() => rhythmUnit(3.75)};
  }
`
