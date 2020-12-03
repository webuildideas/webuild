export {}

declare global {
  interface Window {
    NF: {
      recordPageView: (pageLink?: string, pageTitle?: string) => void
    }
  }
}

window.NF = window.NF || {}
