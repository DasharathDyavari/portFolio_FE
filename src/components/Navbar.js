import React from 'react';

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
    </div>
  )
}

export default Navbar;