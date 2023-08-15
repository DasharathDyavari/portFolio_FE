import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>Logo</h2>
        </div>
        <ul className='navbar-items'>
            <li className='navbar-item'><a href="">home</a></li>
            <li className='navbar-item'><a href="">about me</a></li>
            <li className='navbar-item'><a href="">projects</a></li>
            <li className='navbar-item'><a href="">skills</a></li>
            <li className='navbar-item'><a href="">contacts</a></li>
        </ul>
        <ul className='navbar-icons'>
            <li className='navbar-icon'><a href="https://www.facebook.com/dasharath.dasharath.1694/" target='_blank'><FacebookIcon color='action'/></a></li>
            <li className='navbar-icon'><a href="https://www.instagram.com/dasharath_116/" target='_blank'><InstagramIcon color='action'/></a></li>
            <li className='navbar-icon'><a href="https://github.com/Dasharath9920" target='_blank'><GitHubIcon color='action'/></a></li>
            <li className='navbar-icon'><a href="https://www.linkedin.com/in/dyavari-dasharath-b767021b3/" target='_blank'><LinkedInIcon color='action'/></a></li>
            <li className='navbar-icon'><a href="https://twitter.com/Dashara38665028" target='_blank'><TwitterIcon color='action'/></a></li>

        </ul>
    </div>
  )
}

export default Navbar;