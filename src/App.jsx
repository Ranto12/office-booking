import { useState } from 'react'
import { Button, Input } from './component'
import { Login } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
