import React from 'react';
import { Landmark, Globe, MessageCircle, Share2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Landmark className="logo-icon" size={24} />
            <span>ChitMaster</span>
          </div>
          <p className="footer-desc">
            The complete operating system for modern chit fund businesses.
            Manage smarter, grow faster.
          </p>
          <div className="social-links">
            <a href="#"><Globe size={18} /></a>
            <a href="#"><MessageCircle size={18} /></a>
            <a href="#"><Share2 size={18} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#reports">Reports</a>
            <a href="#security">Security</a>
            <a href="#">Pricing</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Data Processing</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} ChitMaster Inc. All rights reserved.</p>
        <div className="contact-info">
          <Mail size={16} />info@mediawavetech.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
