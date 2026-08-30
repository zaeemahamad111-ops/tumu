import { useState } from 'react';
import { ArrowLeft, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import './Pages.css';

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Get in Touch</span>
        <h1 className="page-banner-title font-heading">CONTACT US</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left panel: Info */}
          <div>
            <h2 className="font-heading text-black" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              WE'D LOVE TO HEAR FROM YOU
            </h2>
            <p className="font-body" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Have questions about our Japanese-inspired treats? Feedback on a store visit? Or just want to say Konichiwa? 
              Reach out and our support crew will get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: '#fce8ec', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--color-pink)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-heading" style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: 'var(--color-black)' }}>Customer Care</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>+91 22 8899 7766 (Mon-Sat, 10 AM - 7 PM)</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: '#e8f0fb', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--color-blue)',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-heading" style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: 'var(--color-black)' }}>Support Email</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>hello@tumucream.com / support@tumucream.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: '#fdf6e3', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#c49a3c',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-heading" style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: 'var(--color-black)' }}>Corporate Office</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
                    TUMU Indulgence Pvt. Ltd.,<br />
                    Level 5, Capital Tower, BKC G Block,<br />
                    Bandra East, Mumbai - 400051
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display text-pink" style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                FOLLOW OUR MOMENTS
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href="#" className="social-btn font-heading" style={{ display: 'flex', width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: 'var(--color-black)', textDecoration: 'none' }}>IG</a>
                <a href="#" className="social-btn font-heading" style={{ display: 'flex', width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: 'var(--color-black)', textDecoration: 'none' }}>TW</a>
                <a href="#" className="social-btn font-heading" style={{ display: 'flex', width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: 'var(--color-black)', textDecoration: 'none' }}>YT</a>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div>
            <div className="page-form-card" style={{ padding: '2.5rem' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={64} className="text-pink" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 className="font-heading text-black" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>MESSAGE SENT</h3>
                  <p className="font-body" style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Thank you for reaching out to TUMU. We have received your query and will reply to your registered email address within the next 24 business hours.
                  </p>
                  <button 
                    className="btn btn-blue" 
                    style={{ marginTop: '1.5rem', borderRadius: '9999px' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-heading text-black" style={{ fontSize: '1.5rem', margin: '0 0 1.5rem', textAlign: 'center' }}>
                    SEND A MESSAGE
                  </h3>

                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-input" required placeholder="Enter name" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" required placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select className="form-select" required>
                      <option value="">Choose category...</option>
                      <option value="feedback">General Feedback</option>
                      <option value="order">Order Support</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message Details</label>
                    <textarea className="form-textarea" required placeholder="Type your message here..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink form-submit-btn">
                    SEND INQUIRY
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
