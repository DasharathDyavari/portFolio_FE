import React from 'react';
import profile_pic from '../images/hero.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Hero() {
  return (
    <div className='hero'>
        <div className="text-content">
            <h3 className='hero-subheading1'>Hello, This is</h3>
            <h2 className='hero-heading'>Dasharath</h2>
            <h3 className='hero-subheading2'>
                <p>I'm a</p>
                <ul className='dynamic-text'>
                    <li><span>Developer</span></li>
                    <li><span>Rider</span></li>
                    <li><span>Editor</span></li>
                    <li><span>Youtuber</span></li>
                </ul>

            </h3>
            <button className='download-btn'>Download Resume</button>
            <ul className='navbar-icons'>
                <li className='navbar-icon'><a href="https://www.facebook.com/dasharath.dasharath.1694/" target='_blank'><FacebookIcon color='action'/></a></li>
                <li className='navbar-icon'><a href="https://www.instagram.com/dasharath_116/" target='_blank'><InstagramIcon color='action'/></a></li>
                <li className='navbar-icon'><a href="https://github.com/Dasharath9920" target='_blank'><GitHubIcon color='action'/></a></li>
                <li className='navbar-icon'><a href="https://www.linkedin.com/in/dyavari-dasharath-b767021b3/" target='_blank'><LinkedInIcon color='action'/></a></li>
                <li className='navbar-icon'><a href="https://twitter.com/Dashara38665028" target='_blank'><TwitterIcon color='action'/></a></li>
            </ul>
        </div>
        <div className='hero-image'>
            <img src={profile_pic} alt="image" />
        </div>
    </div>
  )
}

export default Hero;