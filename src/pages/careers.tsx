import '@common/styles/pages/careers.css'

// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Commons
import { TypeJob } from '@common/types/Job'

// Components
import Footer from '@modules/common/components/Footer'
import Meta from '@components/Meta'
import Button from '@modules/common/components/Button'

interface Props {
  location: PageProps['location']
  data: {
    allContentfulJob: {
      nodes: TypeJob[]
    }
  }
}

const Careers = ({
  data: {
    allContentfulJob: { nodes: jobs }
  },
  location
}: Props) => {
  return (
    <>
      <Meta location={location} title="Careers" />

      <div className="Careers">
        <div className="Careers-hero">
          <h1 className="text-h1 Careers-hero__title">
            Join our global team of makers and thinkers
          </h1>
          <Button
            className="inline-block"
            href="#career-positions"
            styleType="solid-purple"
          >
            See Current Openings
          </Button>
        </div>

        <div className="Careers-cta dribbble">
          <div className="Careers-cta__content">
            <h4 className="text-h4 Careers-cta__title">Like What You See?</h4>
            <h3 className="text-h3 Careers-cta__subtitle">
              Click below to see more of our work
            </h3>
          </div>
        </div>

        <div className="Careers-team">
          <h3 className="text-h3 Careers-team__title">A Global Team</h3>
          <p className="text-h3 Careers-team__description">
            We've worked remotely since before it was cool — and it's never
            stifled our team spirit. We embrace and celebrate diversity and
            enjoy learning about each other's cultures.
          </p>
        </div>

        <div className="Careers-perks">
          <h3 className="text-h2 Careers-perks__title">Perks!</h3>
          <div className="Careers-perks__grid">
            <div className="Careers-perks__item">
              <h4 className="text-h4 Careers-perks__item-title">
                An Apple A Day
              </h4>
              <p className="text-body Careers-perks__item-description">
                We set you up with a company issued MacBook Pro, $200 annual
                home office budget, and a monthly internet stipend.
              </p>
            </div>

            <div className="Careers-perks__item">
              <h4 className="text-h4 Careers-perks__item-title">
                Personal Growth
              </h4>
              <p className="text-body Careers-perks__item-description">
                A $500 annual education contribution for expanding your skills,
                plus access to our ever-growing Audible library.
              </p>
            </div>

            <div className="Careers-perks__item">
              <h4 className="text-h4 Careers-perks__item-title">
                Work Life Balance (But Really)
              </h4>
              <p className="text-body Careers-perks__item-description">
                Competitive vacation, holiday, and sick time, plus a deep
                commitment to shutting down our laptops on evenings and
                weekends.
              </p>
            </div>

            <div className="Careers-perks__item">
              <h4 className="text-h4 Careers-perks__item-title">
                Healthy = Happy
              </h4>
              <p className="text-body Careers-perks__item-description">
                Full Medical coverage with 100% employer contribution and an HSA
                for qualified plans.
              </p>
            </div>

            <div className="Careers-perks__item">
              <h4 className="text-h4 Careers-perks__item-title">
                Future Forward
              </h4>
              <p className="text-body Careers-perks__item-description">
                401K with a 4% employer match. Planning for a family? We also
                offer robust maternity and paternity leave.
              </p>
            </div>

            <div className="Careers-perks__item">
              <h4 className="text-h4 Careers-perks__item-title">
                Tight-Knit Team
              </h4>
              <p className="text-body Careers-perks__item-description">
                We engage in team-building activities, celebrate each other's
                achievements and get together once a year in-person to hang out
                and eat good food.
              </p>
            </div>
          </div>
        </div>

        <div className="Careers-culture">
          <h3 className="text-h3 Careers-culture__title">Our Culture</h3>
          <p className="text-h3">
            We're a friendly group of designers, strategists, producers, and
            product managers. We love what we do. We nurture growth and champion
            possibility. And we are all passionate about product design. And
            tacos. (Extra guac!)
          </p>
        </div>

        <div className="Careers-positions" id="career-positions">
          <h2 className="text-h3 Careers-positions__title">Open Positions</h2>
          <div className="Careers-positions__items">
            {jobs.map((job, idx) => (
              <div key={`job-${idx}`} className="Careers-positions__item">
                <h3 className="text-h3 Careers-positions__item-title">
                  {job.title}
                </h3>
                {job.description ? (
                  <p className="text-body Careers-positions__item-description">
                    {job.description.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="Careers-cta form">
          <h3 className="text-h3 Careers-cta__title">
            We're always looking for talented, kind, and ready-for-anything
            people to join our remote team.
          </h3>
          <p className="text-body Careers-cta__subtitle">
            We're actively invested in diversity and inclusion and focused on
            hiring more women and minorities.
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
}

export const CAREERS_PAGE_QUERY = graphql`
  query CareersPageQuery {
    allContentfulJob(filter: { isOpen: { eq: true } }) {
      nodes {
        applicationLink
        description {
          description
        }
        title
      }
    }
  }
`

export default Careers
