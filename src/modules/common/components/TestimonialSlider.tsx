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

// SVGs
import SimpleArrowRight from '@static/svgs/common/arrows/arrow-simple-right.inline.svg'
import SimpleArrowLeft from '@static/svgs/common/arrows/arrow-simple-left.inline.svg'

// Styles
import './styles/TestimonialSlider.css'

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
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="inline">{children}</p>
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <span className="font-extrabold">{text}</span>
    )
  }
}

const TestimonialDot = ({
  testimonial: t,
  onClick,
  selected
}: {
  testimonial: TypeTestimonial
  onClick: () => void
  selected: boolean
}) => {
  const dotClasses = classNames({
    'TestimonialSlider-control': true,
    'is-selected': selected
  })
  return (
    <div className={dotClasses} onClick={onClick} role="button">
      <div className="Testimonial__client-headshot">
        {selected ? (
          <GatsbyImage
            image={t.childImageSharp.gatsbyImageData}
            alt={`${t.name} headshot`}
            style={{ width: '100%', height: '100%' }} />
        ) : (
          <GatsbyImage
            image={t.childImageSharp.gatsbyImageData}
            alt={`${t.name} headshot`}
            style={{ width: '100%', height: '100%' }} />
        )}
      </div>
    </div>
  );
}

const TestimonialSlider = ({ testimonials }: Props) => {
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

  const onRightArrowClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev + 1 > testimonials.length - 1) {
        return 0
      }

      return prev + 1
    })
  }, [testimonials])

  const onLeftArrowClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev - 1 < 0) {
        return testimonials.length - 1
      }

      return prev - 1
    })
  }, [testimonials])

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
    <div ref={ref} className="TestimonialSlider">
      <motion.div
        animate={animationControls}
        initial="visible"
        variants={testimonialSliderVariants}
      >
        <Carousel
          autoplay={true}
          autoplayInterval={7000}
          beforeSlide={handleAfterSlide}
          heightMode="current"
          slideIndex={currentSlide}
          transitionMode="fade"
          withoutControls
          wrapAround
        >
          {testimonials.map((testimonial) => {
            return (
              <motion.div
                key={`slide-${testimonial.name}`}
                className="TestimonialSlider-slide"
              >
                {testimonial.mainHeadshot?.fluid ? (
                  <div className="TestimonialSlider-featured-headshot">
                    <GatsbyImage
                      image={testimonial?.childImageSharp?.gatsbyImageData}
                      className="headshot" />
                    <div className="mt-4">
                      <h5 className="text-caption font-extrabold">
                        {testimonial.name}
                      </h5>
                      <p className="text-caption">{testimonial.role}</p>
                      <p className="text-caption">{testimonial.company}</p>
                    </div>
                  </div>
                ) : null}
                <blockquote className="TestimonialSlider-quote text-h3 block">
                  {testimonial.quoteShort
                    ? renderRichText(testimonial.quoteShort, richTextOptions)
                    : null}
                  <cite className="block mt-12 md:hidden">
                    <h5 className="text-caption font-extrabold">
                      {testimonial.name}
                    </h5>
                    <p className="text-caption">{`${testimonial.role}, ${testimonial.company}`}</p>
                  </cite>
                </blockquote>
              </motion.div>
            );
          })}
        </Carousel>
        <div className="TestimonialSlider-controls">
          <SimpleArrowLeft
            className="TestimonialSlider-control-arrow left"
            onClick={onLeftArrowClick}
          />
          {testimonials.map((t: TypeTestimonial, idx: number) => {
            const onClick = createControlClickHandler(idx)
            return (
              <TestimonialDot
                key={`dot-${idx}`}
                onClick={onClick}
                selected={currentSlide === idx}
                testimonial={t}
              />
            )
          })}
          <SimpleArrowRight
            className="TestimonialSlider-control-arrow right"
            onClick={onRightArrowClick}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default TestimonialSlider
