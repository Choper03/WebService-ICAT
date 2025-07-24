import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

import Registro from "./components/Registro.jsx"
import Home from "./components/Home.jsx"
import Enfermeria from './components/Enfermeria.jsx';
import Clinica from './components/Clinica.jsx'
import Expediente from './components/Expediente.jsx';

function App() {

  return (
    <>
    <Router>
      <div className="sApp">

         <div>
            <header>
            <Navbar/>
            </header>
          <main>
            <Routes> 
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>} />
              <Route path="/Registro" element={<Registro/>} />
              <Route path="/Enfermeria" element={<Enfermeria/>} />
              <Route path="/Clinica" element={<Clinica/>} />
              <Route path="/Expediente/:Id" element={<Expediente/>} />

            </Routes>
          </main>
          <footer>
            {"© 2025 Cristopher Sutuc"}
          </footer>
      </div>
      </div>
    </Router>
  </>
  )
}
export default App