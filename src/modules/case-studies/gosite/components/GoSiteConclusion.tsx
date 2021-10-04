// Packages
import React from 'react'

import '@modules/case-studies/gosite/components/styles/GoSiteConclusion.css'
import { TypeTestimonial } from '@common/types/Testimonial'
import ServiceTestimonial from '@modules/service/components/ServiceTestimonial'

interface Props {
  testimonial?: TypeTestimonial
}

const GoSiteConclusion = ({ testimonial }: Props) => {
  return (
    <div className="GoSiteConclusion">
      {testimonial ? (
        <div className="GoSiteConclusion-testimonial">
          <ServiceTestimonial testimonial={testimonial} />
        </div>
      ) : null}
      <div className="GoSiteConclusion-list-container">
        <h3 className="text-h3 font-extrabold mb-4">In short, we:</h3>
        <ul className="GoSiteConclusion-list">
          <li className="text-body">
            Overhauled all core assets: Marketing, iOS & Android apps, website,
            enterprise and free-trial versions
          </li>
          <li className="text-body">
            Built a design system from the ground up
          </li>
          <li className="text-body">
            Significantly upgraded the merchant-facing experience & flows
          </li>
          <li className="text-body">
            Helped shape, define, and release new features
          </li>
          <li className="text-body">
            Empowered the GoSite team to scale: increasing the headcount more
            than 6x in 2 years to 250+
          </li>
          <li className="text-body">
            Supported 10x revenue growth over a 24-month period by decreasing
            churn, optimizing features, and powering a robust design system
          </li>
        </ul>
      </div>

      <div className="GoSiteConclusion-outro">
        <p className="text-body mb-4 md:mb-6 lg:mb-8">
          You know you have the potential, but maybe you need a boost. Maybe you
          need a whole rocketship.
        </p>

        <p className="text-body">
          We’re here for all of it. Ready when you are.
        </p>
      </div>
    </div>
  )
}

export default GoSiteConclusion
