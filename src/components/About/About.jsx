import React from 'react'
import styles from './About.module.scss'

export default function About({ onCategoryChange }) {
  const handleNavToDevelopment = (e) => {
    e.preventDefault()
    if (onCategoryChange) {
      onCategoryChange('development')
    } else {
      window.location.href = '/index.html?category=development'
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h2><span>Sobre mí</span></h2>
        <p className={styles.hook}>
          Soy un perfil híbrido que une la <strong>sensibilidad estética del diseño visual</strong> con la <strong>solidez técnica del desarrollo frontend</strong>. Creo experiencias digitales que no solo se ven increíbles, sino que funcionan a la perfección y son accesibles para todo el mundo.
        </p>
        <button 
          onClick={handleNavToDevelopment}
          className={styles.devCtaBtn}
        >
          Explorar Portafolio de Desarrollo
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.philosophy}>
          <h3>Mi filosofía</h3>
          <p>
            Al dominar ambos mundos, diseño y desarrollo, traduzco ideas abstractas en productos web interactivos y funcionales sin perder la esencia del layout original. Mi formación en diseño me permite escribir código más limpio y modular, prestando atención al detalle en la usabilidad, el rendimiento web y la accesibilidad de las interfaces.
          </p>
          <p>
            Empecé mi camino en el mundo visual y la caligrafía, lo que me dio una apreciación profunda por la tipografía y el equilibrio espacial. Esta pasión por construir identidades visuales me llevó naturalmente a querer programarlas yo mismo, para tener el control total de la experiencia de usuario y darles vida en el navegador.
          </p>
        </div>

        <div className={styles.skills}>
          <h3>Arsenal Técnico</h3>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h4>Diseño & UI/UX</h4>
              <ul>
                <li>Diseño de interfaces (UI)</li>
                <li>Branding e Identidad</li>
                <li>Tipografía y Caligrafía</li>
                <li>Sistemas de diseño</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h4>Desarrollo Frontend</h4>
              <ul>
                <li>HTML5 & CSS3/Sass</li>
                <li>JavaScript (ES6+)</li>
                <li>React & Next.js</li>
                <li>Frameworks modernos</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h4>Herramientas & Workflow</h4>
              <ul>
                <li>Figma & Suite Adobe</li>
                <li>Git & Control de versiones</li>
                <li>Entornos de build (Vite)</li>
                <li>CMS y Headless CMS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
