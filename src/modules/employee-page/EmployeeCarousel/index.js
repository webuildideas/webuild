import React from 'react'

// Components
import CoffeeTeaIcon from '@static/svgs/employee-page/coffee-tea.inline.svg'
import InspirationIcon from '@static/svgs/employee-page/inspiration.inline.svg'
import LoveMostIcon from '@static/svgs/employee-page/love-most.inline.svg'
import MealIcon from '@static/svgs/employee-page/meal.inline.svg'
import SecretPowerIcon from '@static/svgs/employee-page/secret-power.inline.svg'
import TravelFemaleIcon from '@static/svgs/employee-page/travel-female.inline.svg'
import TravelMaleIcon from '@static/svgs/employee-page/travel-male.inline.svg'
import Slider from 'react-slick'
import NextCarouselArrow from '@static/svgs/employee-page/next-arrow.inline.svg'
import PrevCarouselArrow from '@static/svgs/employee-page/prev-arrow.inline.svg'

// Styles
import './employeeCarousel.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Custom Carousel Arows
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      role="button"
      style={{ ...style, display: `block` }}
    >
      <NextCarouselArrow />
    </div>
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      role="button"
      style={{ ...style, display: `block` }}
    >
      <PrevCarouselArrow />
    </div>
  )
}

// Carousel Settings
const settings = {
  centerMode: false,
  infinite: false,
  centerPadding: `48px`,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 2240,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '48px',
        slidesToShow: 1,
        slidesToscroll: 1,
        arrows: false
      }
    }
  ]
}

const SurveyCard = ({ item, question, icon }) => {
  return (
    <div className="survey-card">
      <div className="survey-card__wrapper">
        <div className="survey-card__icon">{icon}</div>
        <div className="survey-card__content">
          <h3 className="text-h3">{question}</h3>
          <p className="text-body">{item.internal.content}</p>
        </div>
      </div>
    </div>
  )
}

const Questions = ({ item, gender }) => {
  switch (item.__typename) {
    case 'contentfulEmployeeLoveAboutDesignTextNode': {
      const question = `What do you love most about design?`
      return (
        <SurveyCard icon={<LoveMostIcon />} item={item} question={question} />
      )
    }
    case 'contentfulEmployeeFavoriteLocalMealTextNode': {
      const question = `What’s your favorite local meal?`
      return <SurveyCard icon={<MealIcon />} item={item} question={question} />
    }
    case 'contentfulEmployeeFavoritePlaceToTravelTextNode': {
      const question = `What's your favorite place to travel to & why?`

      return (
        <SurveyCard
          icon={gender ? <TravelMaleIcon /> : <TravelFemaleIcon />}
          item={item}
          question={question}
        />
      )
    }
    case 'contentfulEmployeeSecretPowerTextNode': {
      const question = `What’s your secret power?`
      return (
        <SurveyCard
          icon={<SecretPowerIcon />}
          item={item}
          question={question}
        />
      )
    }
    case 'contentfulEmployeeCoffeeOrTeaTextNode': {
      const question = `Are you team coffee or tea?`
      return (
        <SurveyCard icon={<CoffeeTeaIcon />} item={item} question={question} />
      )
    }
    case 'contentfulEmployeeFindInspirationTextNode': {
      const question = `Where do you find the best inspiration?`
      return (
        <SurveyCard
          icon={<InspirationIcon />}
          item={item}
          question={question}
        />
      )
    }
    default: {
      break
    }
  }
}

const EmployeeCarousel = ({ qna, gender }) => {
  return (
    <section className="employee-carousel">
      <div className="employee-carousel__wrapper">
        <Slider {...settings}>
          {qna.map((item) => (
            <Questions key={item.id} gender={gender} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default EmployeeCarousel
