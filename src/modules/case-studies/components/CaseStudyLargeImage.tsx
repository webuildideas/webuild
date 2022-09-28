// Packages
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

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
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          className="case-study-large-image__img"
          durationFadeIn={150}
          fadeIn />
      </div>
    </div>
  );
}

export default CaseStudyLargeImage
