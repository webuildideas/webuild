// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'

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
          <Link className={`Logo ${isNavOpen ? 'isOpen' : ''}`} to="/">
            <Logo className="Logo" isOpen={isNavOpen} />
          </Link>
          <S.NavDesktopLinks className="NavDesktopLinks">
            <ul>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
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
