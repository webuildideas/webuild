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
import '../styles/employeeCarousel.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ArrowProps {
  className: string
  style: Record<string, unknown>
  onClick(): any
}

// Custom Carousel Arows
const NextArrow = ({ className, style, onClick }: ArrowProps) => {
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

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
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
  variableWidth: true,
  responsive: [
    {
      breakpoint: 2380,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0
      }
    },
    {
      breakpoint: 1970,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0
      }
    },
    {
      breakpoint: 1560,
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
        slidesToScroll: 1,
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

interface SurveyCardProps {
  item: string
  question: string
  icon: any
}

const SurveyCard = ({ item, question, icon }: SurveyCardProps) => {
  return (
    <div className="survey-card">
      <div className="survey-card__wrapper">
        <div className="survey-card__icon">{icon}</div>
        <div className="survey-card__content">
          <h3 className="text-h3 font-extrabold">{question}</h3>
          <p className="text-body">{item}</p>
        </div>
      </div>
    </div>
  )
}

interface Props {
  loveAboutDesign: any
  favoritePlaceToTravel: any
  favoriteLocalMeal: any
  secretPower: any
  coffeeOrTea: any
  findInspiration: any
  gender: boolean
}

const EmployeeCarousel = ({
  loveAboutDesign,
  favoritePlaceToTravel,
  favoriteLocalMeal,
  secretPower,
  coffeeOrTea,
  findInspiration,
  gender
}: Props) => {
  return (
    <section className="employee-carousel">
      <div className="employee-carousel__wrapper">
        <Slider {...settings}>
          <SurveyCard
            icon={<LoveMostIcon />}
            item={loveAboutDesign.loveAboutDesign}
            question="What do you love most about design?"
          />
          <SurveyCard
            icon={<MealIcon />}
            item={favoriteLocalMeal.favoriteLocalMeal}
            question="What’s your favorite local meal?"
          />
          <SurveyCard
            icon={gender ? <TravelMaleIcon /> : <TravelFemaleIcon />}
            item={favoritePlaceToTravel.favoritePlaceToTravel}
            question="What's your favorite place to travel to & why?"
          />
          <SurveyCard
            icon={<SecretPowerIcon />}
            item={secretPower.secretPower}
            question="What’s your secret power?"
          />
          <SurveyCard
            icon={<CoffeeTeaIcon />}
            item={coffeeOrTea.coffeeOrTea}
            question="Are you team coffee or tea?"
          />
          <SurveyCard
            icon={<InspirationIcon />}
            item={findInspiration.findInspiration}
            question="Where do you find the best inspiration?"
          />
        </Slider>
      </div>
    </section>
  )
}

export default EmployeeCarousel
