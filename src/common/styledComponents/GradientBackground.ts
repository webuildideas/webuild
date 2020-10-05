// Packages
import styled from 'styled-components'

interface StyleProps {
  gradient: string
}

const GradientBackground = styled.div<StyleProps>`
  background: ${(props) => props.gradient};
`

export default GradientBackground
