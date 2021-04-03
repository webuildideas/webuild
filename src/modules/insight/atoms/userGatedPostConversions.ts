import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userGatedPostConversionsAtom = atom<string[]>({
  key: 'userGatedPostConversions',
  default: [],
  effects_UNSTABLE: [persistAtom]
})
