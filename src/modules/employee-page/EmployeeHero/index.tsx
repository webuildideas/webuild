import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

// Components
import LocationIcon from '@static/svgs/employee-page/location.inline.svg'
import SimpleArrowLeft from '@static/svgs/common/arrows/arrow-simple-left.inline.svg'

// Styles
import './employeeHero.css'

interface Props {
  background: string
  name: string
  role: string
  location: string
  headshot: TypeGatsbyImageFluid
  illustration: string
}

const EmployeeHero = ({
  background,
  name,
  role,
  location,
  headshot,
  illustration
}: Props) => {
  return (
    <section className="employee-hero" style={{ background: `${background}` }}>
      {illustration && (
        <div className="ill-wrapper absolute top-0 left-0 w-full h-full">
          <div className="relative m-auto flex justify-end content-end w-full h-full">
            <img
              alt=""
              className="w-full self-end lg:self-auto md:w-2/3 h-3/4 md:h-auto object-contain 2xl:object-none"
              src={illustration}
            />
          </div>
        </div>
      )}
      <div className="employee-hero__wrapper relative">
        <div className="employee-hero__container">
          <div className="employee-hero__info">
            <AniLink
              bg="#286AFF"
              className="Service-header-all mb-10 block hover:text-electricViolet lg:mb-24"
              cover={true}
              direction="left"
              duration={1.25}
              to="/who-we-are#who-we-are-team"
            >
              <SimpleArrowLeft className="Service-header-icon" />
              <span>About Us</span>
            </AniLink>
            <h1 className="text-h1">{name}</h1>
            <h3 className="text-h3">{role}</h3>
            <div className="employee-location">
              <LocationIcon />
              <span className="text-body">{location}</span>
            </div>
          </div>
          <div className="employee-hero__images">
            <Img fadeIn fluid={headshot.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeHero
