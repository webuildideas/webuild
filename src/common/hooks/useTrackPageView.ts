import { useEffect, useState } from 'react'

export function useTrackPageView() {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    if (initialRender) {
      const trackView = setTimeout(() => {
        window.NF.recordPageView()
        console.log('Page view recorded')
        setInitialRender(false)
      }, 1000)

      return () => clearTimeout(trackView)
    }
  }, [initialRender])
}
