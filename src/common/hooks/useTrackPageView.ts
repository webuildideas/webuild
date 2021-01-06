// Packages
import { useEffect, useState } from 'react'

const useTrackPageView = (
  pageUrl: string = window.location.href,
  pageTitle: string = document.title
) => {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    const trackView = setTimeout(() => {
      if (initialRender) {
        window.NF.recordPageView(pageUrl, pageTitle)
        setInitialRender(false)
      }
    }, 1000)

    return () => clearTimeout(trackView)
  }, [initialRender, pageUrl, pageTitle])
}

export default useTrackPageView
