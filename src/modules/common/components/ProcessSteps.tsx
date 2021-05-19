// Packages
import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Assets
import Investigate from '@static/svgs/process/Investigate.inline.svg'
import Ideate from '@static/svgs/process/Ideate.inline.svg'
import Iterate from '@static/svgs/process/Iterate.inline.svg'

// Styles
import './styles/ProcessSteps.css'

const variants: Variants = {
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

const ProcessSteps = () => {
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <div ref={ref} className="ProcessSteps">
      <div
        className="ProcessSteps-step"
        data-testid="designPartner-investigate"
      >
        <motion.div
          animate={animationControls}
          custom={1.75}
          initial="hidden"
          variants={variants}
        >
          <Investigate className="ProcessSteps-icon" />
        </motion.div>
        <div>
          <motion.h3
            animate={animationControls}
            className="mb-4 text-h4"
            custom={2}
            initial="hidden"
            variants={variants}
          >
            Investigate
          </motion.h3>
          <motion.p
            animate={animationControls}
            className="text-body"
            custom={3}
            initial="hidden"
            variants={variants}
          >
            We don’t immediately jump into design and try to dazzle you with
            cool concepts. We start by understanding your goals, your market,
            your users and what’s next for your business.
          </motion.p>
        </div>
      </div>

      <div className="ProcessSteps-step" data-testid="designPartner-ideate">
        <motion.div
          animate={animationControls}
          custom={1.75}
          initial="hidden"
          variants={variants}
        >
          <Ideate className="ProcessSteps-icon" />
        </motion.div>
        <div>
          <motion.h3
            animate={animationControls}
            className="mb-4 text-h4"
            custom={4}
            initial="hidden"
            variants={variants}
          >
            Ideate
          </motion.h3>
          <motion.p
            animate={animationControls}
            className="text-body"
            custom={5}
            initial="hidden"
            variants={variants}
          >
            Every design decision starts with the user in mind. Whether you need
            design for your new app or need strategic direction, our talented
            team of UX/UI product designers will help you level up.
          </motion.p>
        </div>
      </div>

      <div className="ProcessSteps-step" data-testid="designPartner-iterate">
        <motion.div
          animate={animationControls}
          custom={1.75}
          initial="hidden"
          variants={variants}
        >
          <Iterate className="ProcessSteps-icon" />
        </motion.div>
        <div>
          <motion.h3
            animate={animationControls}
            className="mb-4 text-h4"
            custom={6}
            initial="hidden"
            variants={variants}
          >
            Iterate
          </motion.h3>
          <motion.p
            animate={animationControls}
            className="text-body"
            custom={7}
            initial="hidden"
            variants={variants}
          >
            No design ends with a deliverable. We constantly learn and optimize
            our designs, leveraging analytics to surface user behavior while
            running A/B tests to drive performance.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default ProcessSteps
