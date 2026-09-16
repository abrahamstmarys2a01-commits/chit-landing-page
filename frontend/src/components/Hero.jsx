import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge animate-fade-in-up">Introducing ChitMaster 2.0</div>
          <h1 className="hero-title animate-fade-in-up delay-100">
            Smart Chit Management, <br/>
            <span className="text-primary">Made Simple.</span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            Manage chit groups, members, collections, auctions and reports from one powerful platform. Built for modern chit fund businesses.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-300">
            <a href="#cta" className="btn btn-primary">
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              <PlayCircle size={18} /> Request Demo
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in-up delay-400">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
