import React from 'react';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>Logo</h2>
        </div>
        <ul className='navbar-items'>
            <li className='navbar-item'>home</li>
            <li className='navbar-item'>about me</li>
            <li className='navbar-item'>projects</li>
            <li className='navbar-item'>skills</li>
            <li className='navbar-item'>contacts</li>
        </ul>
        <ul className='navbar-icons'>
            <li className='navbar-icon'><a href="https://www.facebook.com/dasharath.dasharath.1694/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/facebook--v1.png"/></a></li>
            <li className='navbar-icon'><a href="https://www.instagram.com/dasharath_116/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a></li>
            <li className='navbar-icon'><a href="https://github.com/Dasharath9920" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a></li>
            <li className='navbar-icon'><a href="https://www.linkedin.com/in/dyavari-dasharath-b767021b3/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a></li>
        </ul>
    </div>
  )
}

export default Navbar;