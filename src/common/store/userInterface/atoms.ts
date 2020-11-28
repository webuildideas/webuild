import { atom } from 'recoil'

export const isOverlayNavOpenAtom = atom<boolean>({
  key: 'isOverlayNavOpenAtom',
  default: false
})

export const isNavPinnedAtom = atom<boolean>({
  key: 'isNavPinned',
  default: false
})

export const startExitAnimationAtom = atom<boolean>({
  key: 'startExitAnimation',
  default: false
})
