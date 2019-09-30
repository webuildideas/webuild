// Packages
import React from 'react'
import { Link } from 'gatsby'

// Assets
import Phone from '../../static/images/home-hero-phone.png'

// Icons
import Arrow from '../../static/svgs/arrow.inline.svg'

// Styled Components
import HomeHeroContainer from './HomeHeroContainer'

// Components
import MobileBgShapes from './MobileBgShapes'
import TabletBgShapes from './TabletBgShapes'
import DtBgShapes from './DtBgShapes'

const HomeHero = () => (
  <HomeHeroContainer>
    <div className="HomeHero__content">
      <div>
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

      <img src={Phone} alt="video player" className="HomeHero__phone" />
    </div>
    <MobileBgShapes className="HomeHero__mobile-bg" />
    <TabletBgShapes className="HomeHero__tablet-bg" />
    <DtBgShapes className="HomeHero__dt-bg" />
  </HomeHeroContainer>
)

export default HomeHero
