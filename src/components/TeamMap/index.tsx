// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Common
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import '@common/styles/SectionHeading.css'

// Static Assets
import TeamMapSvg from '@static/svgs/teamMap.inline.svg'

const variants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: i * 0.152,
      type: 'spring'
    }
  }),
  imageVisible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      delay: 0.5
    }
  },
  hidden: {
    y: 15,
    opacity: 0
  },
  imageHidden: {
    x: -25,
    opacity: 0
  }
}

const TeamMap = () => {
  const animationControls = useAnimation()
  const imageAnimationControls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
      imageAnimationControls.start('imageVisible')
    }
  }, [animationControls, imageAnimationControls, inView])

  return (
    <SiteMaxWidthContainer ref={ref} className="py-16">
      <div className="mb-20">
        <motion.h1
          animate={animationControls}
          className="SectionHeading__title"
          custom={0}
          initial="hidden"
          variants={variants}
        >
          The world is our conference room
        </motion.h1>
        <motion.h2
          animate={animationControls}
          className="SectionHeading__subtitle"
          custom={1}
          initial="hidden"
          variants={variants}
        >
          We embrace diversity and learning new things about each other’s
          cultures. Each of us is proactive, strategic and strives for
          continuous improvement.
        </motion.h2>
      </div>
      <motion.div
        animate={imageAnimationControls}
        custom={2}
        initial="imageHidden"
        variants={variants}
      >
        <TeamMapSvg />
      </motion.div>
    </SiteMaxWidthContainer>
  )
}

export default TeamMap
