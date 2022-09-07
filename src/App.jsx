import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { Home, Login, Register } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
     </Routes>
    </>
  )
}

export default App
