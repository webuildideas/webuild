import { useEffect, useState } from 'react'

export function useTrackPageView(pageUrl?: string, pageTitle?: string) {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    if (initialRender) {
      const trackView = setTimeout(() => {
        if (pageUrl && pageTitle) {
          window.NF.recordPageView(pageUrl, pageTitle)
          console.log(pageUrl, pageTitle)
        } else {
          window.NF.recordPageView()
          console.log('No url or title passed')
        }
        setInitialRender(false)
      }, 1000)

      return () => clearTimeout(trackView)
    }
  }, [initialRender, pageUrl, pageTitle])
}
