// Packages
import React from 'react'
import Img from 'gatsby-image'

// Styles
// import '@modules/case-studies/components/styles/CaseStudyIntro.css'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface Props {
  bgClasses?: string
  containerClasses?: string
  image: TypeGatsbyImageFluid
}

const CaseStudyLargeImage = ({
  containerClasses = '',
  image,
  bgClasses = ''
}: Props) => {
  return (
    <div className="case-study-large-image relative">
      <div className={`bg absolute w-full ${bgClasses}`} />
      <div
        className={`case-study-large-image__wrapper mx-auto ${containerClasses}`}
      >
        <Img
          className="case-study-large-image__img"
          durationFadeIn={150}
          fadeIn
          fluid={image.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default CaseStudyLargeImage
