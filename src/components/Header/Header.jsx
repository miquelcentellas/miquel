import React from 'react'
import styles from './Header.module.scss'

export default function Header({ currentCategory, onCategoryChange }) {
  const isSecondaryPage = window.location.pathname.includes('project.html')

  const handleCategoryClick = (category) => {
    if (isSecondaryPage) {
      window.location.href = `/index.html?category=${category}`
    } else {
      onCategoryChange(category)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => handleCategoryClick('all')}>
        Miquel <span>Centellas</span>
      </div>
      
      <nav className={styles.nav}>
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
      </nav>

      <button className={styles.cta}>
        Let's Connect
      </button>
    </header>
  )
}
