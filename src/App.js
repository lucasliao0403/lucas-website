
import './App.css';
import React, {useState, useEffect} from 'react';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';

import { Analytics } from '@vercel/analytics/react';


function App() {

  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Footer/>

        <Analytics/>
    </div>
  );
}

export default App;
