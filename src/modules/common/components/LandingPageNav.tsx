// Packages
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Components
import Button from '@modules/common/components/Button'
import Logo from '@modules/common/components/Nav/Logo'

// Hooks
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'

// Styles
import './styles/LandingPageNav.css'

interface Props {
  tagline?: string
}

// TODO: Launch opportunity modal on click of Get in Touch
const LandingPageNav = ({ tagline }: Props) => {
  const { showModal } = useOpportunityFormModal()
  return (
    <>
      <nav className="LandingPageNav">
        <div className="LandingPageNav-inner">
          <AniLink
            bg="#0E0E1B"
            className="LandingPageNav-logo Nav-logo"
            cover
            direction="up"
            duration={1.5}
            to="/"
          >
            <Logo />
            <span className="text-tag LandingPageNav-tagline">
              {tagline || null}
            </span>
          </AniLink>
          <div className="LandingPageNav-cta">
            <Button onClick={showModal} styleType="outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default LandingPageNav
