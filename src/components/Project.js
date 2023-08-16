import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
                <a className='project-btn' href={project.codelink} target='_blank'><CodeIcon /><span>View Code</span></a>
                <a className='project-btn' href={project.application} target='_blank'><VisibilityIcon /><span>Live Demo</span></a>
            </div>
        </div>
        <div className="project-image"><img src={project.image} alt="project_image" /></div>
    </div>
  )
}

export default Project;