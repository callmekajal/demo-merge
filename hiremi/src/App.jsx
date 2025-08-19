import { useState } from 'react'


import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Careers from './component/Careers'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Careers />
      <Footer />
      
      
    </>
  )
}

export default App
