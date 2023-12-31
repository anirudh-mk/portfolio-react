import React from 'react'
import './ProjectDetailsCard.css'
function ProjectDetailsCard({project}) {
  return (
    <div>
      <a href={project.html_url}>
        <div key={project.id} className='project-details-card'>
            <a href={project.html_url}>
                <h1>{project.name.replace(/[_-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h1>
            </a>
            <p className='project-description'>{project.description===null?project.name.replace(/-/g, ' '):project.description}</p>
            <p>created on : {project.created_at.split("T")[0]}</p>
            <p className='language'><i>{project.language}</i></p>
        </div>      
      </a>
    </div>
  )
}

export default ProjectDetailsCard