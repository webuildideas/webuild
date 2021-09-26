// Packages
import React from 'react'

// Components
import GoSiteIntro from '@modules/case-studies/gosite/components/GoSiteIntro'

// Styles
import '@common/styles/pages/gosite.css'
import GoSiteSummary from '@modules/case-studies/gosite/components/GoSiteSummary'

const GoSite = () => {
  return (
    <div className="gosite">
      <GoSiteIntro />

      <GoSiteSummary />
    </div>
  )
}

export default GoSite
