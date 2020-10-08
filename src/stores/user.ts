import { atom } from 'recoil'

export const userStore = atom({
  key: 'user',
  default: {
    id: '5935512004',
    name: 'Nattapon',
  },
})
