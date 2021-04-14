// Packages
import React from 'react'
import { PageProps } from 'gatsby'

// Components
import Meta from '@components/Meta'
import ContactForm from '@modules/forms/ContactForm'

interface Props {
  location: PageProps['location']
}

const Contact = ({ location }: Props) => {
  return (
    <>
      <Meta location={location} title="Contact" />
      <ContactForm />
    </>
  )
}

export default Contact
