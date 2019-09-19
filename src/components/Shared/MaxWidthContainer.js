import styled from 'styled-components'

const MaxWidthContainer = styled.div`
  max-width: 67rem;
  margin: 0 auto;
  padding: ${props => (props.padding ? props.padding : '')};
`

export default MaxWidthContainer
