import { NFForms } from '@common/types/NewFangled'

export {}

declare global {
  interface Window {
    NF: {
      recordPageView: (pageLink?: string, pageTitle?: string) => void
      getActivityData: () => { conversions: NFForms[] }
    }
  }
}

window.NF = window.NF || {}
