import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { countStore, userStore } from '../stores'

const Count = () => {
  const [count, setCount] = useRecoilState(countStore)
  const setUser = useSetRecoilState(userStore)

  const setNewName = () => {
    // setUser({ name: 'Sun', id: '004' })
    setUser((cur) => ({ ...cur, id: '004' }))
  }

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={setNewName}>Set User</button>
    </div>
  )
}

export default Count
