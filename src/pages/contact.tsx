// Packages
import React from 'react'
import { PageProps } from 'gatsby'

// Components
import Meta from '@components/Meta'
import ContactForm from '@modules/forms/ContactForm'
import OpportunityForm from '@modules/forms/OpportunityForm'

interface Props {
  location: PageProps['location']
}

const Contact = ({ location }: Props) => {
  return (
    <>
      <Meta location={location} title="Contact" />
      <ContactForm />

      <div className="mt-30">
        <OpportunityForm location={location.href} />
      </div>
    </>
  )
}

export default Contact
