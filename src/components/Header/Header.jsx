import React, { useState } from 'react'
import styles from './Header.module.scss'

export default function Header({ currentCategory, onCategoryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isSecondaryPage = window.location.pathname.includes('project.html')

  const handleCategoryClick = (category) => {
    setIsMenuOpen(false)
    if (isSecondaryPage) {
      window.location.href = `/index.html?category=${category}`
    } else {
      onCategoryChange(category)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => handleCategoryClick('all')}>
        <span>Miquel Centellas</span>
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
          className={`${styles.navLink} ${currentCategory === 'all' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </button>
        <button
          className={`${styles.navLink} ${currentCategory === 'development' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('development')}
        >
          Development
        </button>
        <button
          className={`${styles.navLink} ${currentCategory === 'design' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('design')}
        >
          Design
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
