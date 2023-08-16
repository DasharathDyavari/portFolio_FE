import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <div className='navbar'>
        <a className='logo' href='#home'>
            <img src={logo} alt="logo" />
        </a>
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