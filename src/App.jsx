import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { DetailPage, Faq, Home, Login, Register } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/detailPage" element={<DetailPage />} />
     </Routes>
    </>
  )
}

export default App
