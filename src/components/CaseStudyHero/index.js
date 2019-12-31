// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

const CaseStudyHero = ({ background, successSummary, logo, heroImg }) => {
  console.log('hero')
  return (
    <S.CaseStudyHero backgroundSvg={background}>
      <SiteMaxWidthContainer>
        <S.CaseStudyLogo alt="logo" src={logo} />
        <S.CaseStudySuccessSummary>{successSummary}</S.CaseStudySuccessSummary>
        <Img durationFadeIn={250} fluid={heroImg} />
      </SiteMaxWidthContainer>
    </S.CaseStudyHero>
  )
}

CaseStudyHero.propTypes = {
  background: PropTypes.string,
  heroImg: PropTypes.object,
  logo: PropTypes.string,
  successSummary: PropTypes.string,
}

export default CaseStudyHero
