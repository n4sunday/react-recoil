import { atom } from 'recoil'
import { IUser } from '../interfaces'

export const userStore = atom({
  key: 'user',
  default: [] as IUser[],
})
