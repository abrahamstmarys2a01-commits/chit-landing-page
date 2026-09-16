import React from 'react';
import { ShieldCheck, Zap, Clock, PieChart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap size={24} />,
      title: "Automated Workflows",
      description: "Automate calculations for dividends, foreman commission, and member installments instantly."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Bank-Grade Security",
      description: "Your financial data is encrypted and securely stored with daily backups and role-based access."
    },
    {
      icon: <Clock size={24} />,
      title: "Save 20+ Hours/Week",
      description: "Eliminate manual bookkeeping and WhatsApp reminders. Let the system handle the heavy lifting."
    },
    {
      icon: <PieChart size={24} />,
      title: "Actionable Insights",
      description: "Get real-time reports on collections, dues, and profits to make better business decisions."
    }
  ];

  return (
    <section className="section section-light" id="why-choose-us">
      <div className="container">
        <div className="text-center">
          <div className="badge">Why ChitMaster?</div>
          <h2 className="section-title">Built for Modern Chit Funds</h2>
          <p className="section-subtitle">We understand the complexities of running a chit fund business. That's why we built a platform that simplifies everything.</p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon-wrapper">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
