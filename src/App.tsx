import React from 'react'
import './App.css'
import Count from './components/count'
import { useRecoilState,useRecoilValue } from 'recoil'
import { countStore, userStore } from './stores'

function App() {
  const [count, setCount] = useRecoilState(countStore)
  const user = useRecoilValue(userStore)

  return (
    <div className="App">
      <h1>
        {user.name} {user.id}
      </h1>
      <Count />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
