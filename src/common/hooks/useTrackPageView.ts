// Packages
import { useEffect, useState } from 'react'

const useTrackPageView = (pageUrl?: string, pageTitle?: string) => {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    const trackView = setTimeout(() => {
      if (initialRender && pageUrl && pageTitle) {
        console.log('Tracking page view')
        const url = pageUrl
        const title = pageTitle
        window.NF.recordPageView(url, title)
        window.ActOn.Beacon.track(url, 'page', new Date().getTime())
        setInitialRender(false)
      }
    }, 1000)

    return () => clearTimeout(trackView)
  }, [initialRender, pageTitle, pageUrl])
}

export default useTrackPageView
