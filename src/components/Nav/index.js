// Packages
import React, { useContext } from 'react'
import { Link } from 'gatsby'

// Styled Components
import NavContainer from './NavContainer'
import NavDesktopLinks from './NavDesktopLinks'
import MaxWidthContainer from '../Shared/MaxWidthContainer'

// Components
import { AppContext } from '../AppProvider'
import OverlayNav from '../OverlayNav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'

const Nav = () => {
  const { isNavOpen, toggleNav } = useContext(AppContext)
  return (
    <>
      <NavContainer isSticky={false}>
        <MaxWidthContainer className="MaxWidthContainer">
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
        </MaxWidthContainer>
      </NavContainer>
      <OverlayNav isOpen={isNavOpen} onClose={() => toggleNav(false)} />
    </>
  )
}

export default Nav
