import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Franchise.css';

export function Franchise() {
  return (
    <section className="franchise-section" id="franchise">

      {/* Dot pattern */}
      <div className="franchise-dot-bg" />

      <div className="container franchise-container">

        {/* Left content */}
        <motion.div
          className="franchise-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="franchise-eyebrow font-display">✦ PARTNER WITH US</p>
          <h2 className="franchise-title font-heading text-white">
            BRING TUMU<br />TO YOUR<br />CITY
          </h2>
          <p className="franchise-desc">
            Join the fastest-growing Japanese-inspired snack brand in India.
            Premium support, world-class training, iconic brand — zero guesswork.
          </p>

          <div className="franchise-stats">
            <div className="fstat">
              <span className="fstat-num font-heading">7+</span>
              <span className="fstat-label">Cities</span>
            </div>
            <div className="fstat-divider" />
            <div className="fstat">
              <span className="fstat-num font-heading">30+</span>
              <span className="fstat-label">Outlets</span>
            </div>
            <div className="fstat-divider" />
            <div className="fstat">
              <span className="fstat-num font-heading">∞</span>
              <span className="fstat-label">Potential</span>
            </div>
          </div>

          <motion.button
            className="btn btn-blue btn-large btn-with-icon"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            START A TUMU BUSINESS
            <ArrowRight className="icon-arrow" size={22} />
          </motion.button>
        </motion.div>

        {/* Right: storefront visual */}
        <motion.div
          className="franchise-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="franchise-img-frame">
            <img
              src="/franchise_store.png"
              alt="TUMU Franchise Kiosk"
            />
            {/* Floating badge */}
            <div className="franchise-badge">
              <span className="font-heading text-pink" style={{ fontSize: '1.5rem' }}>NOW</span>
              <span className="font-heading" style={{ fontSize: '1rem' }}>OPEN</span>
              <span style={{ fontSize: '0.65rem', color: '#888' }}>NEAR YOU</span>
            </div>
          </div>

          {/* Accent stripe */}
          <div className="franchise-accent-stripe" />
        </motion.div>

      </div>
    </section>
  );
}
