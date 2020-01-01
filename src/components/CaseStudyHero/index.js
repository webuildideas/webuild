// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

const CaseStudyHero = ({ background, successSummary, logo, heroImg }) => (
  <S.CaseStudyHero backgroundSvg={background}>
    <SiteMaxWidthContainer>
      <S.CaseStudyLogo alt="logo" src={logo} />
      <S.CaseStudySuccessSummary>{successSummary}</S.CaseStudySuccessSummary>
      <img alt="Hero" src={heroImg.src} srcSet={heroImg.srcSet} />
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
