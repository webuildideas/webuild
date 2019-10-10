// Packages
import React from 'react'
import { storiesOf } from '@storybook/react'
// Styled Components
import { withKnobs, text } from '@storybook/addon-knobs'

// Component
import CaseStudy from '.'

// Assets
import listingImg from '../../static/images/stories/case-study-listing.jpg'

storiesOf('Case Study', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const name = text('name', 'Intermix')
    const tagline = text('tagline', 'Powering the shift to the data economy')
    return (
      <div style={{ margin: '16px 16px 0' }}>
        <CaseStudy name={name} tagline={tagline} listingImgSrc={listingImg} />
      </div>
    )
  })
