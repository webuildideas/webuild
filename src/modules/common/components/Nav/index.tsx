// Packages
import React, { useCallback, useEffect, memo } from 'react'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useRecoilState, useRecoilValue } from 'recoil'

// Common
import { classNames } from '@common/utils/classNames'
import useWindowSize from '@common/hooks/useWindowSize'
import {
  isOverlayNavOpenAtom,
  isNavPinnedAtom
} from '@common/store/userInterface/atoms'

// Components
import OverlayNav from '@modules/common/components/OverlayNav'
import Button from '@modules/common/components/Button'
import OpportunityFormModal from '@modules/forms/components/OpportunityFormModal'
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'
import Logo from './Logo'
import MenuIcon from './MenuIcon'

// Styles
import './style.css'

const variants = {
  visible: (i = 0) => ({
    opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.5
    }
  }),
  hidden: {
    opacity: 0,
    y: -25
  }
}

const headroomStyles = { transition: 'all 600ms ease-in-out' }

const Nav = memo(function NavMemo({ location }: { location: string }) {
  const windowSize = useWindowSize()
  const animationControls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })
  const [isNavPinned, setIsNavPinned] = useRecoilState(isNavPinnedAtom)
  const {
    showModal,
    isVisible: opportunityFormIsVisible
  } = useOpportunityFormModal()
  const isOverlayNavOpen = useRecoilValue(isOverlayNavOpenAtom)
  const helmetAttrs = {
    class: isOverlayNavOpen || opportunityFormIsVisible ? 'overlayIsOpen' : ''
  }

  const pinNav = useCallback(() => setIsNavPinned(true), [setIsNavPinned])

  const unpinNav = useCallback(() => setIsNavPinned(false), [setIsNavPinned])

  const navClasses = classNames({
    Nav: true,
    'is-pinned': isNavPinned
  })

  const navLogoClasses = classNames({
    'Nav-logo': true,
    isOpen: isOverlayNavOpen
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView, windowSize])

  return (
    <>
      <OpportunityFormModal location={location} />
      <Helmet bodyAttributes={helmetAttrs} />
      <Headroom
        onPin={pinNav}
        onUnfix={unpinNav}
        onUnpin={unpinNav}
        style={headroomStyles}
      >
        <header ref={ref} className={navClasses}>
          <div className="Nav-container">
            <motion.div
              animate={animationControls}
              custom={1}
              initial="hidden"
              variants={variants}
            >
              <AniLink
                bg="#0E0E1B"
                className={navLogoClasses}
                cover
                direction="up"
                duration={1.5}
                to="/"
              >
                <Logo />
              </AniLink>
            </motion.div>
            <div>
              <ul className="Nav-desktop-links">
                <motion.li
                  animate={animationControls}
                  custom={1.5}
                  initial="hidden"
                  variants={variants}
                >
                  <AniLink
                    bg="#F3F3F3"
                    className="block text-page-navigation text-center uppercase hover:font-bold"
                    cover
                    direction="right"
                    duration={1.5}
                    to="/who-we-are"
                  >
                    Who We Are
                  </AniLink>
                </motion.li>
                <motion.li
                  animate={animationControls}
                  custom={1.5}
                  initial="hidden"
                  variants={variants}
                >
                  <AniLink
                    bg="#F3F3F3"
                    className="block text-page-navigation text-center uppercase hover:font-bold"
                    cover
                    direction="right"
                    duration={1.5}
                    to="/insights"
                  >
                    Insights
                  </AniLink>
                </motion.li>
                <li>
                  <Button
                    className="Nav-button text-page-navigation"
                    onClick={showModal}
                    styleType="outline"
                    type="button"
                  >
                    Get In Touch
                  </Button>
                </li>
              </ul>
            </div>

            <MenuIcon />
          </div>
        </header>
      </Headroom>

      <OverlayNav />
    </>
  )
})

export default Nav
