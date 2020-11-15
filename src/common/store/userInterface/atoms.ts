import { atom } from 'recoil'

export const isOverlayNavOpenAtom = atom({
  key: 'isOverlayNavOpenAtom',
  default: false
})

export const isNavPinnedAtom = atom({
  key: 'isNavPinned',
  default: false
})

export const startExitAnimationAtom = atom({
  key: 'startExitAnimation',
  default: false
})
