// Packages
import React from 'react'

// Utils
import { rhythmUnit } from '../../utils/typography'

// Svg
import TeamMapSvg from '../../static/svgs/teamMap.inline.svg'

// Styled Components
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'
import SectionHeading from '../Shared/SectionHeading'

const TeamMap = () => (
  <SiteMaxWidthContainer
    style={{
      paddingTop: `${rhythmUnit(2)}`,
      paddingBottom: `${rhythmUnit(2)}`,
    }}
  >
    <SectionHeading style={{ marginBottom: `${rhythmUnit(3)}` }}>
      <h1 className="SectionHeading__title">
        The world is our conference room
      </h1>
      <h2 className="SectionHeading__subtitle">
        We embrace diversity and learning new things about each other’s
        cultures. Each of us is proactive, strategic and strives for continuous
        improvement.
      </h2>
    </SectionHeading>
    <TeamMapSvg />
  </SiteMaxWidthContainer>
)

export default TeamMap
