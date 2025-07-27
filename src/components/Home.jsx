import React, { useEffect, useState } from 'react';
import logo from '../assets/icat-logo.jpg'

function Home() {
  return (
    <div>
      <div>
        <img src={logo} alt="" className='caja-logo'/>
      </div>
      <h1>BIENVENIDO (A)</h1>
    </div>
  );
}

export default Home;