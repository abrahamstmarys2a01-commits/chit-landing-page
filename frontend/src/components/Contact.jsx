import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="text-center">
          <div className="badge">Get In Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Have questions about ChitMaster? Our team is here to help you.</p>
        </div>
        
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
          
          <div className="contact-form-card" style={{ background: 'white', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
