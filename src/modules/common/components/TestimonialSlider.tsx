/* eslint-disable react/no-children-prop */
// Packages
import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slide, Slider, Dot } from 'pure-react-carousel'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'

// Styles
import 'pure-react-carousel/dist/react-carousel.es.css'
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
  testimonial: t
}: {
  testimonial: TypeTestimonial
}) => {
  return (
    <div className="Testimonial__client-headshot">
      <Img
        alt={`${t.name} headshot`}
        fixed={t.headshot.fixed}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

const TestimonialSlider = ({ testimonials }: Props) => {
  const animationControls = useAnimation()
  const [shouldAutoplay, setAutoPlay] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
      setAutoPlay(true)
    }
  }, [animationControls, inView])

  return (
    <div ref={ref} className="TestimonialSlider">
      <motion.div
        animate={animationControls}
        initial="visible"
        variants={testimonialSliderVariants}
      >
        <CarouselProvider
          infinite={true}
          isPlaying={shouldAutoplay}
          naturalSlideHeight={20}
          naturalSlideWidth={10}
          totalSlides={testimonials.length}
        >
          <Slider className="TestimonialSlider-slides">
            {testimonials.map((t: TypeTestimonial, idx: number) => (
              <Slide key={`t-${t.name}`} index={idx}>
                <div className="TestimonialSlider-slide">
                  {t.featuredHeadshot?.fluid ? (
                    <div className="TestimonialSlider-featured-headshot">
                      <Img
                        className="headshot"
                        fluid={t.featuredHeadshot?.fluid}
                      />
                      <div className="mt-4">
                        <h5 className="text-caption font-extrabold">
                          {t.name}
                        </h5>
                        <p className="text-caption">{t.role}</p>
                        <p className="text-caption">{t.company}</p>
                      </div>
                    </div>
                  ) : null}
                  <blockquote className="TestimonialSlider-quote text-h3">
                    {renderRichText(t.quote, richTextOptions)}
                    <cite className="block mt-12 md:hidden">
                      <h5 className="text-caption font-extrabold">{t.name}</h5>
                      <p className="text-caption">{`${t.role}, ${t.company}`}</p>
                    </cite>
                  </blockquote>
                </div>
              </Slide>
            ))}
          </Slider>

          <div className="TestimonialSlider-controls">
            {testimonials.map((t: TypeTestimonial, idx: number) => (
              <Dot
                children={<TestimonialDot testimonial={t} />}
                key={`tdot-${t.name}`}
                className="TestimonialSlider-control"
                slide={idx}
              />
            ))}
          </div>
        </CarouselProvider>
      </motion.div>
    </div>
  )
}

export default TestimonialSlider
