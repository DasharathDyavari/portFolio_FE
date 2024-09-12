import React from 'react';
import profile_pic from '../images/hero.png';

function Hero() {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = 'https://drive.google.com/file/d/105AqCoj31iD673ptkXv5w9CVIeC82mRS/view?usp=sharing'; // Replace with your PDF URL
    link.setAttribute('download', 'Resume.pdf'); // Optional: Set a custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='hero'>
        <div className="text-content">
            <h3 className='hero-subheading1'>Hello, This is</h3>
            <h2 className='hero-heading'>Dasharath</h2>
            <h3 className='hero-subheading2'>
                <p>I'm a</p>
                <ul className='dynamic-text'>
                    <li><span>Developer</span></li>
                    <li><span>Youtuber</span></li>
                    <li><span>Rider</span></li>
                </ul>

            </h3>
            <button className='download-btn' onClick={downloadResume}>Download Resume</button>
        </div>
        <div className='hero-image'>
            <img src={profile_pic} alt="image" />
        </div>
    </div>
  )
}

export default Hero;