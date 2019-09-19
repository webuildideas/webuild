// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Styled Components
import OverlayNavContainer from './OverlayNavContainer'

const OverlayNav = ({ isOpen }) => (
  <OverlayNavContainer isOpen={isOpen}>
    <ul className="OverlayNavList">
      <li className="OverlayNavLink">
        <Link to="/who-we-are">Who We Are</Link>
      </li>
      <li className="OverlayNavLink">
        <Link to="/what-we-do">What We Do</Link>
      </li>
      <li className="OverlayNavLink">
        <Link to="/case-studies">Case Studies</Link>
      </li>
      <li className="OverlayNavLink">
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/case-studies">Get in touch</Link>
      </li>
    </ul>
  </OverlayNavContainer>
)

OverlayNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default OverlayNav
