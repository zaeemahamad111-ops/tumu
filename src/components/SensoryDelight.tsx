import { motion } from 'framer-motion';
import './SensoryDelight.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export function SensoryDelight() {
  return (
    <section className="sensory-section section bg-cream">
      <div className="sensory-container container">

        {/* ── LEFT: TEXT ── */}
        <div className="sensory-content">
          <motion.span className="sensory-tag font-display" {...fadeUp(0)}>
            ✦ TUMU EXPERIENCE
          </motion.span>

          <motion.h2 className="sensory-title font-heading text-pink" {...fadeUp(0.1)}>
            SENSORY<br />DELIGHT
          </motion.h2>

          <motion.p className="sensory-copy" {...fadeUp(0.2)}>
            Layers of crunch.<br />
            Moments of happiness.
          </motion.p>

          <motion.div className="sensory-stats" {...fadeUp(0.3)}>
            <div className="stat">
              <span className="stat-num font-heading text-blue">7+</span>
              <span className="stat-label">Flavours</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num font-heading text-pink">100%</span>
              <span className="stat-label">Premium Fill</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num font-heading text-blue">∞</span>
              <span className="stat-label">Joy</span>
            </div>
          </motion.div>

          {/* CRISP mascot label */}
          <motion.div className="mascot-label mascot-label--blue" {...fadeUp(0.4)}>
            <div className="mascot-avatar bg-blue">C</div>
            <div>
              <strong className="font-heading">CRISP</strong>
              <p>The Crunchy One</p>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: VISUAL ── */}
        <div className="sensory-visual">
          {/* Dot pattern background */}
          <div className="sensory-dots-bg" />

          {/* Large product image */}
          <motion.div
            className="sensory-product-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Main hero visual: cream + sakura + crumbs */}
            <div className="sensory-product-image">
              <img
                src="/sensory-hero.png"
                alt="TUMU — Crisp & Cream sensory delight experience"
              />
            </div>

            {/* Floating strawberry flavour accent */}
            <div className="sensory-flavour-float">
              <img src="/flavour strawberry.png" alt="Strawberry cream splash" />
            </div>

            {/* Floating crumb dots */}
            <div className="crumb crumb-1" />
            <div className="crumb crumb-2" />
            <div className="crumb crumb-3" />
          </motion.div>

          {/* CREAM mascot label */}
          <motion.div className="mascot-label mascot-label--pink" {...fadeUp(0.45)}>
            <div className="mascot-avatar bg-pink">G</div>
            <div>
              <strong className="font-heading">CREAM</strong>
              <p>The Dreamy One</p>
            </div>
          </motion.div>

          {/* Blue stripe accent */}
          <div className="sensory-stripe-accent">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`s-stripe ${i % 2 === 0 ? 'bg-blue' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
