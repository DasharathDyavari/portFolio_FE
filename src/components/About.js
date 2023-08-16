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
            <h4 className='about-text-subheading'>Web Developer</h4>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus incidunt maxime quaerat quam facilis quidem a mollitia at sapiente!</p>
        </div>
    </div>
  )
}

export default About;