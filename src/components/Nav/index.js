// Packages
import React, { useState } from 'react'
import { Link } from 'gatsby'

// Assets
import NavIcon from '../../static/svgs/navIcon.inline.svg'
import Logo from '../../static/svgs/logo.inline.svg'

// Styled Components
import NavContainer from './NavContainer'
import NavDesktopLinks from './NavDesktopLinks'
import MaxWidthContainer from '../Shared/MaxWidthContainer'

// Components
import OverlayNav from '../OverlayNav'

const Nav = () => {
  const [isOverlayNavOpen, toggleOverlayNav] = useState(false)

  return (
    <>
      <NavContainer>
        <MaxWidthContainer className="MaxWidthContainer">
          <Link to="/">
            <Logo />
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
          <div className="mobile-NavIcon">
            <NavIcon onClick={() => toggleOverlayNav(true)} />
          </div>
        </MaxWidthContainer>
      </NavContainer>

      <OverlayNav
        isOpen={isOverlayNavOpen}
        onClose={() => toggleOverlayNav(false)}
      />
    </>
  )
}

export default Nav
