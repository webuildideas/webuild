import { TypeCaseStudy } from '@common/types/CaseStudy'
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// SVGs
import ArrowRight from '@static/svgs/common/arrows/arrow-large-right.inline.svg'

// Styles
import './styles/NextCaseStudies.css'

interface Props {
  caseStudies: TypeCaseStudy[]
}

const NextCaseStudies = ({ caseStudies }: Props) => {
  return caseStudies && caseStudies.length ? (
    <div className="NextCaseStudies">
      {caseStudies.map((study) => (
        <AniLink
          key={study.slug}
          className="NextCaseStudy"
          cover
          direction="top"
          duration={1.25}
          to={`/case-studies/${study.slug}`}
        >
          <div className="NextCaseStudy-content">
            <div className="NextCaseStudy-header ">
              <img
                alt="Company logo"
                className="NextCaseStudy-logo"
                src={study.logo.file.url}
              />
              <p className="text-caption font-extrabold uppercase text-gray-600">
                Case Study
              </p>
            </div>
            <div className="NextCaseStudy-footer">
              <p className="text-body">{study.tagline}</p>
              <ArrowRight className="NextCaseStudy-arrow" />
            </div>
          </div>
        </AniLink>
      ))}
    </div>
  ) : null
}

export default NextCaseStudies
