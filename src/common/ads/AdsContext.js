// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

// const ADS_QUERY = graphql`
//   query AdsQuery {
//     allContentfulGlobalAdsSettings(limit: 1) {
//       nodes {
//         id
//         SidebarAds {
//           id
//           headline
//           copy
//           image {
//             fluid {
//               ...GatsbyContentfulFluid_withWebp_noBase64
//             }
//           }
//           ctaLink
//           ctaText
//         }
//         insightsHubAds {
//           headline
//           id
//           resourceType
//           ctaText
//           ctaLink
//           backgroundColor
//           image {
//             fluid {
//               ...GatsbyContentfulFluid_withWebp_noBase64
//             }
//           }
//         }
//       }
//     }
//   }
// `

const AdsContext = React.createContext()

export function AdsProvider({ children }) {
  // const {
  //   allContentfulGlobalAdsSettings: {
  //     nodes: [ads]
  //   }
  // } = useStaticQuery(ADS_QUERY)

  return <AdsContext.Provider value="ads">{children}</AdsContext.Provider>
}

export default AdsContext
