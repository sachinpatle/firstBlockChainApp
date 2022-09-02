import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    </div>
  )
}

export default App
