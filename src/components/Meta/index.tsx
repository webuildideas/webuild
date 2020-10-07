import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImageFile } from '../../common/types/GatsbyImage'

interface Props {
  description?: string
  lang?: string
  title: string
}

interface MetaQueryResponse {
  contentfulSeo: {
    seoTitle: string
    seoDescription: {
      seoDescription: string
    }
    seoShareImage: GatsbyImageFile
  }
}

const Meta = ({ description, lang = 'en', title }: Props) => {
  const { contentfulSeo } = useStaticQuery<MetaQueryResponse>(
    graphql`
      query SeoQuery {
        contentfulSeo(title: { eq: "Site SEO Settings" }) {
          seoTitle
          seoDescription {
            seoDescription
          }
          seoShareImage {
            file {
              url
            }
          }
        }
      }
    `
  )

  const metaTitle =
    title === 'Home'
      ? 'webuild - product design for startups'
      : `${title} | webuild - product design for startups`

  const metaDescription =
    description || contentfulSeo.seoDescription.seoDescription

  const metaProperties = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: contentfulSeo.seoTitle
    },
    {
      property: `og:image`,
      content: contentfulSeo.seoShareImage.file.url
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:title`,
      content: contentfulSeo.seoTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ]

  const htmlAttributes = { lang }

  return (
    <Helmet
      htmlAttributes={htmlAttributes}
      meta={metaProperties}
      title={metaTitle}
      titleTemplate={`${metaTitle}`}
    />
  )
}

export default Meta
