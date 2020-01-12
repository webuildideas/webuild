// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import OverlayNav from '../OverlayNav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import Button from '../Button'

const Nav = ({ isNavOpen, isNavPinned, toggleNav, togglePinnedNav }) => (
  <>
    <Helmet bodyAttributes={{ class: isNavOpen && 'overlayIsOpen' }} />
    <Headroom
      onPin={() => togglePinnedNav(true)}
      onUnfix={() => togglePinnedNav(false)}
      onUnpin={() => togglePinnedNav(false)}
      style={{ transition: 'all 600ms ease-in-out' }}
    >
      <S.NavContainer
        className={`NavContainer ${isNavOpen ? 'overlayIsOpen' : ''}`}
        isPinned={isNavPinned}
      >
        <SiteMaxWidthContainer className="SiteMaxWidthContainer">
          <AniLink
            bg="#0E0E1B"
            className={`Logo ${isNavOpen ? 'isOpen' : ''}`}
            cover
            direction="up"
            duration={1.5}
            to="/"
          >
            <Logo className="Logo" isOpen={isNavOpen} />
          </AniLink>
          <S.NavDesktopLinks className="NavDesktopLinks">
            <ul>
              <li>
                <AniLink
                  bg="#F3F3F3"
                  cover
                  direction="right"
                  duration={1.5}
                  to="/who-we-are"
                >
                  Who We Are
                </AniLink>
              </li>
              <li>
                <Button
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
            onClick={() => (isNavOpen ? toggleNav(false) : toggleNav(true))}
          />
        </SiteMaxWidthContainer>
      </S.NavContainer>
    </Headroom>

    <OverlayNav isOpen={isNavOpen} onContact={() => toggleNav(false)} />
  </>
)

Nav.propTypes = {
  isNavOpen: PropTypes.bool,
  isNavPinned: PropTypes.bool,
  toggleNav: PropTypes.func,
  togglePinnedNav: PropTypes.func,
}

export default Nav
