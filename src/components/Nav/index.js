// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'

// Styled Components
import NavContainer from './NavContainer'
import NavDesktopLinks from './NavDesktopLinks'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import OverlayNav from '../OverlayNav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'

const Nav = ({
  isNavOpen,
  isNavPinned,
  toggleNav,
  togglePinnedNav,
  colorTheme,
}) => (
  <>
    <Helmet
      bodyAttributes={{
        class: isNavOpen && 'overlay-is-open',
      }}
    />
    <Headroom
      onPin={() => togglePinnedNav(true)}
      onUnpin={() => togglePinnedNav(false)}
      onUnfix={() => togglePinnedNav(false)}
      style={{ transition: 'all 600ms ease-in-out' }}
    >
      <NavContainer
        isPinned={isNavPinned}
        className={`nav-theme--${colorTheme}`}
      >
        <SiteMaxWidthContainer className="SiteMaxWidthContainer">
          <Link className={`Logo ${isNavOpen ? 'isOpen' : ''}`} to="/">
            <Logo className="Logo" isOpen={isNavOpen} />
          </Link>
          <NavDesktopLinks className="NavDesktopLinks">
            <li>
              <Link to="/who-we-are">Who We Are</Link>
            </li>
            <li>
              <Link to="/what-we-do">What We Do</Link>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
          </NavDesktopLinks>

          <MenuIcon
            isOpen={isNavOpen}
            className="Icon MenuIcon"
            onClick={() => (isNavOpen ? toggleNav(false) : toggleNav(true))}
          />
        </SiteMaxWidthContainer>
      </NavContainer>
    </Headroom>

    <OverlayNav isOpen={isNavOpen} onContact={() => toggleNav(false)} />
  </>
)

Nav.propTypes = {
  isNavOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
  isNavPinned: PropTypes.bool,
  togglePinnedNav: PropTypes.func,
  colorTheme: PropTypes.string,
}

export default Nav
