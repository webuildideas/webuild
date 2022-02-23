import '@common/styles/pages/careers.css'

// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'

// Commons
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'
import { TypeSEO } from '@common/types/SEO'
import { TypeJob } from '@common/types/Job'
import { TypeTestimonial } from '@common/types/Testimonial'
import {
  TypeGatsbyChildImageSharpFluid,
  TypeGatsbyChildrenImageSharpFluid
} from '@common/types/GatsbyImage'

// Components
import Footer from '@modules/common/components/Footer'
import Meta from '@components/Meta'
import Button from '@modules/common/components/Button'
import TeamTestimonialSlider from '@modules/common/components/TeamTestimonialSlider'

// SVGs
import PerkComputer from '@static/svgs/careers/perks-computer.inline.svg'
import PerkFuture from '@static/svgs/careers/perks-future-forward.inline.svg'
import PerkHappyHealthy from '@static/svgs/careers/perks-happy-healthy.inline.svg'
import PerkPersonalGrowth from '@static/svgs/careers/perks-personal-growth.inline.svg'
import PerkTeam from '@static/svgs/careers/perks-team.inline.svg'
import PerkWorkLife from '@static/svgs/careers/perks-work-life.inline.svg'
import DribbbleCtaBg from '@static/svgs/careers/cta-dribbble-mobile.inline.svg'
import DribbbleCtaMd from '@static/svgs/careers/cta-dribbble-md.inline.svg'
import DribbbleCtaLg from '@static/svgs/careers/cta-dribbble-lg.inline.svg'
import DribbbleCtaXl from '@static/svgs/careers/cta-dribbble-xl.inline.svg'
import TeamIllustration from '@static/svgs/careers/team-illustration.inline.svg'
import TeamWave from '@static/svgs/careers/team-wave.inline.svg'
import CultureComputer from '@static/svgs/careers/culture-illustration-computers.inline.svg'
import CultureBubbles from '@static/svgs/careers/culture-illustration-bubbles.inline.svg'
import Dribbble from '@static/svgs/common/social/dribbble.inline.svg'
import JoinTeamBgMobile from '@static/svgs/careers/join-team-bg-mobile.inline.svg'
import JoinTeamBgMd from '@static/svgs/careers/join-team-bg-md.inline.svg'
import JoinTeamBgLg from '@static/svgs/careers/join-team-bg-lg.inline.svg'
import JoinTeamBgXl from '@static/svgs/careers/join-team-bg-xl.inline.svg'

interface Props {
  location: PageProps['location']
  data: {
    allContentfulJob: {
      nodes: TypeJob[]
    }
    teamTestimonials: {
      nodes: TypeTestimonial[]
    }
    heroImages: {
      nodes: TypeGatsbyChildrenImageSharpFluid[]
    }
    teamLg: TypeGatsbyChildImageSharpFluid
    teamSm: TypeGatsbyChildImageSharpFluid
    cultureLg: TypeGatsbyChildImageSharpFluid
    cultureSm: TypeGatsbyChildImageSharpFluid
    seo: TypeSEO
  }
}

const Careers = ({
  data: {
    allContentfulJob: { nodes: jobs },
    heroImages: { nodes: heroImgs },
    teamTestimonials: { nodes: testimonials },
    teamLg,
    teamSm,
    cultureLg,
    cultureSm,
    seo
  },
  location
}: Props) => {
  const [heroMobile, heroMd, heroLg, heroXl, hero2xl] = heroImgs

  const heroImgSrcs = [
    heroMobile.childrenImageSharp['0'].fluid,
    {
      ...hero2xl.childrenImageSharp['0'].fluid,
      media: `(min-width: 2560px)`
    },
    {
      ...heroXl.childrenImageSharp['0'].fluid,
      media: `(min-width: 1280px)`
    },
    {
      ...heroLg.childrenImageSharp['0'].fluid,
      media: `(min-width: 1024px)`
    },
    {
      ...heroMd.childrenImageSharp['0'].fluid,
      media: `(min-width: 768px)`
    }
  ]

  const { showModal } = useOpportunityFormModal()
  return (
    <>
      <Meta
        description={seo?.seoDescription?.seoDescription}
        location={location}
        shareImage={seo.seoShareImage?.file?.url}
        title={seo.seoTitle}
      />

      <div className="Careers overflow-x-hidden">
        <div className="Careers-hero">
          <div className="Careers-hero__content">
            <h1 className="text-h1 Careers-hero__title">
              Join our global team of makers and thinkers
            </h1>
            <Button
              className="Careers-hero__button"
              href="#career-positions"
              styleType="solid-purple"
            >
              See Current Openings
            </Button>
          </div>
          <Img
            className="Careers-hero__image"
            durationFadeIn={150}
            fadeIn
            fluid={heroImgSrcs}
          />
        </div>

        <div className="Careers-cta dribbble">
          <DribbbleCtaBg className="Careers-cta__bg mobile" />
          <DribbbleCtaMd className="Careers-cta__bg md" />
          <DribbbleCtaLg className="Careers-cta__bg lg" />
          <DribbbleCtaXl className="Careers-cta__bg xl" />
          <div className="Careers-cta__content">
            <h4 className="text-h4 Careers-cta__title">Like What You See?</h4>
            <h3 className="text-h3 Careers-cta__subtitle">
              Click below to see more of our work
            </h3>
            <Button className="Careers-cta__button" styleType="solid-salmon">
              <Dribbble className="Careers-cta__button-icon" />
              <span>Dribbble</span>
            </Button>
          </div>
        </div>

        <div className="Careers-team">
          <div className="Careers-team__content">
            <h3 className="text-h3 Careers-team__title">A Global Team</h3>
            <p className="text-h3 Careers-team__description">
              We've worked remotely since before it was cool — and it's never
              stifled our team spirit. We embrace and celebrate diversity and
              enjoy learning about each other's cultures.
            </p>
          </div>
          <Img
            className="Careers-team__image-lg"
            durationFadeIn={150}
            fadeIn
            fluid={teamLg.childImageSharp.fluid}
          />
          <Img
            className="Careers-team__image-sm"
            durationFadeIn={150}
            fadeIn
            fluid={teamSm.childImageSharp.fluid}
          />
          <TeamIllustration className="Careers-team__illustration" />
          <TeamWave className="Careers-team__wave" />
        </div>

        <div className="Careers-perks">
          <h3 className="text-h2 Careers-perks__title">Perks!</h3>
          <div className="Careers-perks__grid">
            <div className="Careers-perks__item">
              <PerkComputer className="Careers-perks__item-icon" />
              <h4 className="text-h4 Careers-perks__item-title">
                An Apple A Day
              </h4>
              <p className="text-body Careers-perks__item-description">
                We set you up with a company issued MacBook Pro, $200 annual
                home office budget, and a monthly internet stipend.
              </p>
            </div>

            <div className="Careers-perks__item">
              <PerkPersonalGrowth className="Careers-perks__item-icon" />
              <h4 className="text-h4 Careers-perks__item-title">
                Personal Growth
              </h4>
              <p className="text-body Careers-perks__item-description">
                A $500 annual education contribution for expanding your skills,
                plus access to our ever-growing Audible library.
              </p>
            </div>

            <div className="Careers-perks__item">
              <PerkWorkLife className="Careers-perks__item-icon" />
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
              <PerkHappyHealthy className="Careers-perks__item-icon" />
              <h4 className="text-h4 Careers-perks__item-title">
                Healthy = Happy
              </h4>
              <p className="text-body Careers-perks__item-description">
                Full Medical coverage with 100% employer contribution and an HSA
                for qualified plans.
              </p>
            </div>

            <div className="Careers-perks__item">
              <PerkFuture className="Careers-perks__item-icon" />
              <h4 className="text-h4 Careers-perks__item-title">
                Future Forward
              </h4>
              <p className="text-body Careers-perks__item-description">
                401K with a 4% employer match. Planning for a family? We also
                offer robust maternity and paternity leave.
              </p>
            </div>

            <div className="Careers-perks__item">
              <PerkTeam className="Careers-perks__item-icon" />
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
          <div className="Careers-culture__content">
            <h3 className="text-h3 Careers-culture__title">Our Culture</h3>
            <p className="text-h3 Careers-culture__description">
              We're a friendly group of designers, strategists, producers, and
              product managers. We love what we do. We nurture growth and
              champion possibility. And we are all passionate about product
              design. And tacos. (Extra guac!)
            </p>
          </div>

          <Img
            className="Careers-culture__image-lg"
            durationFadeIn={150}
            fadeIn
            fluid={cultureLg.childImageSharp.fluid}
          />
          <Img
            className="Careers-culture__image-sm"
            durationFadeIn={150}
            fadeIn
            fluid={cultureSm.childImageSharp.fluid}
          />

          <CultureComputer className="Careers-culture__computers" />
          <CultureBubbles className="Careers-culture__bubbles" />
        </div>

        <div className="Careers-testimonials">
          <TeamTestimonialSlider testimonials={testimonials} />
        </div>

        <div className="Careers-positions" id="career-positions">
          <h2 className="text-h1 Careers-positions__title">Open Positions</h2>
          <div className="Careers-positions__items">
            {jobs.map((job, idx) => (
              <div key={`job-${idx}`} className="Careers-positions__item">
                {job.illustration ? (
                  <img
                    alt={`${job.title} illustration`}
                    className="Careers-positions__item-illustration"
                    src={job.illustration.file.url}
                  />
                ) : null}
                <div className="Careers-positions__item-content">
                  <h3 className="text-h3 Careers-positions__item-title">
                    {job.title}
                  </h3>
                  {job.description ? (
                    <p className="text-body Careers-positions__item-description">
                      {job.description.description}
                    </p>
                  ) : null}

                  <Button
                    className="Careers-positions__item-button"
                    href={job.applicationLink}
                    styleType="outline-purple"
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Careers-cta form">
          <JoinTeamBgMobile className="Careers-cta__bg mobile" />
          <JoinTeamBgMd className="Careers-cta__bg md" />
          <JoinTeamBgLg className="Careers-cta__bg lg" />
          <JoinTeamBgXl className="Careers-cta__bg xl" />
          <div className="Careers-cta__wrapper">
            <h3 className="text-h3 Careers-cta__title">
              We're always looking for talented, kind, and{' '}
              <span className="whitespace-nowrap">ready-for-anything</span>
              people to join our remote team.
            </h3>
            <p className="text-body Careers-cta__subtitle">
              We're actively invested in diversity and inclusion and focused on
              hiring more women and minorities.
            </p>
            <Button
              className="Careers-cta__button"
              onClick={showModal}
              styleType="solid-salmon"
            >
              Introduce Yourself
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export const CAREERS_PAGE_QUERY = graphql`
  query CareersPageQuery {
    seo: contentfulSeo(title: { eq: "Careers Page" }) {
      seoTitle
      seoDescription {
        seoDescription
      }
      seoShareImage {
        file {
          url
        }
      }
    }

    allContentfulJob(filter: { isOpen: { eq: true } }) {
      nodes {
        applicationLink
        description {
          description
        }
        title
        illustration {
          file {
            url
          }
        }
      }
    }

    teamTestimonials: allContentfulTestimonial(
      filter: {
        name: { in: ["Mackenzie Almquist-Murray", "Abby Milan", "Norton King"] }
      }
    ) {
      nodes {
        name
        role
        quote {
          raw
        }
        featuredHeadshot {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }

    heroImages: allFile(
      filter: {
        relativePath: {
          in: [
            "careers/careers-hero-mobile.png"
            "careers/careers-hero-md.png"
            "careers/careers-hero-lg.png"
            "careers/careers-hero-xl.png"
            "careers/careers-hero-2xl.png"
          ]
        }
      }
    ) {
      nodes {
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }

    teamLg: file(relativePath: { eq: "careers/careers-team-lg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    teamSm: file(relativePath: { eq: "careers/careers-team-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    cultureSm: file(relativePath: { eq: "careers/culture-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    cultureLg: file(relativePath: { eq: "careers/culture-lg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Careers
