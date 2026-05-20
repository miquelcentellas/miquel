import React, { useState } from 'react'
import Header from './components/Header/Header'
import ProjectList from './components/ProjectList/ProjectList'
import initialProjects from './data/projects.json'

export default function App() {
  const [category, setCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('category') || 'all'
  })

  const filteredProjects = category === 'all' 
    ? initialProjects 
    : initialProjects.filter(p => p.category === category)

  return (
    <div>
      <Header currentCategory={category} onCategoryChange={setCategory} />
      <main>
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  )
}
