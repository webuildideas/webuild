// Packages
import { createContext } from 'react'

export const AppContext = createContext({
  isNavOpen: false,
  isNavPinned: false,
  startExitAnimation: false,
  triggerExitAnimation: () => {
    console.log('working')
  },
  toggleNav: () => {
    console.log('working')
  },
  togglePinnedNav: () => {
    console.log('working')
  },
})
