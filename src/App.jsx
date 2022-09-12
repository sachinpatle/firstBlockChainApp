import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Transactions from './Components/Transactions'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
    </div>
  )
}

export default App
