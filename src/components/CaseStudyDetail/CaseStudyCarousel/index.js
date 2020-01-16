// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

// Styled Components
import CarouselDotGroup from '../../Shared/CarouselDotGroup'

const CaseStudyCarousel = ({ images, autoplay }) => {
  const renderImg = i => {
    if (i.fluid) {
      return <img alt="carousel" src={i.fluid.src} srcSet={i.fluid.srcSet} />
    }
    return <img alt="carousel" src={i.src} srcSet={i.srcSet} />
  }
  return (
    <CarouselProvider
      infinite={true}
      isPlaying={autoplay}
      naturalSlideHeight={9}
      naturalSlideWidth={16}
      totalSlides={images.length}
      visibleSlides={1}
    >
      <Slider>
        {images.map((i, idx) => (
          <Slide key={idx} index={idx}>
            {renderImg(i)}
          </Slide>
        ))}
      </Slider>

      <CarouselDotGroup />
    </CarouselProvider>
  )
}

CaseStudyCarousel.propTypes = {
  autoplay: PropTypes.bool,
  images: PropTypes.array,
}

CaseStudyCarousel.defaultProps = {
  autoplay: false,
}

export default CaseStudyCarousel
