import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import ProjectApp from './ProjectApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectApp />
  </StrictMode>,
)
