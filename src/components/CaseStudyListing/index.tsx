// Packages
import React from 'react'
import CaseStudy from '../CaseStudy'

// Commons
import { TypeCaseStudy } from '../../common/types/CaseStudy'
import * as S from './style'

interface Props {
  caseStudies: TypeCaseStudy[]
}

const CaseStudyListing = ({ caseStudies }: Props) => {
  return (
    <S.CaseStudyListing>
      {caseStudies.map((study: TypeCaseStudy, idx: number) => {
        const animationThreshold = idx === 0 ? 0.25 : 0.8
        // Even # items we want image on right.
        const layout = (idx + 1) % 2 === 0 ? 'left' : 'right'
        return (
          <CaseStudy
            key={study.slug}
            animationThreshold={animationThreshold}
            caseStudy={study}
            layout={layout}
          />
        )
      })}
    </S.CaseStudyListing>
  )
}

export default CaseStudyListing
