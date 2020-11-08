import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import axios from 'axios'
import { Divider, Header } from 'semantic-ui-react'
import './App.css'

import { userStore } from './stores'
import User from './components/User'
import Company from './components/Company'

function App() {
  const setUsers = useSetRecoilState(userStore)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    let res = await axios.get(
      'https://5fa84293c9b4e90016e6958f.mockapi.io/user'
    )
    setUsers(res.data)
  }

  return (
    <div className="App">
      <Divider horizontal>
        <Header as="h4">User</Header>
      </Divider>
      <User />
      <Divider horizontal>
        <Header as="h4">Company</Header>
      </Divider>
      <Company />
    </div>
  )
}

export default App
