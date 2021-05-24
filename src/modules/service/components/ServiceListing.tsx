// Packages
import React from 'react'
import { Link } from 'gatsby'

// Common
import { TypeService } from '@common/types/Service'

// Assets
import ArrowRight from '@static/svgs/common/arrows/arrow-right.inline.svg'

// Styles
import './styles/ServiceListing.css'

interface Props {
  service: TypeService
}

const ServiceListing = ({ service }: Props) => {
  return (
    <Link className="ServiceListing" to={`/what-we-do/${service.slug}`}>
      <div className="ServiceListing-img">
        <img
          alt={`${service.title} illustration`}
          className="ServiceListing-static-img"
          src={service.listingIllustration.file.url}
        />
        {service.listingIllustrationGif?.file?.url ? (
          <img
            alt={`${service.title} illustration`}
            className="ServiceListing-animated-gif"
            src={service.listingIllustrationGif.file.url}
          />
        ) : null}
      </div>
      <div className="ServiceListing-content">
        <h3 className="text-h3 font-extrabold mb-2">{service.title}</h3>
        <p className="text-body mb-4">{service.tagline}</p>
        <p className="ServiceListing-learn-more">
          <span>Learn More</span>
          <ArrowRight className="arrow-icon" />
        </p>
      </div>
    </Link>
  )
}

export default ServiceListing
