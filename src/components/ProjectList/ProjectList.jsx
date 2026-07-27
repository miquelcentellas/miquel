import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectList.module.scss'

export default function ProjectList({ projects, category = 'all' }) {
  return (
    <section className={`${styles.container} ${styles[category] || ''}`}>
      <div className={styles.intro}>
        <h2><span>Obras Seleccionadas</span></h2>
        <p>Una colección seleccionada de proyectos de caligrafía, diseño y desarrollo artesanal.</p>
      </div>

      {projects.length > 0 ? (
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <p>No se encontraron proyectos en esta categoría.</p>
        </div>
      )}
    </section>
  )
}
