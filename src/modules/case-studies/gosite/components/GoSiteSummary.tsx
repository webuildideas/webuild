// Packages
import React from 'react'

// Svgs
import Growth from '@static/svgs/case-studies/gosite/metrics-growth.inline.svg'
import Properties from '@static/svgs/case-studies/gosite/metrics-properties.inline.svg'
import Team from '@static/svgs/case-studies/gosite/metrics-team.inline.svg'

// Styles
import '@modules/case-studies/gosite/components/styles/GoSiteSummary.css'

interface Metric {
  title: string
  subtitle: string
  description: string
  icon: () => React.ReactElement
}

const metrics: Metric[] = [
  {
    title: '10x',
    subtitle: 'Revenue Growth',
    description: 'Supported 10x revenue growth over 12 months.',
    icon: () => <Growth />
  },
  {
    title: '6x',
    subtitle: 'Team Growth',
    description:
      'Enabled GoSite team to scale from 40 to 250 talented employees.',
    icon: () => <Team />
  },
  {
    title: '5+',
    subtitle: 'Products Overhauled',
    description: 'iOS & Android, Enterprise Marketing, and Free-Trial',
    icon: () => <Properties />
  }
]

const GoSiteSummary = () => {
  return (
    <div className="GoSiteSummary">
      <div className="GoSiteSummary-content">
        <h3 className="text-h2 font-extrabold mb-4">
          Long live the small business owner.
        </h3>
        <p className="text-body mb-4 md:mb-6 lg:mb-8">
          They’re the first ones up in the morning and the last to go to bed.
          They work tirelessly to build their business from the ground up. And
          they need all the help they can get.
        </p>

        <p className="text-body">
          Enter: GoSite. An all-in-one platform to help small businesses get
          more done with fewer hurdles. With GoSite, service-based small
          businesses can seamlessly provide a platform for their customers to
          find, book, and pay for appointments online.
        </p>
      </div>
      <div className="GoSiteSummary-metrics grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="GoSiteSummary-metric">
            <div className="GoSiteSummary-metric-icon">{metric.icon()}</div>
            <div className="GoSiteSummary-metric-content ml-4 md:ml-0">
              <h3 className="text-h3 font-extrabold mb-2">{metric.title}</h3>
              <h4 className="text-h4 mb-1">{metric.subtitle}</h4>
              <p className="text-body">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoSiteSummary
