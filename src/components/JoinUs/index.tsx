// Packages
import React, { useEffect } from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Commons
import * as S from './style'
import SiteMaxWidthContainer from '../../common/styledComponents/SiteMaxWidthContainer'
import '../../common/styles/SectionHeading.css'

// Components
import Button from '../Button'
import { TypeJob } from '../../common/types/Job'

interface Props {
  jobs: TypeJob[]
}

const variants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.175,
      type: 'spring'
    }
  }),
  hidden: {
    y: 15,
    opacity: 0
  }
}

const JoinUs = ({ jobs }: Props) => {
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
    <section ref={ref} data-testid="joinUs">
      <SiteMaxWidthContainer>
        <div>
          <motion.h1
            animate={animationControls}
            className="SectionHeading__title"
            custom={1}
            data-testid="joinUs-title"
            initial="hidden"
            variants={variants}
          >
            Join us and work from anywhere
          </motion.h1>
          <motion.h2
            animate={animationControls}
            className="SectionHeading__subtitle"
            custom={2}
            data-testid="joinUs-subtitle"
            initial="hidden"
            variants={variants}
          >
            We’re always looking for inspiring, down to earth, and talented
            people to join our amazing remote team.
          </motion.h2>
        </div>
        {jobs.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-between gap-3 my-12"
            data-testid="joinUs-jobs"
          >
            {jobs.map((job: TypeJob, idx: number) => {
              return (
                <OutboundLink
                  key={`job-${idx}`}
                  href={job.applicationLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <motion.h3
                    animate={animationControls}
                    className="uppercase mb-3"
                    custom={idx + 2}
                    initial="hidden"
                    variants={variants}
                  >
                    {job.title}
                  </motion.h3>
                  <motion.p
                    animate={animationControls}
                    custom={idx + 3}
                    initial="hidden"
                    variants={variants}
                  >
                    {job.location}
                  </motion.p>
                </OutboundLink>
              )
            })}
          </div>
        ) : null}
        <Button
          href="https://webuildideas.bamboohr.com/jobs/"
          rel="noopener noreferrer"
          target="_blank"
          type="secondaryOutbound"
        >
          View Open Positions
        </Button>
      </SiteMaxWidthContainer>
    </section>
  )
}

export default JoinUs
