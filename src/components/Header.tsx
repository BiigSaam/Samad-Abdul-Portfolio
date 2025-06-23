import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false) // scroll down
      } else {
        setShowHeader(true) // scroll up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`${styles.header} ${showHeader ? styles.show : styles.hide}`}>
      <div className={styles.container}>
        <img src="/images/Samad_Abdul-Identity_Logo.svg" alt="Logo Samad Abdul" className={styles.logo} />

        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>

        <nav>
          <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`}>
            <li><a href="#about" onClick={closeMenu}>À propos</a></li>
            <li><a href="#education" onClick={closeMenu}>Formations</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
            <li><a href="#experience" onClick={closeMenu}>Expériences</a></li>
            <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
