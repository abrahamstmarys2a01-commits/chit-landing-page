import React from 'react';
import { Landmark, Globe, MessageCircle, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src={logoImg} alt="ChitManager Logo" className="logo-img" />
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
            <Link to="/features">Features</Link>
            <Link to="/reports">Reports</Link>
            <Link to="/">Security</Link>
            <Link to="/">Pricing</Link>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
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
