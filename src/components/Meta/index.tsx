import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// Commons
import { TypeContentfulAsset } from '../../common/types/Contentful'
import { useTrackPageView } from '../../common/hooks/useTrackPageView'

interface Props extends HelmetProps {
  description?: string
  title?: string
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
  title
}: Props) => {
  useTrackPageView()
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
      name: `twitter:card`,
      content: `summary_large_image`
    },
    {
      name: `twitter:site`,
      content: `@wearewebuild`
    },
    {
      name: `twitter:title`,
      content: contentfulSeo.seoTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    },
    {
      name: `twitter:image`,
      content: contentfulSeo.seoShareImage.file.url
    }
  ]
  return (
    <Helmet
      bodyAttributes={bodyAttributes}
      htmlAttributes={htmlAttributes}
      meta={metaProperties}
      title={metaTitle}
      titleTemplate={`${metaTitle}`}
    >
      <script
        src={`https://insight-engine.newfangled.com/api/v1/${process.env.GATSBY_NEWFANGLED_KEY}/beacon`}
      />
    </Helmet>
  )
}

export default Meta
