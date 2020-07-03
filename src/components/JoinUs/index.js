// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Components
import Button from '../Button'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'
import SectionHeading from '../Shared/SectionHeading'

const JoinUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  })

  const controls = useAnimation()

  const variants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        delay: i * 0.175,
        type: 'spring',
      },
    }),
    hidden: {
      y: 15,
      opacity: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <S.JoinUs ref={ref}>
      <SiteMaxWidthContainer>
        <SectionHeading>
          <motion.h1
            animate={controls}
            className="SectionHeading__title"
            custom={1}
            initial="hidden"
            variants={variants}
          >
            Join us and work from anywhere
          </motion.h1>
          <motion.h2
            animate={controls}
            className="SectionHeading__subtitle"
            custom={2}
            initial="hidden"
            variants={variants}
          >
            We’re always looking for inspiring, down to earth, and talented
            people to join our amazing remote team.
          </motion.h2>
        </SectionHeading>
        <S.JoinUsJobs>
          <S.JoinUsJob
            href="https://webuildideas.bamboohr.com/jobs/view.php?id=22"
            target="_blank"
          >
            <motion.h3
              animate={controls}
              custom={2}
              initial="hidden"
              variants={variants}
            >
              Product Designer
            </motion.h3>
            <motion.p
              animate={controls}
              custom={3}
              initial="hidden"
              variants={variants}
            >
              Remote (US Preferred)
            </motion.p>
          </S.JoinUsJob>
          <S.JoinUsJob
            href="https://webuildideas.bamboohr.com/jobs/view.php?id=21"
            target="_blank"
          >
            <motion.h3
              animate={controls}
              custom={4}
              initial="hidden"
              variants={variants}
            >
              Product Manager
            </motion.h3>
            <motion.p
              animate={controls}
              custom={5}
              initial="hidden"
              variants={variants}
            >
              Remote (US Preferred)
            </motion.p>
          </S.JoinUsJob>
        </S.JoinUsJobs>
        <Button
          href="https://webuildideas.bamboohr.com/jobs/"
          target="_blank"
          type="secondaryOutbound"
        >
          View Open Positions
        </Button>
      </SiteMaxWidthContainer>
    </S.JoinUs>
  )
}

export default JoinUs
