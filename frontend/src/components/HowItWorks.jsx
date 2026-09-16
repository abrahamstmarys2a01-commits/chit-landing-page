import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: '01', title: 'Create Chit Group', desc: 'Set value, duration, and member count.' },
    { number: '02', title: 'Add Members', desc: 'Onboard members and verify KYC securely.' },
    { number: '03', title: 'Collect Installments', desc: 'Track monthly collections and manage dues.' },
    { number: '04', title: 'Manage Auction', desc: 'Record bids and automatically calculate dividends.' },
    { number: '05', title: 'Generate Reports', desc: 'Export detailed financial reports instantly.' },
  ];

  return (
    <section className="section section-light" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <div className="badge">Simple Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Streamline your workflow in 5 simple steps.</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.description || step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
