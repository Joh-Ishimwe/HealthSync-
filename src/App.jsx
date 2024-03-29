import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/about'
import Features from './Components/features/Features'
import Team from './Components/team/team'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Features/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
