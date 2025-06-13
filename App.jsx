
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 

import Home from './Pages/Home';
import MyResume from './Pages/MyResume';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {

  return (
      <Router>
        <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
