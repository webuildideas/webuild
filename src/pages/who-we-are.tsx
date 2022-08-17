/* eslint-disable jsx-a11y/no-static-element-interactions */
import '@common/styles/pages/who-we-are.css'

// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// Common
import { rhythmUnit } from '@common/utils/typography'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'
import { TypeEmployee } from '@common/types/Employee'
import { TypeService } from '@common/types/Service'
import fadeInUpVariants from '@modules/common/animation/variants/fadeInUp'
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'

// Components
import Meta from '@components/Meta'
import PhotoGrid from '@modules/common/components/PhotoGrid'
import Button from '@modules/common/components/Button'
import OtherServices from '@modules/service/components/OtherServices'
import Footer from '@modules/common/components/Footer'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// SVGs
import Promises from '@static/svgs/who-we-are/promises.inline.svg'
import Details from '@static/svgs/who-we-are/details.inline.svg'
import Initiate from '@static/svgs/who-we-are/initiate.inline.svg'
import Iterate from '@static/svgs/who-we-are/iterate.inline.svg'
import Support from '@static/svgs/who-we-are/support.inline.svg'

interface WhoWeAreQueryResponse {
  contentfulAboutPage: {
    photoGrid: TypeGatsbyImageFluid[]
    meetTheTeam: TypeEmployee[]
  }
  allContentfulService: {
    nodes: TypeService[]
  }
  introGif: {
    publicURL: string
  }
  introPng: {
    publicURL: string
  }
}

interface Props {
  data: WhoWeAreQueryResponse
  location: PageProps['location']
}

const PhotoGridContainer = styled.div`
  padding-top: ${() => rhythmUnit(5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(7)};
  }
`

const WhoWeAre = ({ data, location }: Props) => {
  const { showModal } = useOpportunityFormModal()
  const { photoGrid, meetTheTeam } = data.contentfulAboutPage
  const { nodes: services } = data.allContentfulService

  const initial = { opacity: 0 }
  const animateTo = { opacity: 1 }

  return (
    <>
      <Meta location={location} title="Who We Are" />
      <motion.main animate={animateTo} className="WhoWeAre" initial={initial}>
        <div className="WhoWeAre-intro">
          <motion.h1
            animate="visible"
            className="text-h1 font-black WhoWeAre-title"
            initial="hidden"
            variants={fadeInUpVariants}
          >
            We’re webuild—the design agency that seamlessly becomes a part of
            your team.
          </motion.h1>

          <div className="WhoWeAre-intro-copy">
            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              We're a global team of makers and thinkers. We love what we do. We
              nurture growth and champion possibility.
            </motion.p>

            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              Driven, but laid back. Confident, but humble. Talented, but not
              pretentious. We’re a friendly group of designers, strategists, and
              product managers. And we are all passionate about product design.
              And tacos. (Extra guac!)
            </motion.p>

            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              We’ve worked remotely since before it was cool — and it’s never
              stifled our team spirit. We embrace and celebrate diversity and
              enjoy learning about each other's cultures.
            </motion.p>

            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              And while we love what we do at work, we love our lives away from
              the computer, too. We’re all about that work/life balance.
            </motion.p>
          </div>

          <div className="WhoWeAre-values w-full">
            <h2 className="WhoWeAre-section-title text-h2 text-center">
              <span className="block text-h4 mb-2">Behind the Design</span>
              <span className="font-extrabold">Our Values</span>
            </h2>
            <div className="WhoWeAre-values-inner">
              <div className="WhoWeAre-value promises">
                <Promises />
                <p className="text-body">We keep our promises</p>
              </div>
              <div className="WhoWeAre-value initiate">
                <Initiate />
                <p className="text-body">We initiate "wow"</p>
              </div>
              <div className="WhoWeAre-value iterate">
                <Iterate />
                <p className="text-body">We iterate until it's great</p>
              </div>
              <div className="WhoWeAre-value details">
                <Details />
                <p className="text-body">We obsess over the details</p>
              </div>
              <div className="WhoWeAre-value support">
                <Support />
                <p className="text-body">We support each other</p>
              </div>
            </div>
          </div>
        </div>

        <PhotoGridContainer>
          <PhotoGrid photos={photoGrid} />
        </PhotoGridContainer>

        <div className="WhoWeAre-team" id="who-we-are-team">
          <h2 className="WhoWeAre-section-title text-h2 text-center">
            <span className="block text-h4 mb-2">Who's Who</span>
            <span className="font-extrabold">Meet the Team</span>
          </h2>
          <div className="WhoWeAre-team-inner bg-foundation xl:bg-foundation">
            <div className="WhoWeAre-team-grid">
              {meetTheTeam.map((employee) => {
                return (
                  <AniLink
                    key={`employee-${employee.name}`}
                    className="WhoWeAre-team-member relative"
                    cover
                    direction="right"
                    duration={1.5}
                    to={`/who-we-are/${employee.slug}`}
                  >
                    <div className="WhoWeAre-team-photo">
                      <div>
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
                    <div className="WhoWeAre-team-info text-center">
                      <h3 className="text-h3">{employee.name}</h3>
                      <p className="text-body">{employee.role}</p>
                    </div>
                  </AniLink>
                )
              })}
              <div
                key="you-here"
                className="you-here relative cursor-pointer"
                onClick={showModal}
                // role="button"
              >
                <div className="WhoWeAre-team-photo">
                  <div>
                    <img
                      alt="Introduce yourself illustration"
                      className="WhoWeAre-team-illustration"
                      src={data.introPng.publicURL}
                    />
                    <img
                      alt="Introduce yourself sign"
                      className="WhoWeAre-team-headshot you-here-gif"
                      src={data.introGif.publicURL}
                    />
                  </div>
                </div>
                <div className="WhoWeAre-team-info text-center md:pb-0">
                  <h3 className="text-h3">Join Us!</h3>
                  <p className="text-body text-electricViolet">
                    Introduce yourself
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="WhoWeAre-introduce text-center">
          <h3 className="text-h3 mb-10 md:mb-12">
            We’re always looking for talented, kind, and ready-for-anything
            people to join our remote team.
          </h3>
          <Button onClick={showModal} styleType="solid-purple">
            Introduce Yourself
          </Button>
        </div>
        <OtherServices services={services} title="What We Do" />
        <Footer />
      </motion.main>
    </>
  )
}

export const WHO_WE_ARE_QUERY = graphql`
  query whoWeAreQuery {
    contentfulAboutPage(pageTitle: { eq: "Who We Are" }) {
      photoGrid {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }

      meetTheTeam {
        name
        role
        slug
        illustration {
          file {
            url
          }
        }

        headshot {
          file {
            url
          }
        }
      }
    }
    allContentfulService {
      nodes {
        shortTitle
        slug
        otherServicesIllustration {
          file {
            url
          }
        }
        otherServicesGif {
          file {
            url
          }
        }
      }
    }
    introGif: file(relativePath: { eq: "intro-yourself.gif" }) {
      publicURL
    }
    introPng: file(relativePath: { eq: "you-here.png" }) {
      publicURL
    }
  }
`

export default WhoWeAre
