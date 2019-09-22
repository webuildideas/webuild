// Packages
import styled from 'styled-components'

const SiteMaxWidthContainer = styled.div`
  max-width: 53.6rem; // 1072px
  margin: 0 auto;
  padding: ${props => (props.padding ? props.padding : '')};
`

export default SiteMaxWidthContainer
