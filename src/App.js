import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';


function App() {


  return (
    <div className="App">
        <Navbar/>
        <About/>
        <Projects/>
    </div>
  );
}

export default App;
