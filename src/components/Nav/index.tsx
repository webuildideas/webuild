// Packages
import React, { useCallback, useEffect, memo } from 'react'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useRecoilState, useRecoilValue } from 'recoil'

// Commons
import {
  isOverlayNavOpenAtom,
  isNavPinnedAtom
} from '@common/store/userInterface/atoms'
import useWindowSize from '@common/hooks/useWindowSize'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import OverlayNav from '../OverlayNav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import Button from '../Button'

// Styles
import * as S from './style'

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

const Nav = memo(function NavMemo() {
  const windowSize = useWindowSize()
  const animationControls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })
  const [isNavPinned, setIsNavPinned] = useRecoilState(isNavPinnedAtom)
  const isOverlayNavOpen = useRecoilValue(isOverlayNavOpenAtom)

  const pinNav = useCallback(() => setIsNavPinned(true), [setIsNavPinned])

  const unpinNav = useCallback(() => setIsNavPinned(false), [setIsNavPinned])

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView, windowSize])

  const helmetAttrs = { class: isOverlayNavOpen ? 'overlayIsOpen' : '' }
  return (
    <>
      <Helmet bodyAttributes={helmetAttrs} />
      <Headroom
        onPin={pinNav}
        onUnfix={unpinNav}
        onUnpin={unpinNav}
        style={{ transition: 'all 600ms ease-in-out' }}
      >
        <S.NavContainer
          ref={ref}
          className={`NavContainer ${isOverlayNavOpen ? 'overlayIsOpen' : ''}`}
          isPinned={isNavPinned}
        >
          <SiteMaxWidthContainer className="SiteMaxWidthContainer">
            <motion.div
              animate={animationControls}
              custom={1}
              initial="hidden"
              variants={variants}
            >
              <AniLink
                bg="#0E0E1B"
                className={`Logo ${isOverlayNavOpen ? 'isOpen' : ''}`}
                cover
                direction="up"
                duration={1.5}
                to="/"
              >
                <Logo />
              </AniLink>
            </motion.div>
            <S.NavDesktopLinks className="NavDesktopLinks">
              <ul>
                <motion.li
                  animate={animationControls}
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

            <MenuIcon />
          </SiteMaxWidthContainer>
        </S.NavContainer>
      </Headroom>

      <OverlayNav />
    </>
  )
})

export default Nav
