// Packages
import React from 'react'

// Components
import GoSiteIntro from '@modules/case-studies/gosite/components/GoSiteIntro'
import GoSiteSummary from '@modules/case-studies/gosite/components/GoSiteSummary'
import GoSiteChallengeSolution from '@modules/case-studies/gosite/components/GoSiteChallengeSolution'

// Styles
import '@common/styles/pages/gosite.css'

const GoSite = () => {
  return (
    <div className="gosite">
      <GoSiteIntro />

      <GoSiteSummary />

      <GoSiteChallengeSolution />
    </div>
  )
}

export default GoSite
