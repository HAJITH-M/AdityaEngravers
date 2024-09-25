import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Navbar2 from './components/NavBar/NavBar2'
import Contact from './Pages/Contact'
import Clients from './components/Clients/Clients'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <Navbar2/>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/client" element={<Clients />} />
      
        
      </Routes>
      <Contact/>
      <Footer/>
    </Router>
  )
}

export default App