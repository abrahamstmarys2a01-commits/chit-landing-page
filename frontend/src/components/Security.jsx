import React from 'react';
import { Lock, UserCheck, Shield, Activity, Database } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    { name: 'Secure Authentication', icon: <Lock size={20} /> },
    { name: 'Role Based Access', icon: <UserCheck size={20} /> },
    { name: 'Data Protection', icon: <Shield size={20} /> },
    { name: 'Activity Tracking', icon: <Activity size={20} /> },
    { name: 'Data Backup', icon: <Database size={20} /> },
  ];

  return (
    <section className="section section-light" id="security">
      <div className="container text-center">
        <div className="badge">Enterprise Security</div>
        <h2 className="section-title">Your Data is Safe With Us</h2>
        <p className="section-subtitle">We employ industry-leading security measures to protect your sensitive financial data.</p>
        
        <div className="security-badges">
          {securityFeatures.map((feat, idx) => (
            <div key={idx} className="security-badge-item">
              <div className="security-icon">{feat.icon}</div>
              <span>{feat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
