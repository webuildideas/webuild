// Packages
import React from 'react'
import Img from 'gatsby-image'

// Styles
import '@modules/case-studies/components/styles/CaseStudyIntro.css'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface Props {
  logo: TypeGatsbyImageFluid
  headline: string
  subheadline: string
  className?: string
}

const CaseStudyIntro = ({
  logo,
  headline,
  subheadline,
  className = ''
}: Props) => {
  return (
    <div className={`case-study-intro ${className}`}>
      <div className="case-study-intro__wrapper">
        <Img
          className="case-study-intro__logo"
          durationFadeIn={150}
          fadeIn
          fluid={logo.childImageSharp.fluid}
        />
        <h1 className="text-h1 mb-4 md:mb-6">{headline}</h1>
        <h2 className="text-h3 font-extrabold">{subheadline}</h2>
      </div>
    </div>
  )
}

export default CaseStudyIntro
