import React from 'react';
import { projects } from '../data';
import Project from './Project';

function Projects() {
  return (
    <div className='projects' id='projects'>
        <div className="projects-header">
          <div className='bar'></div>
          <h2>My Projects</h2>
          <div className="bar"></div>
        </div>
        <div className="projects-container">
          {
            projects.map((project,index) => {
              return <Project project={project} key={index+200}/>
            })
          }
        </div>
    </div>
  )
}

export default Projects;