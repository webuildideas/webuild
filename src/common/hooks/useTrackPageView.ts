// Packages
import { useEffect, useState } from 'react'

const useTrackPageView = (pageUrl?: string, pageTitle?: string) => {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    const trackView = setTimeout(() => {
      if (initialRender) {
        const url = pageUrl || window.location.href
        const title = pageTitle || document.title
        window.NF.recordPageView(url, title)
        window.ActOn.Beacon.track(url, 'page', new Date().getTime())
        setInitialRender(false)
      }
    }, 1000)

    return () => clearTimeout(trackView)
  }, [initialRender, pageUrl, pageTitle])
}

export default useTrackPageView
