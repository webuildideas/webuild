import { NFForms } from '@common/types/NewFangled'
import { atom } from 'recoil'

export const userConversionsAtom = atom<NFForms['name'][]>({
  key: 'userConversions',
  default: []
})
