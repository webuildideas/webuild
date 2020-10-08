// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

// Svg
import TeamMapSvg from '../../static/svgs/teamMap.inline.svg'

// Styled Components
import SiteMaxWidthContainer from '../../common/styledComponents/SiteMaxWidthContainer'
import SectionHeading from '../../common/styledComponents/SectionHeading'

const variants = {
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
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })
  const controls = useAnimation()
  const imageControls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      imageControls.start('imageVisible')
    }
  }, [controls, imageControls, inView])

  return (
    <SiteMaxWidthContainer
      ref={ref}
      style={{
        paddingTop: `${rhythmUnit(2)}`,
        paddingBottom: `${rhythmUnit(2)}`
      }}
    >
      <SectionHeading style={{ marginBottom: `${rhythmUnit(3)}` }}>
        <motion.h1
          animate={controls}
          className="SectionHeading__title"
          custom={0}
          initial="hidden"
          variants={variants}
        >
          The world is our conference room
        </motion.h1>
        <motion.h2
          animate={controls}
          className="SectionHeading__subtitle"
          custom={1}
          initial="hidden"
          variants={variants}
        >
          We embrace diversity and learning new things about each other’s
          cultures. Each of us is proactive, strategic and strives for
          continuous improvement.
        </motion.h2>
      </SectionHeading>
      <motion.div
        animate={imageControls}
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
