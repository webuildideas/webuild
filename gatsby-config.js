/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({ files: true })
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `webuild`,
    description: `We're webuild: a digital design and product studio. We design stunning user experiences, optimized for conversions and impact.`,
    author: `Vincent Brown`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.GATSBY_CONTENTFUL_ENVIRONMENT,
        forceFullSync: true
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Overpass`,
            variants: [`400`, `800`, `900`]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-60707530-1',
        head: true,
        pageTransitionDelay: 250
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `webuild`,
        short_name: `webuild`,
        start_url: `/`,
        background_color: `#0E0E1B`,
        theme_color: `#0E0E1B`,
        display: `minimal-ui`,
        icon: `src/static/images/favicons/master-310x310.png`,
        icons: [
          {
            src: `/favicons/android-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `/favicons/android-icon-36x36.png`,
            sizes: `36x36`,
            type: `image/png`
          },
          {
            src: `/favicons/android-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-57x57.png`,
            sizes: `57x57`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-60x60.png`,
            sizes: `60x60`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-76x76.png`,
            sizes: `76x76`,
            type: `image/png`
          },
          {
            src: `/favicons/android-icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-120x120.png`,
            sizes: `120x120`,
            type: `image/png`
          },
          {
            src: `/favicons/android-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`
          },
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      allPageHeaders: [
        '/*.html; cache-control: public, max-age=0,must-revalidate',
        '/*/*.html; cache-control: public, max-age=0,must-revalidate',
        '/page-data/*; cache-control: public, max-age=0,must-revalidate',
        '/static/*; cache-control: public, max-age=31536000, immutable',
        '/*.js; cache-control: public, max-age=31536000, immutable',
        '/sw.js; cache-control: public, max-age=0, must-revalidate',
        '/*.css; cache-control: public, max-age=31536000, immutable',
        '/google-fonts/*; cache-control: public, max-age=31536000, immutable'
      ]
    }
  ]
}
