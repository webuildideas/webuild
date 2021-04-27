/* eslint-disable react/no-danger */
/* eslint-disable no-undef */
// Packages
import React from 'react'
import { RecoilRoot } from 'recoil'

// Components
import AppProvider from './src/components/AppProvider'

export const wrapPageElement = ({ element, props }) => {
  return (
    <RecoilRoot>
      <AppProvider {...props}>{element}</AppProvider>
    </RecoilRoot>
  )
}

export { wrapRootElement } from './src/common/apollo/wrap-root-element'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="act-on-beacon"
      dangerouslySetInnerHTML={{
        __html: `/*<![CDATA[*/(function(w,a,b,d,s){w[a]=w[a]||{};w[a][b]=w[a][b]||{q:[],track:function(r,e,t){this.q.push({r:r,e:e,t:t||+new Date});}};var e=d.createElement(s);var f=d.getElementsByTagName(s)[0];e.async=1;e.src='https://go.webuild.io/cdnr/forpci2/acton/bn/tracker/43738';f.parentNode.insertBefore(e,f);})(window,'ActOn','Beacon',document,'script');ActOn.Beacon.track();/*]]>*/`
      }}
    />
  ])
}
