import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function Home() {
  return (
    <div className='home' id='home'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home;