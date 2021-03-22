// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Styles
import './style.css'

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
    <footer
      ref={ref}
      className="Footer bg-black pt-12 pb-19 px-6 md:pt-24 md:pb-12 md:px-8"
      data-testid="footer"
    >
      <div className="Footer-inner">
        <motion.h1
          animate={controls}
          className="text-h4 mb-4 text-white"
          custom={0}
          data-testid="footer-title"
          initial="hidden"
          variants={variants}
        >
          Let's Do Something Bold
        </motion.h1>
        <motion.h2
          animate={controls}
          className="text-h3 mb-6 text-white md:mb-10"
          custom={1}
          data-testid="footer-subtitle"
          initial="hidden"
          style={{ maxWidth: '520px' }}
          variants={variants}
        >
          Ready to take your product efforts to the next level? Drop us a line.
        </motion.h2>
        <motion.a
          animate={controls}
          className="text-button bg-white px-6 py-4 inline-block"
          custom={2}
          data-testid="footer-button"
          href="mailto:hi@webuild.io"
          initial="hidden"
          type="primaryButton"
          variants={variants}
        >
          HI@WEBUILD.IO
        </motion.a>

        <div className="Footer-follow" data-testid="footer-social">
          <motion.p
            animate={controls}
            className="text-h4 text-gray-700 order-2 md:order-1"
            custom={2}
            initial="hidden"
            variants={variants}
          >
            &copy; WEBUILD {d.getFullYear()}
          </motion.p>
          <motion.p
            animate={controls}
            className="text-h4 text-gray-700 order-1 mb-6 w-full md:w-auto md:order-2 md:mb-0"
            custom={3}
            initial="hidden"
            variants={variants}
          >
            <span className="block md:inline">Follow Us On: </span>
            <motion.a
              animate={controls}
              className="text-white"
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
              className="text-white"
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
      </div>
    </footer>
  )
}

export default Footer
