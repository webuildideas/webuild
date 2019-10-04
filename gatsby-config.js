require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `WeBuild`,
    description: `We're WeBuild: a digital design and product studio. We design stunning user experiences, optimized for conversions and impact.`,
    author: `Vincent Brown`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_PROD_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Overpass`,
            variants: [`400`, `800`, `900`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WeBuild`,
        short_name: `WeBuild`,
        start_url: `/`,
        background_color: `#2C3E50`,
        theme_color: `#2C3E50`,
        display: `minimal-ui`,
        icon: `src/static/images/favicons/webuild-favicon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-headers`,
      allPageHeaders: [
        '/*.html; cache-control: public, max-age=0,must-revalidate',
        '/*/*.html; cache-control: public, max-age=0,must-revalidate',
        '/page-data/*; cache-control: public, max-age=0,must-revalidate',
        '/static/*; cache-control: public, max-age=31536000, immutable',
        '/*.js; cache-control: public, max-age=31536000, immutable',
        '/sw.js; cache-control: public, max-age=0, must-revalidate',
        '/*.css; cache-control: public, max-age=31536000, immutable',
        '/google-fonts/*; cache-control: public, max-age=31536000, immutable',
      ],
    },
  ],
}
