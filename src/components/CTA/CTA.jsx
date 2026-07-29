import React from 'react'
import styles from './CTA.module.scss'

export default function CTA({ onCategoryChange }) {
  const handleClick = () => {
    if (onCategoryChange) {
      onCategoryChange('contact')
    }
  }

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/workshop-cta.jpg"
            alt="Taller presencial de caligrafía y lettering"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            ¿Quieres aprender Caligrafía y Lettering?
          </h2>
          <p className={styles.subtitle}>
            ¡Los talleres presenciales, <br />son la mejor manera!
          </p>
          <button className={styles.button} onClick={handleClick}>
            Empieza ahora
          </button>
        </div>
      </div>
    </section>
  )
}
