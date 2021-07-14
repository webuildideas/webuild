// Packages
import React, { useCallback, useState } from 'react'
import Carousel from 'nuka-carousel'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Commons
import { TypeInsight } from '@common/types/Insight'

// Assets
import ArrowRight from '@static/svgs/common/arrows/arrow-right.inline.svg'
import CircleArrowRight from '@static/svgs/common/arrows/circle-arrow-right.inline.svg'
import CircleArrowLeft from '@static/svgs/common/arrows/circle-arrow-left.inline.svg'

// styles
import './styles/InsightCarousel.css'
import InsightTags from '@modules/common/components/InsightTags'

interface Props {
  insights: TypeInsight[]
}

const InsightCarousel = ({ insights }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const onRightArrowClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev + 1 > insights.length - 1) {
        return 0
      }

      return prev + 1
    })
  }, [insights])

  const onLeftArrowClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev - 1 < 0) {
        return insights.length - 1
      }

      return prev - 1
    })
  }, [insights])

  return (
    <div className="InsightCarousel">
      <div className="InsightCarousel-inner">
        <button
          className="InsightCarousel-arrow InsightCarousel-arrow-right"
          onClick={onRightArrowClick}
          type="button"
        >
          <CircleArrowRight />
        </button>
        <button
          className="InsightCarousel-arrow InsightCarousel-arrow-left"
          onClick={onLeftArrowClick}
          type="button"
        >
          <CircleArrowLeft />
        </button>
        <Carousel
          heightMode="max"
          slideIndex={currentSlide}
          slideWidth={1}
          transitionMode="fade"
          withoutControls
          wrapAround
        >
          {insights.map((insight) => (
            <article
              key={`insight-${insight.slug}`}
              className="InsightCarousel-slide"
            >
              <AniLink
                bg="#757588"
                className="InsightCarousel-slide-inner"
                cover
                direction="right"
                duration={1.25}
                to={`/${insight.slug}`}
              >
                <div className="InsightCarousel-slide-img">
                  <img
                    alt="Article Illustration"
                    src={insight.featuredIllustration?.file.url}
                  />
                </div>
                <div className="InsightCarousel-slide-content">
                  <InsightTags topics={insight.topics} type={insight.type} />
                  <h2 className="InsightCarousel-slide-title text-h3 mb-2 mt-4 lg:mt-7">
                    {insight.title}
                  </h2>
                  {insight.subtitle ? (
                    <p className="text-body mb-4 md:mb-0">{insight.subtitle}</p>
                  ) : null}

                  <p className="InsightCarousel-read-link text-button">
                    <span>Read More</span>
                    <ArrowRight className="arrow-icon" />
                  </p>
                </div>
              </AniLink>
            </article>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default InsightCarousel
