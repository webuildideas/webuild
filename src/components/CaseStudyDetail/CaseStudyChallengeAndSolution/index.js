// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

// Components

// Styled Components
import SiteMaxWidthContainer from '../../Shared/SiteMaxWidthContainer'
import * as S from '../style'

const CaseStudyChallengeAndSolution = ({ challenge, solution }) => {
  const [ref, inView] = useInView({ threshold: 1 })
  return (
    <SiteMaxWidthContainer>
      <S.CaseStudyChallengeSolution ref={ref}>
        <div>
          <h3>Challenge {`iN VIEW: ${inView}`}</h3>
          <p>{challenge}</p>
        </div>
        <div>
          <h3>Solution</h3>
          <p>{solution}</p>
        </div>
      </S.CaseStudyChallengeSolution>
    </SiteMaxWidthContainer>
  )
}

CaseStudyChallengeAndSolution.propTypes = {
  challenge: PropTypes.string,
  solution: PropTypes.string,
}

export default CaseStudyChallengeAndSolution
