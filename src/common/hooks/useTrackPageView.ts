// Packages
import { useEffect, useState } from 'react'

const useTrackPageView = (
  initialPageLoaded: boolean,
  pageUrl?: string,
  pageTitle?: string
) => {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    const trackView = setTimeout(() => {
      if (initialRender && pageUrl && pageTitle && !initialPageLoaded) {
        // const url = pageUrl
        // const title = pageTitle
        // window.NF.recordPageView(url, title)
        // window.ActOn.Beacon.track(url, 'page', new Date().getTime())
        setInitialRender(false)
      }
    }, 1000)

    return () => clearTimeout(trackView)
  }, [initialRender, pageTitle, pageUrl, initialPageLoaded])
}

export default useTrackPageView
