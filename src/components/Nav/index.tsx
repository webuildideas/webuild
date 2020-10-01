// Packages
import React, { useCallback, useEffect, memo } from 'react'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useWindowSize } from '../../utils/hooks'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import OverlayNav from '../OverlayNav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import Button from '../Button'

interface Props {
  isNavOpen: boolean
  isNavPinned: boolean
  toggleNav: (toggle: boolean) => void
  togglePinnedNav: (toggle: boolean) => void
}

const Nav = memo(
  ({ isNavOpen, isNavPinned, toggleNav, togglePinnedNav }: Props) => {
    const [ref, inView] = useInView({ triggerOnce: true })
    const controls = useAnimation()
    const windowSize = useWindowSize()

    const toggleNavMain = useCallback(() => toggleNav(!isNavOpen), [
      isNavOpen,
      toggleNav
    ])

    const closeMainNav = useCallback(() => toggleNav(false), [toggleNav])

    const closeNavMobile = useCallback(() => {
      if (!windowSize.width || windowSize.width > 500) {
        return
      }
      toggleNav(false)
    }, [toggleNav, windowSize])

    const pinNav = useCallback(() => togglePinnedNav(true), [togglePinnedNav])

    const unpinPinnedNav = useCallback(() => togglePinnedNav(false), [
      togglePinnedNav
    ])

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

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView, windowSize])
    return (
      <>
        <Helmet bodyAttributes={{ class: isNavOpen && 'overlayIsOpen' }} />
        <Headroom
          onPin={pinNav}
          onUnfix={unpinPinnedNav}
          onUnpin={unpinPinnedNav}
          style={{ transition: 'all 600ms ease-in-out' }}
        >
          <S.NavContainer
            ref={ref}
            className={`NavContainer ${isNavOpen ? 'overlayIsOpen' : ''}`}
            isPinned={isNavPinned}
          >
            <SiteMaxWidthContainer className="SiteMaxWidthContainer">
              <motion.div
                animate={controls}
                custom={1}
                initial="hidden"
                variants={variants}
              >
                <AniLink
                  bg="#0E0E1B"
                  className={`Logo ${isNavOpen ? 'isOpen' : ''}`}
                  cover
                  direction="up"
                  duration={1.5}
                  to="/"
                >
                  <Logo
                    className="Logo"
                    isOpen={isNavOpen}
                    onClick={closeNavMobile}
                  />
                </AniLink>
              </motion.div>
              <S.NavDesktopLinks className="NavDesktopLinks">
                <ul>
                  <motion.li
                    animate={controls}
                    custom={1.5}
                    initial="hidden"
                    variants={variants}
                  >
                    <AniLink
                      bg="#F3F3F3"
                      cover
                      direction="right"
                      duration={1.5}
                      to="/who-we-are"
                    >
                      Who We Are
                    </AniLink>
                  </motion.li>
                  <li>
                    <Button
                      animationDelay={1.2}
                      className="Button"
                      href="mailto:hi@webuild.io"
                      type="primaryButton"
                    >
                      Get In Touch
                    </Button>
                  </li>
                </ul>
              </S.NavDesktopLinks>

              <MenuIcon
                className="Icon MenuIcon"
                isOpen={isNavOpen}
                onClick={toggleNavMain}
              />
            </SiteMaxWidthContainer>
          </S.NavContainer>
        </Headroom>

        <OverlayNav
          isOpen={isNavOpen}
          onContact={closeMainNav}
          toggleNav={toggleNav}
        />
      </>
    )
  }
)

export default Nav
