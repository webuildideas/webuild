// Packages
import React from 'react'
import { PageProps } from 'gatsby'

// Components
import Meta from '@components/Meta'
import ContactForm from '@modules/forms/ContactForm'
import OpportunityFormModal from '@modules/forms/components/OpportunityFormModal'

interface Props {
  location: PageProps['location']
}

const Contact = ({ location }: Props) => {
  return (
    <>
      <Meta location={location} title="Contact" />
      <ContactForm />

      <div className="mt-30">
        <OpportunityFormModal
          location={location.href}
          onClose={() => console.log('CLOSING')}
        />
      </div>
    </>
  )
}

export default Contact
