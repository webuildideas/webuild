// Packages
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Common
import useWindowSize from '@common/hooks/useWindowSize'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Icons
import Investigate from '@static/svgs/investigate.inline.svg'
import Ideate from '@static/svgs/ideate.inline.svg'
import Iterate from '@static/svgs/iterate.inline.svg'

const getThreshold = (width: number): number => (width > 500 ? 0.85 : 0.25)

const variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.152,
      type: 'spring'
    }
  }),
  hidden: {
    y: 25,
    opacity: 0
  }
}

const maxWidthTitle = { maxWidth: '530px' }
const maxWidthDescription = { maxWidth: '800px' }
const iconWidth = { width: '65px' }

const DesignPartner = () => {
  const animationControls = useAnimation()
  const { width } = useWindowSize()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: width ? getThreshold(width) : 0.25
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <section className="pt-24 pb-20" data-testid="designPartner">
      <SiteMaxWidthContainer ref={ref}>
        <motion.h1
          animate={animationControls}
          className="mb-5"
          custom={0}
          data-testid="designPartner-title"
          initial="hidden"
          style={maxWidthTitle}
          variants={variants}
        >
          The only design partner you’ll ever need.
        </motion.h1>
        <motion.p
          animate={animationControls}
          className="leading-relaxed mb-16"
          custom={1}
          data-testid="designPartner-description"
          initial="hidden"
          style={maxWidthDescription}
          variants={variants}
        >
          We’ll handle all things design so you can focus on what you do best.
          Think of us as an integrated part of your team — we’ll help you
          discover opportunities and combine strategy with tactical product
          design to deliver results.
        </motion.p>
        <div className="grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-3 lg:gap-12 xl:gap-16">
          <div data-testid="designPartner-investigate">
            <motion.div
              animate={animationControls}
              custom={1.75}
              initial="hidden"
              variants={variants}
            >
              <Investigate className="mb-6" style={iconWidth} />
            </motion.div>
            <motion.h3
              animate={animationControls}
              className="uppercase font-extrabold mb-2"
              custom={2}
              initial="hidden"
              variants={variants}
            >
              Investigate
            </motion.h3>
            <motion.p
              animate={animationControls}
              className="leading-relaxed text-base md:text-sm lg:text-base"
              custom={3}
              initial="hidden"
              variants={variants}
            >
              We don’t immediately jump into design and try to dazzle you with
              cool concepts. We start by understanding your goals, your market,
              your users and what’s next for your business.
            </motion.p>
          </div>
          <div data-testid="designPartner-ideate">
            <motion.div
              animate={animationControls}
              custom={1.75}
              initial="hidden"
              variants={variants}
            >
              <Ideate className="mb-6" style={iconWidth} />
            </motion.div>
            <motion.h3
              animate={animationControls}
              className="uppercase font-extrabold mb-2"
              custom={4}
              initial="hidden"
              variants={variants}
            >
              Ideate
            </motion.h3>
            <motion.p
              animate={animationControls}
              className="leading-relaxed text-base md:text-sm lg:text-base"
              custom={5}
              initial="hidden"
              variants={variants}
            >
              Every design decision starts with the user in mind. Whether you
              need design for your new app or need strategic direction, our
              talented team of UX/UI product designers will help you level up.
            </motion.p>
          </div>
          <div data-testid="designPartner-iterate">
            <motion.div
              animate={animationControls}
              custom={1.75}
              initial="hidden"
              variants={variants}
            >
              <Iterate className="mb-6" style={iconWidth} />
            </motion.div>
            <motion.h3
              animate={animationControls}
              className="uppercase font-extrabold mb-2"
              custom={6}
              initial="hidden"
              variants={variants}
            >
              Iterate
            </motion.h3>
            <motion.p
              animate={animationControls}
              className="leading-relaxed text-base md:text-sm lg:text-base"
              custom={7}
              initial="hidden"
              variants={variants}
            >
              No design ends with a deliverable. We constantly learn and
              optimize our designs, leveraging analytics to surface user
              behavior while running A/B tests to drive performance.
            </motion.p>
          </div>
        </div>
      </SiteMaxWidthContainer>
    </section>
  )
}

export default DesignPartner
