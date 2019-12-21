// Packages
import React from 'react'

// Components
import Button from '../Button'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'
import SectionHeading from '../Shared/SectionHeading'

const JoinUs = () => (
  <S.JoinUs>
    <SiteMaxWidthContainer>
      <SectionHeading>
        <h1 className="SectionHeading__title">
          Join us and work from anywhere
        </h1>
        <h2 className="SectionHeading__subtitle">
          We’re always looking for inspiring, down to earth, and talented people
          to join our amazing remote team.
        </h2>
      </SectionHeading>
      <S.JoinUsJobs>
        <S.JoinUsJob>
          <h3>Product Designer</h3>
          <p>Remote (US Preferred)</p>
        </S.JoinUsJob>
        <S.JoinUsJob>
          <h3>Frontend Developer</h3>
          <p>Remote (US Preferred)</p>
        </S.JoinUsJob>
        <S.JoinUsJob>
          <h3>Product Manager</h3>
          <p>Remote (US Preferred)</p>
        </S.JoinUsJob>
      </S.JoinUsJobs>
      <Button
        href="https://docs.google.com/forms/d/1C-N35wN-8VwcDeSiUFk41TnPV7k0S_UxhEr6J8MYDAw/edit"
        target="_blank"
        type="secondaryButton"
      >
        ✌️Introduce Yourself
      </Button>
    </SiteMaxWidthContainer>
  </S.JoinUs>
)

export default JoinUs
