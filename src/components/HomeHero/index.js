// Packages
import React from 'react'
import { Link } from 'gatsby'

// Icons
import Arrow from '../../static/svgs/arrow.inline.svg'

// Styled Components
import HomeHeroContainer from './HomeHeroContainer'

// Components
import MobileBgShapes from './MobileBgShapes'
import TabletBgShapes from './TabletBgShape'
import DtBgShapes from './DtBgShapes'

const HomeHero = () => (
  <HomeHeroContainer>
    <div className="HomeHero__copy">
      <h1>
        Scaling startups <br />
        through <span>user-driven</span> design
      </h1>
      <h2>
        We’re a digital product design studio. We partner with inspiring
        entrepreneurs and growth-minded startups to achieve ambitious business
        goals through design.
      </h2>

      <Link to="/case-studies">
        <span className="copy">See our work</span>
        <Arrow className="Icon" />
      </Link>
    </div>
    <MobileBgShapes className="HomeHero__mobile-bg" />
  </HomeHeroContainer>
)

export default HomeHero
