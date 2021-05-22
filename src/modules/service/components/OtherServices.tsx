import React from 'react'
import { TypeService } from '@common/types/Service'
import Button from '@modules/common/components/Button'

interface Props {
  services: TypeService[]
}

const OtherServices = ({ services }: Props) => {
  return (
    <div>
      <div>
        <h3 className="text-h3 font-extrabold">Other Services</h3>
        <Button styleType="outline">See All Services</Button>
      </div>
      {services.map((service) => (
        <div key={`${service.shortTitle}-other-service`}>
          <img
            alt={`${service.title} illustration`}
            src={service.otherServicesIllustration.file.url}
          />
          <h5 className="text-tag">{service.shortTitle}</h5>
        </div>
      ))}
    </div>
  )
}

export default OtherServices
