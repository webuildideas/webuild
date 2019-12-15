// Packages
import React from 'react'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Icons
import Investigate from '../../static/svgs/investigate.inline.svg'
import Ideate from '../../static/svgs/ideate.inline.svg'
import Iterate from '../../static/svgs/iterate.inline.svg'

const DesignPartner = () => (
  <S.DesignPartner>
    <SiteMaxWidthContainer>
      <div className="DesignPartner__intro">
        <h1>The only design partner you’ll ever need.</h1>
        <p>
          We’ll handle all things design so you can focus on what you do best.
          Think of us as an integrated part of your team — we’ll help you
          discover opportunities and combine strategy with tactical product
          design to deliver results.
        </p>
      </div>
      <S.DesignPartnerGrid>
        <div>
          <Investigate />
          <h3>Investigate</h3>
          <p>
            We don’t jump into design and try to dazzle you with cool concepts.
            We start by understanding your goals, your market, your users and
            what’s next for your business.
          </p>
        </div>
        <div>
          <Ideate />
          <h3>Ideate</h3>
          <p>
            Every design decision starts with the user in mind. Whether you need
            design for your new app or need strategic direction, our talented
            team of UX/UI product designers will help you level up.
          </p>
        </div>
        <div>
          <Iterate />
          <h3>Iterate</h3>
          <p>
            No design ends with a deliverable. We constantly learn and optimize
            our designs, leveraging analytics to surface user behavior while
            running A/B tests to drive performance.
          </p>
        </div>
      </S.DesignPartnerGrid>
    </SiteMaxWidthContainer>
  </S.DesignPartner>
)

export default DesignPartner
