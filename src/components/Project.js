import React from 'react'

function Project({project}) {
  return (
    <div className='project'>
        <div className="project-text-content">
            <h3 className='project-name'>{project.name}</h3>
            <p className='project-description'>{project.description}</p>
            <h4 className='skills-header'>Skills</h4>
            <div className="skills">
                {
                    project.skills.map(skill => {
                        return <div className='skill'>{skill}</div>
                    })
                }
            </div>
            <div className='project-btns'>
                <button className='project-btn'>View Code</button>
                <button className='project-btn'>Live Demo</button>
            </div>
        </div>
        <div className="project-image"><img src={project.image} alt="project_image" /></div>
    </div>
  )
}

export default Project;