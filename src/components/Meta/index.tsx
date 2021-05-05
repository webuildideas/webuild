// Packages
import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { useStaticQuery, graphql, PageProps } from 'gatsby'

// Common
import useTrackPageView from '@common/hooks/useTrackPageView'
import { TypeContentfulAsset } from '@common/types/Contentful'

interface Props extends HelmetProps {
  description?: string
  title?: string
  location: PageProps['location']
  shareImage?: string
  shareTitle?: string
}

interface MetaQueryResponse {
  contentfulSeo: {
    seoTitle: string
    seoDescription: {
      seoDescription: string
    }
    seoShareImage: TypeContentfulAsset
  }
}

const Meta = ({
  bodyAttributes,
  htmlAttributes,
  description,
  title,
  shareImage,
  shareTitle,
  location
}: Props) => {
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

  const socialTitle = shareTitle || contentfulSeo.seoTitle
  const socialImage =
    `https:${shareImage}` || contentfulSeo.seoShareImage.file.url
  const metaDescription =
    description || contentfulSeo.seoDescription.seoDescription

  const metaProperties = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: socialTitle
    },
    {
      property: `og:image`,
      content: socialImage
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
      name: `twitter:card`,
      content: `summary_large_image`
    },
    {
      name: `twitter:site`,
      content: `@wearewebuild`
    },
    {
      name: `twitter:title`,
      content: socialTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    },
    {
      name: `twitter:image`,
      content: socialImage
    }
  ]

  useTrackPageView(location?.state === null, location?.href, metaTitle)

  return (
    <Helmet
      bodyAttributes={bodyAttributes}
      htmlAttributes={htmlAttributes}
      meta={metaProperties}
      title={metaTitle}
      titleTemplate={`${metaTitle}`}
    />
  )
}

export default Meta
