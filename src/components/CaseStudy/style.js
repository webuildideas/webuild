// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

export const CaseStudy = styled.article`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    flex-wrap: nowrap;
    align-items: center;
  }

  .CaseStudy__logo {
    margin-bottom: ${() => rhythmUnit(0.75)};
    max-width: 120px;
    @media (min-width: 768px) {
      max-width: 140px;
    }
  }

  .CaseStudy__img {
    position: relative;
    display: block;
    margin-bottom: ${props => (props.mobileTextFirst ? 0 : rhythmUnit(1))};
    width: 100%;
    max-width: 500px;
    order: ${props => (props.mobileTextFirst ? 2 : 1)};
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 700px) {
      max-width: 650px;
    }
    @media (min-width: 900px) {
      min-width: 400px;
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      left: ${props => (props.layout === 'left' ? '-100px' : '')};
      right: ${props => (props.layout === 'right' ? '-100px' : '')};
      order: ${props => (props.layout === 'left' ? 1 : 2)};
    }
  }
  .CaseStudy__content {
    order: ${props => (props.mobileTextFirst ? 1 : 2)};
    margin-bottom: ${props => (props.mobileTextFirst ? rhythmUnit(1) : 0)};
    @media (min-width: 900px) {
      order: ${props => (props.layout === 'left' ? 2 : 1)};
      min-width: 440px;
      max-width: 500px;
    }
  }
  .CaseStudy__tagline {
    line-height: 1.2;
    font-weight: 900;
    margin-bottom: ${() => rhythmUnit(0.5)};
    font-size: ${props => props.theme.f2};

    @media (min-width: 768px) {
      font-size: ${props => props.theme.f1};
    }
  }
  .CaseStudy__summary {
    font-size: ${props => props.theme.f3};
    line-height: 1.6;
    padding-right: ${() => rhythmUnit(2)};

    margin-bottom: ${() => rhythmUnit(1)};
  }
`
