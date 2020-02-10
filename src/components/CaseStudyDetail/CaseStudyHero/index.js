// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../../Shared/SiteMaxWidthContainer'

const CaseStudyHero = ({ background, successSummary, logo, heroImg }) => (
  <S.CaseStudyHero backgroundSvg={background}>
    <SiteMaxWidthContainer>
      <motion.div
        animate={{
          opacity: 1,
          left: '0px',
        }}
        initial={{
          position: 'relative',
          overflow: 'hidden',
          left: '-60px',
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
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
          opacity: 0,
        }}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <Img fluid={heroImg} loading="eager" />
      </motion.div>
    </SiteMaxWidthContainer>
  </S.CaseStudyHero>
)

CaseStudyHero.propTypes = {
  background: PropTypes.string,
  heroImg: PropTypes.object,
  logo: PropTypes.string,
  successSummary: PropTypes.string,
}

export default CaseStudyHero
