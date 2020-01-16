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

const Footer = () => {
  const d = new Date()
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const controls = useAnimation()

  const variants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.152,
      },
    }),
    hidden: {
      y: 10,
      opacity: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <S.Footer ref={ref}>
      <SiteMaxWidthContainer>
        <SectionHeading>
          <motion.h1
            animate={controls}
            className="SectionHeading__title"
            custom={0}
            initial="hidden"
            variants={variants}
          >
            Let's Do Something Bold
          </motion.h1>
          <motion.h2
            animate={controls}
            className="SectionHeading__subtitle"
            custom={1}
            initial="hidden"
            style={{ maxWidth: '520px' }}
            variants={variants}
          >
            Ready to take your product to the next level. Drop us a line.
          </motion.h2>
        </SectionHeading>
        <Button
          className="Footer__btn"
          href="mailto:hi@webuild.io"
          type="primaryButton"
        >
          <span className="wave-emoji">👋</span>
          HI@WEBUILD.IO
        </Button>

        <div className="Footer__follow">
          <motion.p
            animate={controls}
            className="Footer__copyright"
            custom={2}
            initial="hidden"
            variants={variants}
          >
            &copy; WEBUILD {d.getFullYear()}
          </motion.p>
          <motion.p
            animate={controls}
            className="Footer__social"
            custom={3}
            initial="hidden"
            variants={variants}
          >
            <motion.a
              animate={controls}
              custom={4}
              href="https://www.dribbble.com/webuild"
              initial="hidden"
              target="_blank"
              variants={variants}
            >
              Dribbble
            </motion.a>{' '}
            <span>&amp;</span>{' '}
            <motion.a
              animate={controls}
              custom={5}
              href="https://www.instagram.com/wearewebuild"
              initial="hidden"
              target="_blank"
              variants={variants}
            >
              Instagram
            </motion.a>
          </motion.p>
        </div>
      </SiteMaxWidthContainer>
    </S.Footer>
  )
}

export default Footer
