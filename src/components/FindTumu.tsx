import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FindTumu.css';

// Approximate lat/lon → SVG positions for India map
const CITIES = [
  { name: 'Mumbai',    x: '22%', y: '52%' },
  { name: 'Delhi',     x: '38%', y: '22%' },
  { name: 'Bengaluru', x: '36%', y: '72%' },
  { name: 'Kolkata',   x: '62%', y: '38%' },
  { name: 'Hyderabad', x: '40%', y: '60%' },
  { name: 'Chennai',   x: '44%', y: '75%' },
  { name: 'Pune',      x: '28%', y: '56%' },
];

export function FindTumu() {
  return (
    <section className="find-section section" id="find-us">

      {/* Stripe pattern overlay */}
      <div className="find-stripe-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`find-stripe-line ${i % 3 === 0 ? 'opaque' : ''}`} />
        ))}
      </div>

      <div className="container find-container">

        {/* Left content */}
        <div className="find-content">
          <motion.p
            className="find-eyebrow font-display"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ LOCATIONS
          </motion.p>
          <motion.h2
            className="find-title font-heading text-white"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            FIND TUMU<br />NEAR YOU
          </motion.h2>
          <motion.p
            className="find-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            TUMU is spreading across India — find your nearest crisp fix.
          </motion.p>
          <motion.button
            className="btn btn-pink btn-with-icon"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            VIEW ALL LOCATIONS <ArrowRight className="icon-arrow" size={18} />
          </motion.button>

          {/* City list */}
          <div className="find-city-list">
            {CITIES.map((c, i) => (
              <motion.span
                key={c.name}
                className="find-city-pill font-body"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.05 }}
              >
                {c.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right — Stylised India map */}
        <div className="find-visual">
          <div className="india-map-wrap">
            {/* India outline SVG — simplified shape */}
            <svg
              className="india-svg"
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Custom Map Image */}
              <image href="/tumu-india-map.png" width="400" height="500" preserveAspectRatio="xMidYMid contain" />
            </svg>

            {/* Animated city pins */}
            {CITIES.map((city, i) => (
              <motion.div
                key={city.name}
                className="map-pin-wrap"
                style={{ left: city.x, top: city.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Pulse ring */}
                <div className="pin-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                {/* Dot */}
                <div className="pin-dot" />
                {/* City label */}
                <span className="pin-label font-body">{city.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
