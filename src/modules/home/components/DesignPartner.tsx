// Packages
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Common
import useWindowSize from '@common/hooks/useWindowSize'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import ProcessSteps from '@modules/common/components/ProcessSteps'

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

const maxWidthDescription = { maxWidth: '800px' }

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
          className="text-h2 font-extrabold mb-6"
          custom={0}
          data-testid="designPartner-title"
          initial="hidden"
          variants={variants}
        >
          The only design partner you’ll ever need.
        </motion.h1>
        <motion.p
          animate={animationControls}
          className="text-body mb-16 md:mb-24"
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
        <ProcessSteps />
      </SiteMaxWidthContainer>
    </section>
  )
}

export default DesignPartner
