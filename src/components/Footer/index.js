// Packages
import React from 'react'
import { Link } from 'gatsby'

// Styled Components
import FooterContainer from './FooterContainer'

const Footer = () => {
  const d = new Date()
  return (
    <FooterContainer>
      <p className="copyright">&copy; WEBUILD {d.getFullYear()}</p>
      <Link className="back-home" to="/">
        ← BACK TO HOME
      </Link>
      <p className="follow-social">
        Follow us on: <a href="https://www.dribbble.com">Dribble</a>{' '}
        <span>&amp;</span> <a href="https://www.instagram.com">Instagram</a>
      </p>
    </FooterContainer>
  )
}

export default Footer
