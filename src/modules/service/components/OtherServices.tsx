/* eslint-disable react/no-danger */
// Packages
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { kebabCase } from 'lodash'

// Common
import { TypeService } from '@common/types/Service'

// Styles
import './styles/OtherServices.css'

interface Props {
  services: TypeService[]
  showButton?: boolean
  title?: string
  isChampagnePinkBg?: boolean
  className?: string
}

const OtherServices = ({
  services,
  title = 'Other Services',
  showButton = true,
  isChampagnePinkBg = false,
  className
}: Props) => {
  const numberOfServices = services.length
  return (
    <div className={`OtherServices ${bgColor} ${className}`}>
      <div className="OtherServices-inner">
        <div className="OtherServices-header">
          <h3 className="text-h3 font-extrabold text-center">{title}</h3>
          {showButton ? (
            <AniLink
              className="OtherServices-button Button Button-outline hidden md:inline-block"
              to="/what-we-do/"
            >
              See All Services
            </AniLink>
          ) : null}
        </div>
        <div
          className="OtherServices-services"
          data-services={numberOfServices}
        >
          {services.map((service) => (
            <AniLink
              key={`${service.shortTitle}-other-service`}
              bg="#F3F3F3"
              className="OtherServices-service"
              cover
              direction="bottom"
              duration={1.5}
              to={`/what-we-do/${service.slug}/`}
            >
              <div
                className={`OtherServices-service-illustrations ${kebabCase(
                  service.shortTitle
                )}-illustrations`}
              >
                <img
                  alt={`${service.title} illustration`}
                  className={`OtherServices-service-illustration ${kebabCase(
                    service.shortTitle
                  )}-other-service`}
                  src={service.otherServicesIllustration.file.url}
                />
                {!isChampagnePinkBg && service.otherServicesGif?.file?.url ? (
                  <img
                    alt={`${service.title} illustration`}
                    className="OtherServices-service-animated-gif"
                    src={service.otherServicesGif.file.url}
                  />
                ) : null}
                {isChampagnePinkBg &&
                service.otherServicesGifChampagnePinkBg?.file?.url ? (
                  <img
                    alt={`${service.title} illustration`}
                    className="OtherServices-service-animated-gif"
                    src={service.otherServicesGifChampagnePinkBg.file.url}
                  />
                ) : null}
              </div>
              <h5
                className="text-tag"
                dangerouslySetInnerHTML={{
                  __html: service.shortTitle.replace(' ', '<br />')
                }}
              />
            </AniLink>
          ))}
        </div>
        {showButton ? (
          <AniLink
            className="OtherServices-button Button Button-outline inline-block md:hidden mt-8"
            to="/what-we-do/"
          >
            See All Services
          </AniLink>
        ) : null}
      </div>
    </div>
  )
}

export default OtherServices
