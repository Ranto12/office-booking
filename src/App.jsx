import { useState } from 'react'
import { Button, Input } from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button nameButton="Jancok" /> */}
      <Input className="bg-primaryButton"/>
    </>
  )
}

export default App
