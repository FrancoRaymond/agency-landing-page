import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Extras from './components/extras/Extras'
import Testimonials from './components/testimonials/Testimonials'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/footer/Footer'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth)

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
      if (window.innerWidth > 500) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} handleMenuClick={handleMenuClick}/>
      <Hero />
      <Features />
      <Extras />
      <Testimonials />
      <Gallery size={size}/>
      <Footer />
    </>
  )
}

export default App
