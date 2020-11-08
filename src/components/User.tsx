import React from 'react'
import { useRecoilState } from 'recoil'
import { List, Image, Button } from 'semantic-ui-react'
import moment from 'moment'

import { userStore } from '../stores'

const User = () => {
  const [users, setUsers] = useRecoilState(userStore)

  const handleDelete = (id) => () => {
    setUsers(users.filter((u) => u.id !== id))
  }

  return (
    <div>
      <List>
        {users.map((user, index) => (
          <List.Item key={index}>
            <Image avatar src={user.avatar} />
            <List.Content>
              <List.Header as="a">{user.name}</List.Header>
              <List.Description>
                {moment(user.createdAt).format('LL')}
              </List.Description>
            </List.Content>
            <Button onClick={handleDelete(user.id)} color="red">
              Delete
            </Button>
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default User
