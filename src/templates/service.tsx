// Package
import React from 'react'
import { graphql } from 'gatsby'
import { TypeService } from '@common/types/Service'

interface Props {
  data: {
    contentfulService: TypeService
  }
  // location: PageProps['location']
}

const Service = ({ data: { contentfulService: service } }: Props) => {
  return (
    <>
      <h1 className="text-h1 mb-4">{service.title}</h1>
      <h2 className="text-h2">{service.subtitle}</h2>
    </>
  )
}

export const SERVICE_PAGE_QUERY = graphql`
  query servicePageQuery($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      title
      subtitle
      tagline
    }
  }
`

export default Service
