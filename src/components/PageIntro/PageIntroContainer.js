// Packages
import styled from 'styled-components'

const PageIntroContainer = styled.div`
  padding: 3.5rem 0;
  text-align: center;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  @media (max-width: 39rem) {
    padding: 3.5rem 1rem;
  }
  h1 {
    font-size: ${props => props.theme.f1};
    color: ${props => props.theme.black};
    text-align: center;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: ${props => props.theme.f5};
    color: ${props => props.theme.grey};
    text-align: center;
    letter-spacing: 0.5px;
    max-width: 39.375rem;
    margin: 0 auto;
    line-height: 1.6;
  }
`

export default PageIntroContainer
