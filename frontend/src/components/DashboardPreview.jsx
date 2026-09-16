import React from 'react';
import { Users, CreditCard, TrendingUp, AlertCircle, Calendar, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <div className="dashboard-preview">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h3>Overview</h3>
          <p>Welcome back, Admin</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-sm btn-primary">New Chit Group</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon bg-green-light"><Users className="text-primary" size={20} /></div>
          <div className="stat-details">
            <span className="stat-label">Total Groups</span>
            <span className="stat-value">24</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-blue-light"><CreditCard className="text-blue" size={20} /></div>
          <div className="stat-details">
            <span className="stat-label">Active Members</span>
            <span className="stat-value">845</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-green-light"><TrendingUp className="text-primary" size={20} /></div>
          <div className="stat-details">
            <span className="stat-label">Monthly Collection</span>
            <span className="stat-value">₹4.2M</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-red-light"><AlertCircle className="text-red" size={20} /></div>
          <div className="stat-details">
            <span className="stat-label">Pending Payments</span>
            <span className="stat-value">₹125K</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Chart Area */}
        <div className="chart-card">
          <div className="card-header">
            <h4>Collection Overview</h4>
            <BarChart3 size={18} className="text-muted" />
          </div>
          <div className="dummy-chart">
            <div className="bar" style={{height: '40%'}}></div>
            <div className="bar" style={{height: '60%'}}></div>
            <div className="bar" style={{height: '50%'}}></div>
            <div className="bar" style={{height: '80%'}}></div>
            <div className="bar" style={{height: '70%'}}></div>
            <div className="bar" style={{height: '95%'}}></div>
            <div className="bar bg-primary" style={{height: '85%'}}></div>
          </div>
          <div className="chart-labels">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          </div>
        </div>

        {/* Side Panel */}
        <div className="side-panel">
          <div className="upcoming-auction">
            <div className="card-header">
              <h4>Upcoming Auction</h4>
              <Calendar size={18} className="text-muted" />
            </div>
            <div className="auction-item">
              <div className="auction-date">
                <span className="month">AUG</span>
                <span className="day">15</span>
              </div>
              <div className="auction-details">
                <h5>Gold Star Chit - G1</h5>
                <p>Value: ₹5,00,000</p>
              </div>
            </div>
          </div>

          <div className="recent-transactions">
            <div className="card-header">
              <h4>Recent Transactions</h4>
            </div>
            <div className="transaction-list">
              <div className="transaction-item">
                <div className="tx-icon receive"><ArrowDownRight size={16} /></div>
                <div className="tx-info">
                  <span className="tx-name">Rahul M.</span>
                  <span className="tx-time">Today, 10:30 AM</span>
                </div>
                <span className="tx-amount success">+₹10,000</span>
              </div>
              <div className="transaction-item">
                <div className="tx-icon receive"><ArrowDownRight size={16} /></div>
                <div className="tx-info">
                  <span className="tx-name">Priya S.</span>
                  <span className="tx-time">Yesterday</span>
                </div>
                <span className="tx-amount success">+₹5,000</span>
              </div>
              <div className="transaction-item">
                <div className="tx-icon pay"><ArrowUpRight size={16} /></div>
                <div className="tx-info">
                  <span className="tx-name">Prize Money (G1)</span>
                  <span className="tx-time">Aug 10</span>
                </div>
                <span className="tx-amount danger">-₹4,75,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
