// Packages
import React from 'react'

// Styles
import '@modules/case-studies/components/styles/CaseStudyHero.css'

interface Props {
  illustration: React.ReactNode
  bgColor?: string
}

const CaseStudyHero = ({ illustration, bgColor = `bg-mischka` }: Props) => {
  return (
    <div className={`case-study-hero ${bgColor}`}>
      <div className="case-study-hero-wrapper">
        <div className="case-study-hero-illustration">{illustration}</div>
      </div>
    </div>
  )
}

export default CaseStudyHero
