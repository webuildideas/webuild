// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Components

// Styled Components
import SiteMaxWidthContainer from '../../Shared/SiteMaxWidthContainer'
import * as S from '../style'

const CaseStudyChallengeAndSolution = ({ challenge, solution }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })
  const controls = useAnimation()

  const variants = {
    visible: (i) => ({
      opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.25
      }
    }),
    hidden: {
      opacity: 0,
      y: 15
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <SiteMaxWidthContainer>
      <S.CaseStudyChallengeSolution ref={ref}>
        <div>
          <motion.h3
            animate={controls}
            custom={1}
            initial="hidden"
            variants={variants}
          >
            Challenge
          </motion.h3>

          <motion.p
            animate={controls}
            custom={2}
            initial="hidden"
            variants={variants}
          >
            {challenge}
          </motion.p>
        </div>
        <div>
          <motion.h3
            animate={controls}
            custom={3}
            initial="hidden"
            variants={variants}
          >
            Solution
          </motion.h3>

          <motion.p
            animate={controls}
            custom={4}
            initial="hidden"
            variants={variants}
          >
            {solution}
          </motion.p>
        </div>
      </S.CaseStudyChallengeSolution>
    </SiteMaxWidthContainer>
  )
}

CaseStudyChallengeAndSolution.propTypes = {
  challenge: PropTypes.string,
  solution: PropTypes.string
}

export default CaseStudyChallengeAndSolution
