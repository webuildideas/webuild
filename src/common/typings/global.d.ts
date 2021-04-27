import { NFForms } from '@common/types/NewFangled'

export {}

declare global {
  interface Window {
    NF: {
      recordPageView: (pageLink?: string, pageTitle?: string) => void
      getActivityData: () => { conversions: NFForms['name'][] }
    }
    ActOn: {
      Beacon: {
        track: (pageLink: string, event: string, timestamp: number) => void
      }
    }
  }
}

window.NF = window.NF || {}
