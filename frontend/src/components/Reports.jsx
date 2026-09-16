import React from 'react';
import { FileDown, FileSpreadsheet, FileBarChart } from 'lucide-react';

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
            <div className="report-mockup">
              <div className="report-header">
                <h4>Monthly Collection Report</h4>
                <div className="export-buttons">
                  <button className="btn-sm btn-outline"><FileDown size={16} /> PDF</button>
                  <button className="btn-sm btn-outline"><FileSpreadsheet size={16} /> Excel</button>
                </div>
              </div>
              <div className="table-responsive">
                <table className="dummy-table">
                  <thead>
                    <tr>
                      <th>Group</th>
                      <th>Collected</th>
                      <th>Due</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gold Star G1</td>
                      <td>₹4,50,000</td>
                      <td>₹50,000</td>
                      <td><span className="status-badge pending">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Silver G2</td>
                      <td>₹2,00,000</td>
                      <td>₹0</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Platinum G3</td>
                      <td>₹8,00,000</td>
                      <td>₹1,20,000</td>
                      <td><span className="status-badge pending">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
