import React from 'react';
import { 
  Users, FolderGit2, CalendarCheck, IndianRupee, 
  Gavel, AlertTriangle, FileText, Bell, BarChart2 
} from 'lucide-react';

const Features = () => {
  const features = [
    { name: 'Chit Group Management', icon: <FolderGit2 /> },
    { name: 'Member Management', icon: <Users /> },
    { name: 'Installment Tracking', icon: <CalendarCheck /> },
    { name: 'Payment Collection', icon: <IndianRupee /> },
    { name: 'Auction Management', icon: <Gavel /> },
    { name: 'Due & Overdue Tracking', icon: <AlertTriangle /> },
    { name: 'Receipt Generation', icon: <FileText /> },
    { name: 'Notifications', icon: <Bell /> },
    { name: 'Reports & Analytics', icon: <BarChart2 /> },
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="text-center">
          <div className="badge">Powerful Features</div>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">A comprehensive suite of tools designed specifically for chit fund operations.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-name">{feature.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
