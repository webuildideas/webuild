// Packages
import PropTypes from 'prop-types'

// Styled Components
import Heading from './Heading'
import Blurb from './Blurb'

const PageIntro = ({ heading, blurb }) => (
  <>
    <Heading>{heading}</Heading>
    <Blurb>{blurb}</Blurb>
  </>
)

PageIntro.propTypes = {
  heading: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
}

export default PageIntro
