import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section cta-section" id="cta">
      <div className="container">
        <div className="cta-box text-center">
          <h2>Manage Your Chit Business Smarter</h2>
          <p>
            Bring members, payments, auctions and reports together in one simple platform.
            Stop using spreadsheets and WhatsApp. Upgrade to ChitMaster today.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary cta-btn">
              Start Free Trial <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline cta-btn-outline">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
