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
          Estudié el Grado en Diseño Gráfico pero continué mi especialización en Caligafía y Lettering. 
          Siempre he pensado que las letras manuscritas tienen un gran potencial para sugerir valores y transmitir mensajes.
          Más tarde me interesé por el desarrollo web y entiendo también el potencial de la programación como herramienta
          de comunicación.
          <strong> Ahora fusiono ambos mundos, llevando mi sensibilidad gráfica al entorno digital</strong>.
          
        </p>
        <button 
          onClick={handleNavToDevelopment}
          className={styles.devCtaBtn}
        >
          Explorar Portfolio de Desarrollo
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.philosophy}>
          <h3>Mi filosofía</h3>
          <p>
            La caligrafía y el lettering tiene una gran capacidad expresiva, y son la mejor manera 
            de conseguir diseños especilizados y personalizados a cada proyecto. Por ello, me gusta 
            explorar las opciones que nos brindan para mejorar y enriquecer cada diseño. Llevar esta metodología 
            al entorno digital ha sido un gran desafío y una gran satisfación.
          </p>
          <p>
            Al dominar ambos mundos, diseño y desarrollo, traduzco ideas abstractas en productos web interactivos
             y funcionales sin perder de vista los valores más importantes de cada proyecto.
          </p>
          <p>
            Empecé mi camino en el mundo visual y la caligrafía, lo que me dio una apreciación profunda por la 
            tipografía y el equilibrio espacial. Esta pasión por construir identidades visuales me llevó 
            naturalmente a querer programarlas yo mismo, para tener el control total de la experiencia 
            de usuario y darles vida en el navegador.
          </p>
        </div>

        <div className={styles.skills}>
          <h3>Arsenal Técnico</h3>
          
          <div className={styles.skillsGroup}>
            <h4 className={styles.groupTitle}>Caligrafía & Lettering</h4>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h4>Caligrafía Tradicional</h4>
                <ul>
                  <li>Caligrafía Histórica & Plumilla</li>
                  <li>Lettering & Rotulación Manual</li>
                  <li>Composición & Lay-outs Caligráficos</li>
                  <li>Tintas, Pigmentos & Papeles</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h4>Diseño & Gráfica</h4>
                <ul>
                  <li>Diseño Editorial & Maquetación</li>
                  <li>Tipografía & Jerarquía Visual</li>
                  <li>Branding e Identidad Gráfica</li>
                  <li>Sistemas de Diseño & Layout</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h4>Herramientas de Diseño & Edición</h4>
                <ul>
                  <li>Figma & Adobe Illustrator</li>
                  <li>Photoshop & InDesign</li>
                  <li>Digitalización de Trazo & Vectorización</li>
                  <li>Gestión de Color & Arte Final</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.skillsGroup}>
            <h4 className={styles.groupTitle}>Desarrollo Web & Digital</h4>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h4>Diseño UI/UX</h4>
                <ul>
                  <li>Diseño de Interfaces Web</li>
                  <li>Diseño Responsive & Adaptativo</li>
                  <li>Experiencia de Usuario (UX)</li>
                  <li>Prototipado Interactivo</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h4>Desarrollo Frontend</h4>
                <ul>
                  <li>HTML5 Semántico & CSS3/Sass</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React & Next.js</li>
                  <li>Arquitectura Frontend Modular</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h4>Herramientas & Workflow</h4>
                <ul>
                  <li>Git & Control de Versiones</li>
                  <li>Entornos de Build (Vite)</li>
                  <li>Despliegue & Integración Continua</li>
                  <li>Headless CMS & APIs REST</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
