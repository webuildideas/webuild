// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img, { FluidObject } from 'gatsby-image'
import { motion } from 'framer-motion'

// Commons
import * as S from './style'
import SiteMaxWidthContainer from '../../../common/styledComponents/SiteMaxWidthContainer'

interface Props {
  background: string
  successSummary: string
  logo: string
  heroImg: FluidObject
}

const CaseStudyHero = ({
  background,
  successSummary,
  logo,
  heroImg
}: Props) => (
  <S.CaseStudyHero backgroundSvg={background}>
    <SiteMaxWidthContainer>
      <motion.div
        animate={{
          opacity: 1,
          left: '0px'
        }}
        initial={{
          position: 'relative',
          overflow: 'hidden',
          left: '-60px',
          opacity: 0
        }}
        transition={{
          duration: 0.75
        }}
      >
        <S.CaseStudyLogo alt="logo" src={logo} />
      </motion.div>
      <S.CaseStudySuccessSummary
        animate={{ opacity: 1, top: '0px' }}
        initial={{ opacity: 0, top: '40px' }}
        transition={{ duration: 0.75 }}
      >
        {successSummary}
      </S.CaseStudySuccessSummary>
      <motion.div
        animate={{ top: '0px', opacity: 1 }}
        initial={{
          top: '120px',
          overflow: 'hidden',
          position: 'relative',
          opacity: 0
        }}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <Img durationFadeIn={125} fadeIn fluid={heroImg} />
      </motion.div>
    </SiteMaxWidthContainer>
  </S.CaseStudyHero>
)

CaseStudyHero.propTypes = {
  background: PropTypes.string,
  heroImg: PropTypes.object,
  logo: PropTypes.string,
  successSummary: PropTypes.string
}

export default CaseStudyHero
