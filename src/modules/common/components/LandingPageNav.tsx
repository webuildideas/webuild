// Packages
import React from 'react'

// Components
import Button from './Button'
import Logo from './Nav/Logo'

// Styles
import './styles/LandingPageNav.css'

interface Props {
  tagline?: string
  location: string
}

// TODO: Launch opportunity modal on click of Get in Touch
const LandingPageNav = ({ tagline, location }: Props) => {
  console.log(location)
  return (
    <nav className="LandingPageNav">
      <div className="LandingPageNav-inner">
        <div className="LandingPageNav-logo">
          <Logo />{' '}
          <span className="text-tag LandingPageNav-tagline">
            {tagline || null}
          </span>
        </div>
        <div className="LandingPageNav-cta">
          <Button styleType="outline">Get In Touch</Button>
        </div>
      </div>
    </nav>
  )
}

export default LandingPageNav
