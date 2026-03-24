import { useState } from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Education from './pages/Education'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className="bg-gray-900 text-white">
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <main className="pt-16" onClick={closeMenu}>
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
