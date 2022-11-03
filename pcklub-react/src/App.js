import React from 'react'
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Network from './components/network/Network'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Network />
      <Footer />
    </>
  );
}

export default App;
