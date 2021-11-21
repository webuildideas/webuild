// Packages
import React from 'react'

// Common
import { TypeService } from '@common/types/Service'

// Components
import MotionAniLink from '@modules/common/components/MotionAniLink'

// Styles
import './styles/ServicesStickyNav.css'

interface Props {
  services: TypeService[]
}

const ServicesStickyNav = ({ services }: Props) => {
  return (
    <div className="ServicesStickyNav-links">
      <div className="ServicesStickyNav-inner">
        <h4 className="text-button text-left mb-3">All Services</h4>
        {services.map((service) => (
          <MotionAniLink
            key={service.slug}
            bgColor="#286AFF"
            className="ServicesStickyNav-link block mb-3 text-page-navigation hover:text-electricViolet"
            direction="top"
            duration={1.25}
            styleType="link"
            to={`/what-we-do/${service.slug}/`}
          >
            <span>{service.shortTitle}</span>
          </MotionAniLink>
        ))}
      </div>
    </div>
  )
}

export default ServicesStickyNav
