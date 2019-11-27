// Packages
import React from 'react'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const WhatWeDo = () => (
  <>
    <Meta title="What We Do" />
    <PageIntro
      heading="Not your average agency"
      blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
    />
    <Contact />
    <Footer />
  </>
)

export default WhatWeDo
