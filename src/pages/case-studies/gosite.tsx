// Packages
import React from 'react'

// Components
import GoSiteIntro from '@modules/case-studies/gosite/components/GoSiteIntro'
import GoSiteSummary from '@modules/case-studies/gosite/components/GoSiteSummary'
import GoSiteChallengeSolution from '@modules/case-studies/gosite/components/GoSiteChallengeSolution'

// Styles
import '@common/styles/pages/gosite.css'
import GoSiteDesignSystems from '@modules/case-studies/gosite/components/GoSiteDesignSystems'

const GoSite = () => {
  return (
    <div className="gosite">
      <GoSiteIntro />

      <GoSiteSummary />

      <GoSiteChallengeSolution />

      <GoSiteDesignSystems />
    </div>
  )
}

export default GoSite
