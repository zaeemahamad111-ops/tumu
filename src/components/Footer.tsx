import './Footer.css';
import { ArrowRight } from 'lucide-react';


export function Footer() {
  return (
    <footer className="footer">

      {/* ── Top band ── */}
      <div className="footer-top-band">
        <div className="ftb-stripes">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`ftb-stripe ${i % 2 === 0 ? 'blue' : 'pink'}`} />
          ))}
        </div>
      </div>

      {/* ── Newsletter bar ── */}
      <div className="footer-newsletter-bar">
        <div className="container fnb-inner">
          <p className="fnb-headline font-heading">
            STAY IN THE <span className="text-pink">LOOP</span>
          </p>
          <div className="fnb-form">
            <input type="email" placeholder="Your email address" className="fnb-input font-body" />
            <button className="btn btn-pink btn-with-icon fnb-btn">
              SUBSCRIBE <ArrowRight className="icon-arrow" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="footer-main container">

        {/* Brand column */}
        <div className="footer-brand">
          <img src="/logo.png" alt="TUMU Crisp & Cream" className="footer-logo-img" />
          <p className="footer-statement">
            A Japanese-inspired crisp outside,<br />
            creamy inside experience. Made for India.
          </p>
          {/* Crafted in Japan badge */}
          <div className="footer-japan-badge">
            <img src="/logo background for design.png" alt="Crafted in Japan" />
          </div>
          <div className="footer-socials">
            <a href="#" className="social-btn font-heading" aria-label="Instagram">IG</a>
            <a href="#" className="social-btn font-heading" aria-label="Twitter">TW</a>
            <a href="#" className="social-btn font-heading" aria-label="YouTube">YT</a>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-links">
          <div className="footer-col">
            <h4 className="footer-col-heading font-heading">MENU</h4>
            <a href="#/flavors" className="footer-link">Our Flavours</a>
            <a href="#/flavors" className="footer-link">Ingredients</a>
            <a href="#/flavors" className="footer-link">Allergen Info</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-heading font-heading">COMPANY</h4>
            <a href="#/journey" className="footer-link">The Journey</a>
            <a href="#/franchise" className="footer-link">Franchise</a>
            <a href="#/contact" className="footer-link">Careers</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-heading font-heading">SUPPORT</h4>
            <a href="#/contact" className="footer-link">Contact Us</a>
            <a href="#/find-us" className="footer-link">Find a Store</a>
            <a href="#/contact" className="footer-link">Feedback</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-heading font-heading">CONNECT</h4>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Twitter / X</a>
            <a href="#" className="footer-link">YouTube</a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container fbt-inner">
          <p className="fbt-copy">
            © {new Date().getFullYear()} TUMU — Crisp &amp; Cream. All rights reserved.
          </p>
          <div className="fbt-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
        {/* Dot row */}
        <div className="footer-dot-row">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={`footer-dot ${i % 3 === 0 ? 'dot-blue' : i % 3 === 1 ? 'dot-pink' : ''}`} />
          ))}
        </div>
      </div>
    </footer>
  );
}
