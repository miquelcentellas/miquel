import React from 'react'
import Header from './components/Header/Header'
import ProjectCard from './components/ProjectCard/ProjectCard'
import initialProjects from './data/projects.json'
import styles from './ProjectApp.module.scss'

export default function ProjectApp() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const project = initialProjects.find(p => p.id === id)

  return (
    <div>
      <Header 
        currentCategory={project ? project.category : 'all'} 
        onCategoryChange={() => {}} 
      />
      <main className={styles.container}>
        <a href="/index.html" className={styles.backBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Projects
        </a>

        {project ? (
          <>
            <div className={styles.intro}>
              <h2>Project Showcase</h2>
              <p>Detailed view of this selected creation.</p>
            </div>
            
            <div className={styles.cardWrapper}>
              <ProjectCard project={project} />
            </div>
          </>
        ) : (
          <div className={styles.errorState}>
            <h3>Project Not Found</h3>
            <p>The project you are looking for does not exist or has been removed.</p>
          </div>
        )}
      </main>
    </div>
  )
}
