// Packages
import React, { useEffect, useState } from 'react'
import { CarouselProvider } from 'pure-react-carousel'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Styles
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as S from './style'

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
    <SiteMaxWidthContainer ref={ref}>
      <motion.div
        animate={animationControls}
        initial="hidden"
        variants={testimonialSliderVariants}
      >
        <CarouselProvider
          infinite={true}
          isPlaying={shouldAutoplay}
          naturalSlideHeight={20}
          naturalSlideWidth={10}
          totalSlides={testimonials.length}
        >
          <S.TestimonialSlider>
            {testimonials.map((t: TypeTestimonial, idx: number) => (
              <S.TestimonialSlide key={`t-${t.name}`} index={idx}>
                <S.Testimonial className="text-h3">
                  {renderRichText(t.quote, richTextOptions)}
                </S.Testimonial>
              </S.TestimonialSlide>
            ))}
          </S.TestimonialSlider>

          <S.TestimonialDots>
            {testimonials.map((t: TypeTestimonial, idx: number) => (
              <S.TestimonialDot key={`tdot-${t.name}`} slide={idx}>
                <div className="Testimonial__client-headshot">
                  <Img
                    alt={`${t.name} headshot`}
                    fixed={t.headshot.fixed}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="Testimonial__client-details">
                  <h5 className="text-body font-bold mb-1">{t.name}</h5>
                  <p className="text-tag">{t.role}</p>
                </div>
              </S.TestimonialDot>
            ))}
          </S.TestimonialDots>

          <S.TestimonialDotGroup />
        </CarouselProvider>
      </motion.div>
    </SiteMaxWidthContainer>
  )
}

export default TestimonialSlider
