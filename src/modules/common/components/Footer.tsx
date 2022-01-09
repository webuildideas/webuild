import './styles/Footer.css'

// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'gatsby'

// Forms
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'

// Svgs
import Logo from '@static/svgs/logo.inline.svg'
import Dribbble from '@static/svgs/common/social/dribbble.inline.svg'
import Instagram from '@static/svgs/common/social/instagram.inline.svg'
import Linkedin from '@static/svgs/common/social/linkedin.inline.svg'

const Footer = () => {
  const { showModal } = useOpportunityFormModal()
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
    <footer ref={ref} className="Footer" data-testid="footer">
      <div className="Footer-inner">
        <div className="Footer-copy">
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
            className="text-h3 text-white mb-8 md:mb-10"
            custom={1}
            data-testid="footer-subtitle"
            initial="hidden"
            style={{ maxWidth: '520px' }}
            variants={variants}
          >
            Ready to take your product efforts to the next level? Drop us a
            line.
          </motion.h2>
          <motion.button
            animate={controls}
            className="Footer-cta-button text-button"
            custom={2}
            data-testid="footer-button"
            initial="hidden"
            onClick={showModal}
            type="button"
            variants={variants}
          >
            Get In Touch
          </motion.button>
        </div>

        <div className="Footer-follow" data-testid="footer-social">
          <motion.div
            animate={controls}
            className="Footer-copyright-privacy"
            custom={2}
            initial="hidden"
            variants={variants}
          >
            <div>
              <Logo className="Footer-logo" />
              <span className="Footer-copyright">&copy; {d.getFullYear()}</span>
            </div>
            <Link className="Footer-privacy text-caption" to="/privacy/">
              Privacy
            </Link>
          </motion.div>

          <motion.div
            animate={controls}
            className="Footer-social"
            custom={3}
            initial="hidden"
            variants={variants}
          >
            <motion.a
              animate={controls}
              className="Footer-social-link"
              custom={4}
              href="https://www.dribbble.com/webuild/"
              initial="hidden"
              rel="noopener noreferrer"
              target="_blank"
              variants={variants}
            >
              <Dribbble className="Footer-social-icon" />
            </motion.a>

            <motion.a
              animate={controls}
              className="Footer-social-link"
              custom={5}
              href="https://www.instagram.com/wearewebuild/"
              initial="hidden"
              rel="noopener noreferrer"
              target="_blank"
              variants={variants}
            >
              <Instagram className="Footer-social-icon" />
            </motion.a>

            <motion.a
              animate={controls}
              className="Footer-social-link"
              custom={6}
              href="https://www.linkedin.com/company/wearewebuild/"
              initial="hidden"
              rel="noopener noreferrer"
              target="_blank"
              variants={variants}
            >
              <Linkedin className="Footer-social-icon" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
