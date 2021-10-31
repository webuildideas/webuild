// Packages
import Button from '@modules/common/components/Button'
import BookACallForm from '@modules/forms/BookACallForm'
import React from 'react'

// Svgs
import HeroIllustration from '@static/svgs/landing-pages/fintech/fintech-hero.inline.svg'

// styles
import '@common/styles/pages/fintech.css'

interface Props {
  location: string
}

const Fintech = ({ location }: Props) => {
  return (
    <main className="Fintech">
      <div className="Fintech-hero">
        <div className="Fintech-hero-illustration-container">
          <HeroIllustration className="Fintech-hero-illustration" />
        </div>
        <div className="Fintech-hero-inner">
          <h1 className="Fintech-title text-h1">
            Boost your fintech startup with thoughtful & informed design.
          </h1>
          <BookACallForm location={location} />
        </div>
      </div>

      <div className="Fintech-call-cta">
        <h3 className="text-h3">
          We combine our deep expertise in product design and strategy to
          accelerate business growth for fast-growing Fintech startups.
        </h3>
        <Button>Book a call</Button>
      </div>

      <div className="Fintech-latest-work">
        <h2 className="text-h2">Our Latest Work in Fintech</h2>
      </div>

      <div className="Fintech-works">
        <div className="Fintech-work">
          <h3 className="text-h3 font-extrabold">Expand Resources</h3>
          <p className="text-body">
            We help you solve your resourcing challenges in a fraction of the
            time at a reasonable cost. We plug in and get to work immediately.
          </p>
        </div>

        <div className="Fintech-work">
          <h3 className="text-h3 font-extrabold">Increase Velocity</h3>
          <p className="text-body">
            We work fast, iterate often, and gather informed feedback along the
            way to deliver effective solutions.
          </p>
        </div>

        <div className="Fintech-work">
          <h3 className="text-h3 font-extrabold">Experience Reliability</h3>
          <p className="text-body">
            We have deep expertise in our field, leveraging a ton of Fintech
            experience with product. We deliver results with minimal oversight.
          </p>
        </div>

        <div className="Fintech-work">
          <h3 className="text-h3 font-extrabold">Dream Big</h3>
          <p className="text-body">
            We’re strategically minded and hyper-focused on helping you get your
            business to the next level.
          </p>
        </div>
      </div>

      <div className="Fintech-testimonials">
        <h2 className="text-h2">Testimonials</h2>
      </div>

      <div className="Fintech-services">
        <h2>What we do ( very ) well</h2>
      </div>

      <div className="Fintech-footer">
        <h3 className="text-h3 font-extrabold">
          Let's do something <span className="text-electricViolet">bold</span>{' '}
          together!
        </h3>
        <Button>Let's Meet</Button>
      </div>
    </main>
  )
}

export default Fintech
