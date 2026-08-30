import { useEffect, useState } from 'react';
import './Navigation.css';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
      {/* Official TUMU logo */}
      <a href="/" className="navbar-logo-wrap">
        <img src="/logo.png" alt="TUMU Crisp & Cream" className="navbar-logo-img" />
      </a>

      {/* Desktop links */}
      <div className="navbar-links">
        <a href="#/flavors">Flavours</a>
        <a href="#/journey">Journey</a>
        <a href="#/moments">Moments</a>
        <a href="#/find-us">Find Us</a>
        <a href="#/franchise">Franchise</a>
        <a href="#/contact">Contact</a>
      </div>

      {/* Desktop CTA */}
      <div className="navbar-cta">
        <button className="btn btn-pink btn-sm" onClick={() => window.location.hash = '#/contact'}>ORDER NOW →</button>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`navbar-hamburger ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`navbar-drawer ${menuOpen ? 'is-open' : ''}`}>
        <a href="#/flavors" onClick={() => setMenuOpen(false)}>Flavours</a>
        <a href="#/journey" onClick={() => setMenuOpen(false)}>Journey</a>
        <a href="#/moments" onClick={() => setMenuOpen(false)}>Moments</a>
        <a href="#/find-us" onClick={() => setMenuOpen(false)}>Find Us</a>
        <a href="#/franchise" onClick={() => setMenuOpen(false)}>Franchise</a>
        <a href="#/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="btn btn-pink" style={{ marginTop: '1rem' }} onClick={() => { setMenuOpen(false); window.location.hash = '#/contact'; }}>ORDER NOW</button>
      </div>
    </nav>
  );
}
