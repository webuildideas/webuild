// Packages
import React from 'react'
import Img from 'gatsby-image'

// Styles
import '@modules/case-studies/components/styles/CaseStudyXLargeImage.css'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface Props {
  bgColor?: string
  bgClasses?: string
  image: TypeGatsbyImageFluid
  imageClasses?: string
}

const CaseStudyXLargeImage = ({
  bgColor = 'bg-foundation',
  bgClasses = 'bottom-0 left-0 w-full h-5/6',
  image,
  imageClasses = ''
}: Props) => {
  return (
    <div className="case-study-xl-image relative">
      <div className={`case-study-xl-image__bg ${bgColor} ${bgClasses}`} />
      <div className="overflow-hidden">
        <Img
          className={`case-study-xl-image__img ${imageClasses}`}
          durationFadeIn={150}
          fadeIn
          fluid={image.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default CaseStudyXLargeImage
