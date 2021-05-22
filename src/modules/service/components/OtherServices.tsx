/* eslint-disable react/no-danger */
// Packages
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Common
import { TypeService } from '@common/types/Service'

// Styles
import './styles/OtherServices.css'

interface Props {
  services: TypeService[]
}

const OtherServices = ({ services }: Props) => {
  return (
    <div className="OtherServices">
      <div className="OtherServices-inner">
        <div className="OtherServices-header">
          <h3 className="text-h3 font-extrabold text-center">Other Services</h3>
          <AniLink className="OtherServices-button Button Button-outline hidden md:inline-block">
            See All Services
          </AniLink>
        </div>
        <div className="OtherServices-services">
          {services.map((service) => (
            <AniLink
              key={`${service.shortTitle}-other-service`}
              bg="#F3F3F3"
              className="OtherServices-service"
              cover
              direction="bottom"
              duration={1.5}
              to={`/what-we-do/${service.slug}`}
            >
              <img
                alt={`${service.title} illustration`}
                src={service.otherServicesIllustration.file.url}
              />
              <h5
                className="text-tag"
                dangerouslySetInnerHTML={{
                  __html: service.shortTitle.replace(' ', '<br />')
                }}
              />
            </AniLink>
          ))}
        </div>
        <AniLink className="OtherServices-button Button Button-outline inline-block md:hidden mt-8">
          See All Services
        </AniLink>
      </div>
    </div>
  )
}

export default OtherServices
