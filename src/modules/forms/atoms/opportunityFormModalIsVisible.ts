import { atom } from 'recoil'

export const opportunityFormModalIsVisible = atom<boolean>({
  key: 'opportunityFormModal',
  default: false
})
