// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Common
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import * as S from '../style'

interface Props {
  challenge: string
  solution: string
}

const variants: Variants = {
  visible: (i: number) => ({
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

const ChallengeAndSolution = ({ challenge, solution }: Props) => {
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <SiteMaxWidthContainer>
      <S.CaseStudyChallengeSolution ref={ref}>
        <div>
          <motion.h3
            animate={animationControls}
            custom={1}
            initial="hidden"
            variants={variants}
          >
            Challenge
          </motion.h3>

          <motion.p
            animate={animationControls}
            custom={2}
            initial="hidden"
            variants={variants}
          >
            {challenge}
          </motion.p>
        </div>
        <div>
          <motion.h3
            animate={animationControls}
            custom={3}
            initial="hidden"
            variants={variants}
          >
            Solution
          </motion.h3>

          <motion.p
            animate={animationControls}
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

export default ChallengeAndSolution
