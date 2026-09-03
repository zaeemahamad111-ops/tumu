import { motion } from 'framer-motion';
import './TumuMoments.css';

const GRID_ITEMS = [
  { id: 1, label: 'INDULGENCE',  caption: 'Crisp outside, creamy inside',  size: 'large',    img: '/flavours/flavour-4.png'   },
  { id: 2, label: 'BERRY BLISS', caption: 'Bursting with real fruit cream', size: 'medium',   img: '/flavours/flavour-5.png' },
  { id: 3, label: 'BRAND',       caption: 'Crafted in Japan',               size: 'small-1',  img: '/flavours/flavour-6.png' },
  { id: 4, label: 'VIBES',       caption: 'Flavour meets design',           size: 'small-2',  img: '/flavours/flavour-7.png'    },
];

export function TumuMoments() {
  return (
    <section className="moments-section section" id="moments">
      <div className="container">

        {/* Header */}
        <div className="moments-header">
          <motion.p
            className="moments-eyebrow font-display"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ LIFESTYLE
          </motion.p>
          <motion.h2
            className="moments-title font-display"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-blue">TUMU MOMENTS.</span><br />
            <span className="text-pink">MADE TO SHARE.</span>
          </motion.h2>
          <motion.p
            className="moments-desc"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every bite is a memory waiting to be made.
          </motion.p>
        </div>

        {/* Photo grid */}
        <div className="moments-grid">
          {GRID_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className={`moment-card moment-card--${item.size}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="moment-img-wrap">
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                />
                {/* overlay on hover */}
                <div className="moment-overlay" />
              </div>
              <div className="moment-info">
                <span className="moment-label font-display">{item.label}</span>
                <p className="moment-caption">{item.caption}</p>
              </div>
            </motion.div>
          ))}

          {/* Floating mascot badge */}
          <motion.div
            className="mascot-float-badge"
            animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <div className="mascot-float-inner">
              <span className="mascot-float-icon">✦</span>
              <span className="font-heading">CRISP</span>
              <span style={{ fontSize: '0.7rem', color: '#888' }}>loves this</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
