import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import Button from '@modules/common/components/Button'

import { TypeEmployee } from '@common/types/Employee'

import '../styles/otherMembers.css'
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'

interface Props {
  peeps: TypeEmployee[]
}

const OtherMembers = ({ peeps }: Props) => {
  const { showModal } = useOpportunityFormModal()
  return (
    <section className="other-members">
      <h3 className="text-h3 font-extrabold mb-6">More of our team</h3>
      <div className="other-members__wrapper">
        {peeps.map((employee) => {
          return (
            <AniLink
              key={`employee-${employee.name}`}
              className="WhoWeAre-team-member"
              cover
              direction="right"
              duration={1.5}
              to={`/who-we-are/${employee.slug}`}
            >
              <div className="WhoWeAre-team-photo">
                <div className="relative">
                  <img
                    alt={`Illustration of ${employee.name}`}
                    className="WhoWeAre-team-illustration"
                    src={employee.illustration.file.url}
                  />

                  <img
                    alt={`${employee.name} Headshot`}
                    className="WhoWeAre-team-headshot"
                    src={employee.headshot.file.url}
                  />
                </div>
              </div>
              <div className="WhoWeAre-team-info">
                <h3 className="text-body font-bold">{employee.name}</h3>
                <p className="text-body">{employee.role}</p>
              </div>
            </AniLink>
          )
        })}
      </div>
      <div className="others-meet">
        <MotionAniLink
          className="inline-block m-auto"
          styleType="solid-purple"
          to="/who-we-are#who-we-are-team"
        >
          Meet all of us
        </MotionAniLink>
      </div>
      <div className="WhoWeAre-introduce text-center md:pt-16">
        <h3 className="text-h3 mb-10 md:mb-12">
          We’re always looking for talented, kind, and ready-for-anything people
          to join our remote team.
        </h3>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          <Button animate={false} onClick={showModal} styleType="solid-purple">
            Introduce Yourself
          </Button>
          <AniLink
            className="Button Button-outline-purple text-button mt-8 md:mt-0 md:ml-8"
            cover
            direction="right"
            duration={1.5}
            to="/what-we-do"
          >
            Learn more about us
          </AniLink>
        </div>
      </div>
    </section>
  )
}

export default OtherMembers
