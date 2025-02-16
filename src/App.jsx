import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Extras from './components/extras/Extras'
import Testimonials from './components/testimonials/Testimonials'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Extras />
      <Testimonials />
     
    </>
  )
}

export default App
