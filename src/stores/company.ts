import { selector } from 'recoil'
import axios from 'axios'

export const companyStore = selector({
  key: 'UserName',
  get: async () => {
    const response = await axios.get(
      'https://5fa84293c9b4e90016e6958f.mockapi.io/company'
    )
    return response.data
  },
})
