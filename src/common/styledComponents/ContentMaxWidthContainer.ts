// Packages
import styled from 'styled-components'

interface StyleProps {
  padding: number
}

const ContentMaxWidthContainer = styled.div<StyleProps>`
  max-width: 37.5rem; // 750px
  margin: 0 auto;
  padding: ${(props) => (props.padding ? props.padding : '')};
`

export default ContentMaxWidthContainer
