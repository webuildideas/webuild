// Styles
import './styles/TeamTestimonialSlider.css'

// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Carousel, { CarouselProps } from 'nuka-carousel'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'
import { classNames } from '@common/utils/classNames'
import useWindowSize from '@common/hooks/useWindowSize'

interface Props {
  testimonials: TypeTestimonial[]
}

const testimonialSliderVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.252
    }
  },
  hidden: {
    y: 35,
    opacity: 0
  }
}

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-h3 inline">{children}</p>
    )
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <span className="font-extrabold">{text}</span>
    )
  }
}

const TestimonialDot = ({
  onClick,
  selected
}: {
  onClick: () => void
  selected: boolean
}) => {
  const dotClasses = classNames({
    TeamTestimonialSlider__control: true,
    'is-selected': selected
  })
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return <div className={dotClasses} onClick={onClick} />
}

const TestimonialSlider = ({ testimonials }: Props) => {
  const { width } = useWindowSize()
  const isMobile = width && width <= 767
  const animationControls = useAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true
  })

  const createControlClickHandler = useCallback(
    (slide: number) => () => {
      setCurrentSlide(slide)
    },
    []
  )

  const handleAfterSlide: CarouselProps['beforeSlide'] = (
    _currentSlide: number,
    endSlide: number
  ) => setCurrentSlide(endSlide)

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <div ref={ref} className="TeamTestimonialSlider">
      <motion.div
        animate={animationControls}
        initial="visible"
        variants={testimonialSliderVariants}
      >
        <h2 className="TeamTestimonialSlider__title text-h3">
          Hear it from our team
        </h2>

        <Carousel
          autoplay={true}
          autoplayInterval={7000}
          beforeSlide={handleAfterSlide}
          heightMode={isMobile ? 'current' : 'max'}
          slideIndex={currentSlide}
          transitionMode="fade"
          withoutControls
          wrapAround
        >
          {testimonials.map((testimonial) => {
            return (
              <motion.div
                key={`slide-${testimonial.name}`}
                className="TeamTestimonialSlider__slide"
              >
                <div className="TeamTestimonialSlider__content">
                  <blockquote className="TeamTestimonialSlider__quote">
                    {testimonial.quote
                      ? renderRichText(testimonial.quote, richTextOptions)
                      : null}
                    <cite className="TeamTestimonialSlider__cite">
                      <h5 className="text-caption font-extrabold">
                        {testimonial.name}
                      </h5>
                      <p className="text-caption">{testimonial.role}</p>
                    </cite>
                  </blockquote>
                  <div className="TeamTestimonialSlider__controls">
                    {testimonials.map((t: TypeTestimonial, idx: number) => {
                      const onClick = createControlClickHandler(idx)
                      return (
                        <TestimonialDot
                          key={`dot-${idx}`}
                          onClick={onClick}
                          selected={currentSlide === idx}
                        />
                      )
                    })}
                  </div>
                </div>

                {testimonial.featuredHeadshot?.fluid ? (
                  <div className="TeamTestimonialSlider__featured-headshot">
                    <GatsbyImage
                      image={testimonial?.childImageSharp?.gatsbyImageData}
                      className="headshot" />
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </Carousel>
      </motion.div>
    </div>
  );
}

export default TestimonialSlider
