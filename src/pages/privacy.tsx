// Packages
import React from 'react'
import { graphql } from 'gatsby'

// Components
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import {
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text'

interface Props {
  data: {
    contentfulPrivacyPage: {
      content: RenderRichTextData<never>
    }
  }
  location: {
    href: string
  }
}

const PrivacyPage = ({ data, location }: Props) => {
  return (
    <div>
      <Meta location={location.href} title="Privacy" />
      <main>
        <h1 className="text-h1 mb-8">Privacy Page</h1>
        {renderRichText(data.contentfulPrivacyPage.content)}
      </main>
      <Footer />
    </div>
  )
}

export const PRIVACY_QUERY = graphql`
  query privacyQuery {
    contentfulPrivacyPage(pageTitle: { eq: "Privacy" }) {
      content {
        raw
      }
    }
  }
`

export default PrivacyPage
