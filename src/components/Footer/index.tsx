// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Common
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import '@common/styles/SectionHeading.css'

// Components
import Button from '@components/Button'

// Styles
import * as S from './style'

const Footer = () => {
  const d = new Date()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })

  const controls = useAnimation()

  const variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.152
      }
    }),
    hidden: {
      y: 10,
      opacity: 0
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <S.Footer ref={ref} data-testid="footer">
      <SiteMaxWidthContainer>
        <div>
          <motion.h1
            animate={controls}
            className="SectionHeading__title"
            custom={0}
            data-testid="footer-title"
            initial="hidden"
            variants={variants}
          >
            Let's Do Something Bold
          </motion.h1>
          <motion.h2
            animate={controls}
            className="SectionHeading__subtitle"
            custom={1}
            data-testid="footer-subtitle"
            initial="hidden"
            style={{ maxWidth: '520px' }}
            variants={variants}
          >
            Ready to take your product to the next level? Drop us a line.
          </motion.h2>
        </div>
        <Button
          animationDelay={0.1}
          className="Footer__btn"
          data-testid="footer-button"
          href="mailto:hi@webuild.io"
          type="primaryButton"
        >
          <span
            aria-label="Waving hand emoji"
            className="wave-emoji"
            role="img"
          >
            👋
          </span>
          HI@WEBUILD.IO
        </Button>

        <div className="Footer__follow" data-testid="footer-social">
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
