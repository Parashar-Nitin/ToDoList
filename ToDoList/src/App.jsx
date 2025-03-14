import { useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/card"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Card/>
    </>
  )
}

export default App
