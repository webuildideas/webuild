// Packages
import React from 'react'

// Styled Components
import { FooterContainer } from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'
import SectionHeading from '../Shared/SectionHeading'

const Footer = () => {
  const d = new Date()
  return (
    <FooterContainer>
      <SiteMaxWidthContainer>
        <SectionHeading>
          <h1 className="SectionHeading__title">Let's Do Something Bold</h1>
          <h2
            className="SectionHeading__subtitle"
            style={{ maxWidth: '520px' }}
          >
            Ready to take your product to the next level? Drop us a line.
          </h2>
        </SectionHeading>
        <a className="Footer__btn" href="mailto:hi@webuild.io">
          <span className="wave-emoji">👋</span>
          <span className="email">HI@WEBUILD.IO</span>
        </a>

        <div className="Footer__follow">
          <p className="Footer__copyright">&copy; WEBUILD {d.getFullYear()}</p>
          <p className="Footer__social">
            Follow us on: <a href="https://www.dribbble.com">Dribble</a>{' '}
            <span>&amp;</span> <a href="https://www.instagram.com">Instagram</a>
          </p>
        </div>
      </SiteMaxWidthContainer>
    </FooterContainer>
  )
}

export default Footer
