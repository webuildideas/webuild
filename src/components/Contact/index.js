// Packages
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

// Styled Components
import { ContactContainer } from './style'

const Contact = () => {
  const [hovered, setHover] = useState(false)
  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)
  const waveSpring = useSpring({
    from: { transform: 'rotate(5deg)' },
    to: hovered
      ? [{ transform: 'rotate(15deg)' }, { transform: 'rotate(-15deg)' }]
      : { transform: 'rotate(0deg)' },
    config: { mass: 5, tension: 220, friction: 5 },
  })
  return (
    <ContactContainer>
      <h5>Let's Do Something Bold</h5>
      <p>Ready to take your product to the next level? Drop us a line.</p>
      <a
        href="mailto:hi@webuild.io"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.span className="wave-emoji" style={waveSpring}>
          👋
        </animated.span>
        <span className="email">HI@WEBUILD.IO</span>
      </a>
    </ContactContainer>
  )
}

export default Contact
