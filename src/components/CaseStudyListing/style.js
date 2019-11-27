// Packages
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// utils
import { rhythmUnit } from '../../utils/typography'

export const CaseStudyListingContainer = styled(props => <Link {...props} />)`
  display: block;
  width: 100%;
  max-width: 26.75rem;
  text-align: center;

  .CaseStudy__img {
    margin-bottom: ${() => rhythmUnit(1)};
  }

  .CaseStudy__name {
    font-size: ${props => props.theme.f3};
    font-weight: 800;
    margin-bottom: ${() => rhythmUnit(0.5)};
  }

  .CaseStudy__tagline {
    color: ${props => props.theme.grey};
  }
`
