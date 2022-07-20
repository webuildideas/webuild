// Packages
import React from 'react'
// import Img from 'gatsby-image'

// Styles
import '@modules/case-studies/components/styles/CaseStudyContent.css'
// import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface ServiceButton {
  icon: any
  service: string
}

interface Props {
  content: string
  buttons?: ServiceButton[]
  contentClasses?: string
  sectionClasses?: string
}

const CaseStudyContent = ({
  content,
  buttons,
  contentClasses,
  sectionClasses
}: Props) => {
  const flex = buttons?.length ? 'xl:flex xl:justify-center' : ''
  const noMargin = buttons?.length ? 'xl:m-0 xl:pl-14' : ''
  return (
    <div className={`case-study-content relative ${sectionClasses} ${flex}`}>
      {buttons && (
        <div className="px-6 mt-8 md:px-14 xl:p-0 xl:m-0">
          {buttons?.map((button) => {
            const Icon = button.icon
            return (
              <div key={button.service} className="quadpay-service-button">
                <Icon className="quadpay-service-icon" />
                <span className="text-tag">{button.service}</span>
              </div>
            )
          })}
        </div>
      )}
      <div
        className={`case-study-content__wrapper max-w-3xl px-6 mx-auto md:px-14 xl:p-0 ${contentClasses} ${noMargin}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default CaseStudyContent
