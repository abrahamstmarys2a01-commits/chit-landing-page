import React from 'react';
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Users, Award } from 'lucide-react';
import heroImg from '../assets/hero image.png';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#e9f7f1', padding: '6rem 0 4rem 0' }}>
      <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
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
            <a href="#cta" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '999px', fontSize: '1rem', fontWeight: '600' }}>
               Get Started <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', borderRadius: '999px', fontSize: '1rem', fontWeight: '600', backgroundColor: 'white', color: '#0f172a', borderColor: '#e2e8f0' }}>
               Request Demo
            </a>
          </div>

          <div className="hero-features animate-fade-in-up delay-400" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: '0 0 auto' }}>
              <div style={{ background: 'white', padding: '0.75rem', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', color: 'var(--primary-color)' }}>
                <ShieldCheck size={24} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#334155', textAlign: 'center' }}>100%<br/>Secure</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: '0 0 auto' }}>
              <div style={{ background: 'white', padding: '0.75rem', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', color: 'var(--primary-color)' }}>
                <Zap size={24} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#334155', textAlign: 'center' }}>Fast<br/>Processing</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: '0 0 auto' }}>
              <div style={{ background: 'white', padding: '0.75rem', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', color: 'var(--primary-color)' }}>
                <Users size={24} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#334155', textAlign: 'center' }}>Easy<br/>Management</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: '0 0 auto' }}>
              <div style={{ background: 'white', padding: '0.75rem', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', color: 'var(--primary-color)' }}>
                <Award size={24} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#334155', textAlign: 'center' }}>Trusted<br/>Platform</span>
            </div>
          </div>
        </div>
        <div className="animate-fade-in-up delay-400" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={heroImg} alt="ChitMaster App Preview" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
