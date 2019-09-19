// Packages
import React from 'react'
import { Link } from 'gatsby'

// Assets
import NavIcon from '../../static/svgs/navIcon.inline.svg'
import Logo from '../../static/svgs/logo.inline.svg'

// Styled Components
import NavContainer from './NavContainer'
import NavDesktopLinks from './NavDesktopLinks'
import MaxWidthContainer from '../Shared/MaxWidthContainer'

// Components
import { AppContext } from '../AppProvider'
import OverlayNav from '../OverlayNav'

const Nav = () => (
  <AppContext.Consumer>
    {context => (
      <>
        {console.log(context)}
        <NavContainer>
          <MaxWidthContainer className="MaxWidthContainer">
            <Link className="Logo" to="/">
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

            <NavIcon
              className="NavIcon"
              onClick={() => context.toggleNav(true)}
            />
          </MaxWidthContainer>
        </NavContainer>
        <OverlayNav
          isOpen={context.isNavOpen}
          onClose={() => context.toggleNav(false)}
        />
      </>
    )}
  </AppContext.Consumer>
)

export default Nav
