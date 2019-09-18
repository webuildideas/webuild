// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Assets
import CloseIcon from '../../static/svgs/closeIcon.inline.svg'

// Styled Components
import OverlayNavContainer from './OverlayNavContainer'

const OverlayNav = ({ isOpen, onClose }) => (
  <OverlayNavContainer isOpen={isOpen}>
    <CloseIcon onClick={onClose} />
    <ul>
      <li>
        <Link to="/who-we-are">Who We Are</Link>
      </li>
      <li>
        <Link to="/what-we-do">What We Do</Link>
      </li>
      <li>
        <Link to="/case-studies">Case Studies</Link>
      </li>
      <li>
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
  onClose: PropTypes.func.isRequired,
}

export default OverlayNav
