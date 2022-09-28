// Packages
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ReactPlayer from 'react-player/youtube'

// Styles
import './styles/QuadpayConclusion.css'

const QuadpayConclusion = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { videoCover } = useStaticQuery(graphql`{
  videoCover: file(relativePath: {eq: "case-studies/quadpay/quadpay-video.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`)

  const handlePlay = () => setIsPlaying((playing) => !playing)

  return (
    <div className="QuadpayConclusion">
      <div className="QuadpayConclusion-list-container">
        <h3 className="text-h3 font-extrabold mb-4">In short, we:</h3>
        <ul className="QuadpayConclusion-list">
          <li className="text-body">
            Built a design system from the ground up to facilitate collaboration
            & cohesiveness across multiple products/marketing assets
          </li>
          <li className="text-body">
            Overhauled the existing website with a full redesign
          </li>
          <li className="text-body">
            Significantly upgraded the merchant-facing experience & flows
          </li>
          <li className="text-body">
            Helped shape, define, and release new features
          </li>
          <li className="text-body">
            Pitched and landed huge new retailers as well as large partners And
            so much more
          </li>
        </ul>
      </div>

      <div className="QuadpayConclusion-video-container">
        <div
          className="QuadpayConclusion-video"
          onClick={handlePlay}
          role="button"
        >
          <ReactPlayer
            className="react-player"
            controls={true}
            height="100%"
            light={videoCover.childImageSharp.gatsbyImageData.src}
            playing={isPlaying}
            playsinline={true}
            url="https://www.youtube.com/watch?v=zCQR437QcJo"
            width="100%"
          />
        </div>
      </div>
      <p className="QuadpayConclusion-video-caption text-caption text-gray-600">
        Chrome Extension intro animation.
      </p>

      <div className="QuadpayConclusion-outro">
        <p className="text-body mb-4 md:mb-6 lg:mb-8">
          Growing a business isn’t easy. Just when you’ve gained traction in one
          area of brand building, another challenge sweeps in and makes you
          question everything. Competitors gain footing, or your product isn’t
          speaking to your audience like you know it can. You know you have the
          potential, but you need a boost. Sometimes you need a whole
          rocketship.
        </p>

        <p className="text-body">
          Getting help from someone whose expertise can leverage your own can
          make all the difference.
        </p>
      </div>
    </div>
  );
}

export default QuadpayConclusion
