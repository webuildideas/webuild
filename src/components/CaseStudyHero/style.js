// Packages
import styled from 'styled-components'

export const CaseStudyHero = styled.div`
  position: relative;
  color: white;
  padding-top: 224px;
  z-index: 1;
  & > * {
    position: relative;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -5%;
    display: block;
    width: 110%;
    height: 70%;
    background-image: url(${props => props.backgroundSvg});
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom-left-radius: 90% 25%;
    border-bottom-right-radius: 90% 25%;
    z-index: 0;
  }
`

export const CaseStudyLogo = styled.img`
  max-width: 160px;
  margin-bottom: 16px;
`

export const CaseStudySuccessSummary = styled.h1`
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 124px;
`
