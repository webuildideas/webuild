// Packages
import React from 'react'

// Components
import Button from '../Button'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'
import SectionHeading from '../Shared/SectionHeading'

const Footer = () => {
  const d = new Date()
  return (
    <S.Footer>
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
        <Button href="mailto:hi@webuild.io" type="primaryButton">
          <span className="wave-emoji">👋</span>
          <span className="email">HI@WEBUILD.IO</span>
        </Button>

        <div className="Footer__follow">
          <p className="Footer__copyright">&copy; WEBUILD {d.getFullYear()}</p>
          <p className="Footer__social">
            Follow us on: <a href="https://www.dribbble.com">Dribbble</a>{' '}
            <span>&amp;</span> <a href="https://www.instagram.com">Instagram</a>
          </p>
        </div>
      </SiteMaxWidthContainer>
    </S.Footer>
  )
}

export default Footer
