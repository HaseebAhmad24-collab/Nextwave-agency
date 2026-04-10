import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Audience from './components/Audience';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <WhyUs />
      <Pricing />
      <Audience />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
