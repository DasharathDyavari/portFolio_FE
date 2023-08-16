import React from 'react';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>Logo</h2>
        </div>
        <ul className='navbar-items'>
            <li className='navbar-item'><a href="#home">home</a></li>
            <li className='navbar-item'><a href="#about">about me</a></li>
            <li className='navbar-item'><a href="#projects">projects</a></li>
            <li className='navbar-item'><a href="#skills">skills</a></li>
            <li className='navbar-item'><a href="#contact">contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar;