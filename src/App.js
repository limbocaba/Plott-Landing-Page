import React from 'react';
import Analytics from './components/Analytics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Analytics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
