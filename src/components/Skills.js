import React from 'react';
import { skills } from '../data';

function Skills() {
  return (
    <div className='skills'>
        <div className="projects-header">
          <div className='bar'></div>
            <h2>My Skills</h2>
          <div className="bar"></div>
        </div>
        <h4 className='skills-subheading'>I do all kinds of neat stuff</h4>
        <div className="skills-wrapper">
            {
                skills.map(skill => {
                    return <div className='skill'>
                            <div className="skill-image"><img src={skill.icon} alt="icon"/></div>
                            <h2 className='skill-name'>{skill.name}</h2>
                            <p className='skill-description'>{skill.description}</p>
                            <div className="skill-tools">
                                {
                                    skill.skills.map(tool => {
                                        return <div className='skill-tool'>{tool}</div>
                                    })
                                }
                            </div>
                        </div>
                })
            }
        </div>
    </div>
  )
}

export default Skills;