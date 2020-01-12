import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Meta = ({ description, lang, meta, title }) => {
  const { contentfulSeo } = useStaticQuery(
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

  const metaTitle = title ? `${title} | webuild` : 'webuild'
  const metaDescription =
    description || contentfulSeo.seoDescription.seoDescription
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: contentfulSeo.seoTitle,
        },
        {
          property: `og:image`,
          content: contentfulSeo.seoShareImage.file.url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   // content: site.siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: contentfulSeo.seoTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      title={metaTitle}
      titleTemplate={`${metaTitle}`}
    />
  )
}

Meta.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Meta.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Meta
