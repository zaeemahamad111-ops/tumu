import { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import './Pages.css';

export function FranchisePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Business Opportunities</span>
        <h1 className="page-banner-title font-heading">TUMU FRANCHISE</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left panel: Info & Benefits */}
          <div>
            <h2 className="font-heading text-black" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              GROW WITH INDIA'S FASTEST GROWING DESSERT BRAND
            </h2>
            <p className="font-body" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              TUMU brings authentic Japanese sweet indulgence to the modern Indian consumer. By partnering with us, 
              you gain access to a proven premium business model, optimized supply chain channels, and a highly popular brand identity.
            </p>

            <h3 className="font-display text-pink" style={{ fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              FRANCHISE ADVANTAGES
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {[
                'Low overhead costs with small-footprint kiosk/booth formats.',
                'Premium ingredients and standardized pre-mixes with zero manual wastage.',
                'Centrally managed national marketing and localized grand launch campaigns.',
                'Comprehensive 14-day training covering operations, POS systems, and customer delight.'
              ].map((adv, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} className="text-blue" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#333' }}>{adv}</span>
                </div>
              ))}
            </div>

            <div 
              style={{ 
                background: 'var(--color-cream)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '16px', 
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <img 
                src="/franchise_store.png" 
                alt="TUMU Kiosk Model" 
                style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover', height: '200px' }}
              />
              <span className="font-heading" style={{ fontSize: '1rem', color: 'var(--color-black)' }}>TUMU Kiosk Model Showcase</span>
            </div>
          </div>

          {/* Right panel: Inquiry Form */}
          <div>
            <div className="page-form-card" style={{ padding: '2.5rem' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={64} className="text-pink" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 className="font-heading text-black" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>INQUIRY RECEIVED</h3>
                  <p className="font-body" style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Thank you for your interest in a TUMU partnership. Our franchise development coordinator will contact you via email or phone within the next 48 business hours.
                  </p>
                  <button 
                    className="btn btn-blue" 
                    style={{ marginTop: '1.5rem', borderRadius: '9999px' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-heading text-black" style={{ fontSize: '1.5rem', margin: '0 0 1.5rem', textAlign: 'center' }}>
                    FRANCHISE INQUIRY
                  </h3>

                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-input" required placeholder="Enter your name" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" required placeholder="Enter phone number" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" required placeholder="Enter email address" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target City</label>
                    <input type="text" className="form-input" required placeholder="City you wish to open store in" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Expected Investment</label>
                    <select className="form-select" required>
                      <option value="">Select range...</option>
                      <option value="15-25">₹15 Lakhs - ₹25 Lakhs</option>
                      <option value="25-40">₹25 Lakhs - ₹40 Lakhs</option>
                      <option value="40+">₹40 Lakhs+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Prior Business Experience</label>
                    <textarea className="form-textarea" placeholder="Briefly describe your business background..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink form-submit-btn">
                    SUBMIT PARTNERSHIP FORM
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
