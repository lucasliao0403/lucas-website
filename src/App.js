
import './App.css';
import React, {useState, useEffect} from 'react';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';


function App() {


  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Projects/>
    </div>
  );
}

export default App;
