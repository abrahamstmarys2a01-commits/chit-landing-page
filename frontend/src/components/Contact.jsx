import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactImg from '../assets/contact-image.png';

const Contact = () => {
  return (
    <section className="section section-light" id="contact" style={{ position: 'relative', backgroundColor: '#f8fafc' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-banner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', marginBottom: '4rem', padding: '2rem 0' }}>
          <div className="contact-banner-content">
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, color: '#0f172a', marginBottom: '1.5rem' }}>
              Get in Touch <br/>
              with <span style={{ color: 'var(--primary-color)' }}>ChitManager</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '450px', lineHeight: 1.6 }}>
              Have a question, need support, or want to partner with us? We're here to help.
            </p>
          </div>
          <div className="contact-banner-image" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={contactImg} alt="Support Agent" className="slide-in-right" style={{ maxWidth: '100%', height: 'auto', maxHeight: '450px', borderRadius: '12px' }} />
          </div>
        </div>
        
        <div className="contact-grid">
          
          <div className="contact-form-card contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="contact-icon" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '1rem', borderRadius: '0.75rem' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
                <p>+91  063691 53235</p>
                <p>Mon-Fri from 10am to 5pm</p>
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="contact-icon" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '1rem', borderRadius: '0.75rem' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Email Us</h4>
                <p>info@mediawavetech.com</p>
                {/* <p>sales@chitmaster.com</p> */}
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="contact-icon" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '1rem', borderRadius: '0.75rem' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Visit Us</h4>
                <p> WD-54, Anandha bhavan complex, Second floor, 17/52, Puthur High Rd, 
                  </p>
                <p>Tiruchirappalli, Tamil Nadu 620017....</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-card">
            <form onSubmit={(e) => e.preventDefault()} className="contact-form">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Message</label>
                <textarea placeholder="How can we help you?" rows="4" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
