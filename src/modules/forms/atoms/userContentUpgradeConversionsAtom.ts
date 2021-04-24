import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userContentUpgradeConversionsAtom = atom<string[]>({
  key: 'userContentUpgradeConversions',
  default: [],
  effects_UNSTABLE: [persistAtom]
})
