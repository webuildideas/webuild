// Packages
import styled from 'styled-components'

// Components
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

export const PrimaryLink = styled(AniLink)`
  position: relative;
  display: inline-block;
  font-size: ${(props) => props.theme.f4};
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  padding: ${() => ` ${rhythmUnit(0.5)} ${rhythmUnit(1)}`};
  letter-spacing: 0.05px;
  z-index: 1;
  overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 350ms ease;
    z-index: 0;
    background-color: ${(props) => props.theme.vulcan};
  }
  span.text {
    position: relative;
    z-index: 1;
  }
  span.border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.vulcan};
    z-index: -1;
  }
  color: ${(props) => props.theme.vulcan};
  transition: color ease 250ms;
  &:hover {
    &:after {
      left: 0;
    }
    color: ${(props) => props.theme.snow};
  }
`

export const SecondaryLink = styled(PrimaryLink)`
  border: none;
  color: ${(props) => props.theme.snow};
  span.border {
    background-color: ${(props) => props.theme.vulcan};
  }
  &:after {
    background-color: ${(props) => props.theme.tuna};
  }
`

export const PrimaryButton = styled.a`
  position: relative;
  display: inline-block;
  font-size: ${(props) => props.theme.f4};
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  padding: ${() => ` ${rhythmUnit(0.5)} ${rhythmUnit(1)}`};
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.vulcan};
  transition: background-color ease 250ms;
  overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 350ms ease;
    z-index: 0;
    background-color: ${(props) => props.theme.vulcan};
  }
  span.text {
    position: relative;
    z-index: 1;
  }
  span.border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.vulcan};
    background-color: #fff;
    z-index: 0;
  }
  &:hover {
    color: ${(props) => props.theme.snow};
    &:after {
      left: 0;
    }
  }
`

export const SecondaryButton = styled(PrimaryButton)`
  border: none;
  color: ${(props) => props.theme.snow};
  span.border {
    background-color: ${(props) => props.theme.vulcan};
  }
  &:after {
    background-color: ${(props) => props.theme.tuna};
  }
`

export const PrimaryOutbound = styled(OutboundLink)`
  position: relative;
  display: inline-block;
  font-size: ${(props) => props.theme.f4};
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  padding: ${() => ` ${rhythmUnit(0.5)} ${rhythmUnit(1)}`};
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.vulcan};
  transition: background-color ease 250ms;
  overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 350ms ease;
    z-index: 0;
    background-color: ${(props) => props.theme.vulcan};
  }
  span.text {
    position: relative;
    z-index: 1;
  }
  span.border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.vulcan};
    background-color: #fff;
    z-index: 0;
  }
  &:hover {
    color: ${(props) => props.theme.snow};
    &:after {
      left: 0;
    }
  }
`

export const SecondaryOutbound = styled(PrimaryOutbound)`
  border: none;
  color: ${(props) => props.theme.snow};
  span.border {
    background-color: ${(props) => props.theme.vulcan};
  }
  &:after {
    background-color: ${(props) => props.theme.tuna};
  }
`
