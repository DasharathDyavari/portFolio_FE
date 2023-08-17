import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Navbar() {

  const [menu,setMenu] = useState(false);

  const toggleMenu = () => {
    const navbar = document.getElementById('navbar');
    if(menu){
      navbar.style.translate = '100vw';
    }
    else{
      navbar.style.translate = '0vw';
    }
    setMenu(!menu);
  }

  useEffect(() => {
    setMenu(false);
  },[]);

  return (
    <div className='navbar'>
        <a className='logo' href='#home'>
            <img src={logo} alt="logo" />
        </a>
        <ul className='navbar-items' id='navbar'>
            <li className='navbar-item' onClick={() => toggleMenu()}><a href="#home" data-after="Home">home</a></li>
            <li className='navbar-item' onClick={() => toggleMenu()}><a href="#about" data-after="About">about me</a></li>
            <li className='navbar-item' onClick={() => toggleMenu()}><a href="#projects" data-after="Projects">projects</a></li>
            <li className='navbar-item' onClick={() => toggleMenu()}><a href="#skills" data-after="Skills">skills</a></li>
            <li className='navbar-item' onClick={() => toggleMenu()}><a href="#contact" data-after="Contact">contact</a></li>
        </ul>
        <button className="navbar-menu" onClick={() => toggleMenu()}>
          {!menu && <KeyboardDoubleArrowLeftIcon fontSize='medium'/>}
          {menu && <KeyboardDoubleArrowRightIcon fontSize='medium' color='warning'/>}
        </button>
    </div>
  )
}

export default Navbar;