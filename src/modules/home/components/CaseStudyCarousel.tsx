// Packages
import React, { useCallback, useState } from 'react'
import Carousel from 'nuka-carousel'
// import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// Assets
import ArrowRight from '@static/svgs/common/arrows/arrow-right.inline.svg'
import CircleArrowRight from '@static/svgs/common/arrows/circle-arrow-right.inline.svg'
import CircleArrowLeft from '@static/svgs/common/arrows/circle-arrow-left.inline.svg'

// styles
import './styles/CaseStudyCarousel.css'
import { TypeCaseStudy } from '@common/types/CaseStudy'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

interface Props {
  caseStudies: TypeCaseStudy[]
}

const CaseStudyCarousel = ({ caseStudies }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const onRightArrowClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev + 1 > caseStudies.length - 1) {
        return 0
      }

      return prev + 1
    })
  }, [caseStudies])

  const onLeftArrowClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev - 1 < 0) {
        return caseStudies.length - 1
      }

      return prev - 1
    })
  }, [caseStudies])

  return (
    <div className="CaseStudyCarousel">
      <div className="CaseStudyCarousel-inner">
        <button
          className="CaseStudyCarousel-arrow CaseStudyCarousel-arrow-right"
          onClick={onRightArrowClick}
          type="button"
        >
          <CircleArrowRight />
        </button>
        <button
          className="CaseStudyCarousel-arrow CaseStudyCarousel-arrow-left"
          onClick={onLeftArrowClick}
          type="button"
        >
          <CircleArrowLeft />
        </button>
        <Carousel
          heightMode="max"
          slideIndex={currentSlide}
          transitionMode="fade"
          withoutControls
          wrapAround
        >
          {caseStudies.map((caseStudy) => (
            <AniLink
              key={caseStudy.slug}
              bg="#525761"
              className="CaseStudyCarousel-slide"
              cover
              direction="right"
              duration={1.25}
              hex="#525761"
              to={`/case-studies/${caseStudy.slug}/`}
            >
              <div className="CaseStudyCarousel-slide-img">
                <GatsbyImage
                  alt={`${caseStudy.name}`}
                  image={caseStudy.listingImage.gatsbyImageData}
                  // imgStyle={{ objectFit: 'contain' }}
                />
                {/* <Img
                  alt={`${caseStudy.name}`}
                  durationFadeIn={275}
                  fadeIn
                  fluid={caseStudy.listingImage.fluid}
                /> */}
              </div>
              <div className="CaseStudyCarousel-content">
                <div>
                  <img
                    alt={`${caseStudy.name}-logo`}
                    className="CaseStudyCarousel-slide-logo"
                    src={caseStudy.logo?.file?.url}
                  />
                  <h3 className="text-h3 CaseStudyCarousel-slide-title">
                    {caseStudy.tagline}
                  </h3>
                  <p className="text-body CaseStudyCarousel-slide-copy">
                    {caseStudy.successSummary.successSummary}
                  </p>
                </div>

                <p className="CaseStudyCarousel-read-link text-tag">
                  <span>Read Case Study</span>
                  <ArrowRight className="arrow-icon" />
                </p>
              </div>
            </AniLink>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CaseStudyCarousel
