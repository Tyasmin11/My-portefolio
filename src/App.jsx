import React from 'react'
import './index.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Services from './components/services.jsx'
import Work from './components/work.jsx'
// Pour ajouter d'autres sections, importer les composants correspondants ici

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </div>
// Pour ajouter d'autres sections, insérer les composants correspondants ici
    
  )
}

export default App