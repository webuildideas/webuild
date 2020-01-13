// Packages
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Icons
import Investigate from '../../static/svgs/investigate.inline.svg'
import Ideate from '../../static/svgs/ideate.inline.svg'
import Iterate from '../../static/svgs/iterate.inline.svg'

const DesignPartner = () => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  })

  const controls = useAnimation()

  const variants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        delay: i * 0.152,
        type: 'spring',
      },
    }),
    hidden: {
      y: 25,
      opacity: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <S.DesignPartner ref={ref}>
      <SiteMaxWidthContainer>
        <div className="DesignPartner__intro">
          <motion.h1
            animate={controls}
            custom={0}
            initial="hidden"
            variants={variants}
          >
            The only design partner you’ll ever need.
          </motion.h1>
          <motion.p
            animate={controls}
            custom={1}
            initial="hidden"
            variants={variants}
          >
            We’ll handle all things design so you can focus on what you do best.
            Think of us as an integrated part of your team — we’ll help you
            discover opportunities and combine strategy with tactical product
            design to deliver results.
          </motion.p>
        </div>
        <S.DesignPartnerGrid>
          <div>
            <Investigate />
            <motion.h3
              animate={controls}
              custom={2}
              initial="hidden"
              variants={variants}
            >
              Investigate
            </motion.h3>
            <motion.p
              animate={controls}
              custom={3}
              initial="hidden"
              variants={variants}
            >
              We don’t jump into design and try to dazzle you with cool
              concepts. We start by understanding your goals, your market, your
              users and what’s next for your business.
            </motion.p>
          </div>
          <div>
            <Ideate />
            <motion.h3
              animate={controls}
              custom={4}
              initial="hidden"
              variants={variants}
            >
              Ideate
            </motion.h3>
            <motion.p
              animate={controls}
              custom={5}
              initial="hidden"
              variants={variants}
            >
              Every design decision starts with the user in mind. Whether you
              need design for your new app or need strategic direction, our
              talented team of UX/UI product designers will help you level up.
            </motion.p>
          </div>
          <div>
            <Iterate />
            <motion.h3
              animate={controls}
              custom={6}
              initial="hidden"
              variants={variants}
            >
              Iterate
            </motion.h3>
            <motion.p
              animate={controls}
              custom={7}
              initial="hidden"
              variants={variants}
            >
              No design ends with a deliverable. We constantly learn and
              optimize our designs, leveraging analytics to surface user
              behavior while running A/B tests to drive performance.
            </motion.p>
          </div>
        </S.DesignPartnerGrid>
      </SiteMaxWidthContainer>
    </S.DesignPartner>
  )
}

export default DesignPartner
