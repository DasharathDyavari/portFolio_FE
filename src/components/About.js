import React from 'react';
import about_image from '../images/about.jpg';

function About() {
  return (
    <div className='about' id='about'>
        <div className="about-image">
            <div className='about-img-background'></div>
            <img className='about-img' src={about_image} alt="about" />
        </div>
        <div className='about-text-content'>
            <h2 className='about-text-header'>about <span>me</span></h2>
            <h4 className='about-text-subheading'>Software Engineer</h4>
            <p className='about-text'>I'm curious to learn the Technology and the way it is changing the World. Currently, I'm working as a web developer at Wingify adding relevant features to the VWO product used by thousands of customers across the world. </p>
            <p className='about-text'>I'm a big fan of Artificial Intelligence. Building some projects using AI such as Chess Game using Neural Networks, Personal assistant for the financial tips to spend money and time wisely.</p>
        </div>
    </div>
  )
}

export default About;