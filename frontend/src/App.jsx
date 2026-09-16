import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Reports from './components/Reports';
import Security from './components/Security';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Features />
        <HowItWorks />
        <Reports />
        <Security />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
