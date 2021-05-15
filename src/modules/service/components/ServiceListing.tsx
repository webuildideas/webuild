// Packages
import React from 'react'

// Common
import { TypeService } from '@common/types/Service'
import { Link } from 'gatsby'

interface Props {
  service: TypeService
}

const ServiceListing = ({ service }: Props) => {
  return (
    <div className="ServiceListing bg-foundation p-8 mb-10">
      <div className="ServiceListing-img">
        <p>image</p>
      </div>
      <div className="ServiceListing-content">
        <h3 className="text-h3 font-extrabold">{service.title}</h3>
        <p className="text-body">{service.tagline}</p>
        <Link className="text-electricViolet" to={`/services/${service.slug}`}>
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ServiceListing
