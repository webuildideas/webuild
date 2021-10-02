// Packages
import React from 'react'

// Components
import ChallengeSolution from '@modules/case-studies/components/ChallengeSolution'

const Challenge = () => (
  <p className="text-body">
    Small businesses use many different tools and web-apps to get their business
    up and running online, making it difficult to manage and keep track of
    important details.
  </p>
)

const Solution = () => (
  <p className="text-body">
    We created a robust design system to be extended across all GoSite products,
    apps, marketing assets and channels to streamline their rapidly growing
    product suite.
  </p>
)

const GoSiteChallengeSolution = () => {
  return (
    <div className="GoSiteChallengeSolution">
      <ChallengeSolution challenge={<Challenge />} solution={<Solution />} />
    </div>
  )
}

export default GoSiteChallengeSolution
