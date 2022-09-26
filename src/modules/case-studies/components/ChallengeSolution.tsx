// Packages
import React from 'react'

// SVGs
import ChallengeIcon from '@static/svgs/case-studies/challenge.inline.svg'
import SolutionIcon from '@static/svgs/case-studies/solution.inline.svg'

// Styles
import '@modules/case-studies/components/styles/ChallengeSolution.css'

interface Props {
  challenge: React.ReactNode
  solution: React.ReactNode
  bgColor?: string
}

const ChallengeSolution = ({
  challenge,
  solution,
  bgColor = 'white'
}: Props) => {
  return (
    <div className={`px-6 py-8 md:py-10 lg:py-16 bg-${bgColor}`}>
      <div className="ChallengeSolution-container mt-0">
        <div className="ChallengeSolution-container-inner">
          <div className="ChallengeSolution-challenge">
            <ChallengeIcon className="ChallengeSolution-challenge-icon" />
            <h3 className="text-h3 font-extrabold mb-4">The Challenge</h3>
            {challenge}
          </div>

          <div className="ChallengeSolution-solution">
            <SolutionIcon className="ChallengeSolution-solution-icon" />
            <h3 className="text-h3 font-extrabold mb-4">The Solution</h3>
            {solution}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeSolution
