import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Analytics from './components/Analytics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Signup from './components/Signup'

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Analytics />
      <Contact />
      <Footer />
        <Signup />
  </div>
  );
}

export default App;
