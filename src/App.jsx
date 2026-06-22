import React, { useState } from 'react'
import Header from './components/Header/Header'
import ProjectList from './components/ProjectList/ProjectList'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import initialProjects from './data/projects.json'

export default function App() {
  const [category, setCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('category')
    return cat === 'design' ? 'calligraphy' : (cat || 'calligraphy')
  })

  const filteredProjects = category === 'all'
    ? initialProjects
    : initialProjects.filter(p => p.category === category)

  return (
    <div>
      <Header currentCategory={category} onCategoryChange={setCategory} />
      <main>
        {category === 'about' ? (
          <About onCategoryChange={setCategory} />
        ) : category === 'contact' ? (
          <Contact />
        ) : (
          <ProjectList projects={filteredProjects} category={category} />
        )}
      </main>
    </div>
  )
}
