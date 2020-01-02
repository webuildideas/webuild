// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

// Styled Components
import CarouselDotGroup from '../Shared/CarouselDotGroup'

const CaseStudyCarousel = ({ images }) => (
  <CarouselProvider
    naturalSlideHeight={1416}
    naturalSlideWidth={1092}
    totalSlides={images.length}
    visibleSlides={2}
  >
    <Slider>
      {images.map((i, idx) => (
        <Slide key={idx} index={idx}>
          <img alt="carousel" src={i.fluid.src} srcSet={i.fluid.srcSet} />
        </Slide>
      ))}
    </Slider>

    <CarouselDotGroup />
  </CarouselProvider>
)

CaseStudyCarousel.propTypes = {
  images: PropTypes.array,
}

export default CaseStudyCarousel
