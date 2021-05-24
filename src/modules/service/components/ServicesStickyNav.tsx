// Packages
import React from 'react'
import { Link } from 'gatsby'

// Common
import { TypeService } from '@common/types/Service'

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
          <Link
            key={service.slug}
            className="ServicesStickyNav-link block mb-3 text-page-navigation hover:text-electricViolet"
            to={`/what-we-do/${service.slug}`}
          >
            <span>{service.shortTitle}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServicesStickyNav
