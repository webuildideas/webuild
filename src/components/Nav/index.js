// Packages
import React from 'react'
import { Link } from 'gatsby'

// Styled Components
import NavContainer from './NavContainer'
import NavDesktopLinks from './NavDesktopLinks'
import MaxWidthContainer from '../Shared/MaxWidthContainer'

// Assets
import NavIcon from '../../static/svgs/navIcon.inline.svg'
import Logo from '../../static/svgs/logo.inline.svg'

const Nav = () => (
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
        <NavIcon />
      </div>
    </MaxWidthContainer>
  </NavContainer>
)

export default Nav
