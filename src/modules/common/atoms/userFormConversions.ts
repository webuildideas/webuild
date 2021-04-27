import { NFForms } from '@common/types/NewFangled'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userFormConversionsAtom = atom<NFForms['name'][]>({
  key: 'userFormConversions',
  default: [],
  effects_UNSTABLE: [persistAtom]
})
