import React from 'react';
import { FileDown, FileSpreadsheet, FileBarChart } from 'lucide-react';
import reportsImg from '../assets/reports-image.jpg';

const Reports = () => {
  const reportsList = [
    'Collection Report',
    'Member Ledger',
    'Auction Report',
    'Due Report',
    'Payment History',
    'Chit Summary'
  ];

  return (
    <section className="section" id="reports">
      <div className="container">
        <div className="reports-layout">
          <div className="reports-content">
            <div className="badge">Detailed Analytics</div>
            <h2 className="section-title">Comprehensive Reports at Your Fingertips</h2>
            <p className="section-subtitle" style={{marginLeft: 0}}>
              Generate accurate and insightful reports instantly. Export data to PDF or Excel with a single click for your accounting needs.
            </p>
            
            <ul className="reports-list">
              {reportsList.map((item, idx) => (
                <li key={idx}>
                  <FileBarChart className="text-primary" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="reports-visual">
            <img src={reportsImg} alt="ChitManager Reports" className="slide-in-right" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
