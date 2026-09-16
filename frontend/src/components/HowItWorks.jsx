import React from 'react';
import howItWorksImg from '../assets/how-it-works.jpg';

const HowItWorks = () => {
  const steps = [
    { number: '01', title: 'Create Chit Group', desc: 'Set value, duration, and member count.' },
    { number: '02', title: 'Add Members', desc: 'Onboard members and verify KYC securely.' },
    { number: '03', title: 'Collect Installments', desc: 'Track monthly collections and manage dues.' },
    { number: '04', title: 'Manage Auction', desc: 'Record bids and automatically calculate dividends.' },
    { number: '05', title: 'Generate Reports', desc: 'Export detailed financial reports instantly.' },
  ];

  return (
    <section className="section section-light" id="how-it-works" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
      {/* Decorative curved background */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '60%', height: '120%', backgroundColor: '#e2e8f0', borderRadius: '50% 0 0 50%', zIndex: 0, opacity: 0.6 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="how-it-works-grid">
          <div className="how-it-works-content">
            <div className="badge">Simple Process</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }}>How It Works</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '2rem' }}>Streamline your workflow in 5 simple steps.</p>
            
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', marginBottom: '1rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                  <div className="step-number" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{step.number}</div>
                  <div>
                    <h4 className="step-title" style={{ margin: '0 0 0.25rem 0' }}>{step.title}</h4>
                    <p className="step-desc" style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>{step.description || step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="how-it-works-image" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={howItWorksImg} alt="ChitFlow App Interface" style={{ maxWidth: '120%', zIndex: 2, position: 'relative' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
