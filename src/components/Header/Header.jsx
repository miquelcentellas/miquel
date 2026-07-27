import React, { useState, useEffect, useRef } from 'react'
import styles from './Header.module.scss'

const LOGOS = [
  { id: 'copperplate', src: '/miquel-copperplate.svg', alt: 'Miquel Centellas - Copperplate' },
  { id: 'carolina', src: '/miquel-carolina.svg', alt: 'Miquel Centellas - Carolina' },
  { id: 'gotica', src: '/miquel-gotica.svg', alt: 'Miquel Centellas - Gótica' }
]

const getDifferentRandomLogo = (currentId) => {
  const availableLogos = currentId ? LOGOS.filter(l => l.id !== currentId) : LOGOS
  return availableLogos[Math.floor(Math.random() * availableLogos.length)]
}

export default function Header({ currentCategory, onCategoryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logo, setLogo] = useState(() => LOGOS[Math.floor(Math.random() * LOGOS.length)])
  const isSecondaryPage = window.location.pathname.includes('project.html')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setLogo(prevLogo => getDifferentRandomLogo(prevLogo.id))
  }, [currentCategory])

  const handleCategoryClick = (category) => {
    setIsMenuOpen(false)
    if (category === currentCategory) {
      setLogo(prevLogo => getDifferentRandomLogo(prevLogo.id))
    }
    if (isSecondaryPage) {
      window.location.href = `/index.html?category=${category}`
    } else {
      onCategoryChange(category)
    }
  }

  const handleLogoClick = () => {
    handleCategoryClick('calligraphy')
  }


  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick} aria-label="Miquel Centellas Logo">
        <img
          key={logo.id}
          src={logo.src}
          alt={logo.alt}
          className={styles.logoImg}
        />
      </div>




      <div className={styles.currentDevelopment}>  ¡ Website under current development !</div>

      <button
        className={styles.mobileMenuBtn}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <button
          className={`${styles.navLink} ${currentCategory === 'calligraphy' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('calligraphy')}
        >
          Calligraphy
        </button>
        <button
          className={`${styles.navLink} ${currentCategory === 'about' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('about')}
        >
          About me
        </button>
        <button
          className={`${styles.navLink} ${currentCategory === 'contact' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('contact')}
        >
          Contact
        </button>
      </nav>

      <button className={styles.cta}>
        Let's Connect
      </button>
    </header>
  )
}
