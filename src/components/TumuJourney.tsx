import { motion } from 'framer-motion';
import './TumuJourney.css';

const MILESTONES = [
  {
    id: '01',
    title: 'ROOTED IN JAPAN',
    desc: 'Where every great flavour begins — in tradition.',
    icon: '⛩',
    color: 'var(--color-blue)',
  },
  {
    id: '02',
    title: 'INSPIRED BY CULTURE',
    desc: 'Anime, art and flavour collide.',
    icon: '🎌',
    color: 'var(--color-pink)',
  },
  {
    id: '03',
    title: 'CRAFTED WITH CARE',
    desc: 'Every layer of crunch, every drop of cream.',
    icon: '🧁',
    color: 'var(--color-blue)',
  },
  {
    id: '04',
    title: 'BORN AS TUMU',
    desc: 'A brand built on crisp perfection.',
    icon: '✦',
    color: 'var(--color-pink)',
  },
  {
    id: '05',
    title: 'MADE FOR INDIA',
    desc: 'From Tokyo to your city — TUMU arrives.',
    icon: '🏛',
    color: 'var(--color-blue)',
  },
];

export function TumuJourney() {
  return (
    <section className="journey-section" id="journey">
      <div className="container">

        {/* Header */}
        <div className="journey-header">
          <motion.p
            className="journey-eyebrow font-display"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ OUR STORY
          </motion.p>
          <motion.h2
            className="journey-title font-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-black">FROM JAPAN</span><br />
            <span className="text-blue">TO INDIA</span>
          </motion.h2>
        </div>

        {/* Journey track */}
        <div className="journey-track">
          {/* SVG curve line */}
          <svg
            className="journey-svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,60 C150,10 300,110 450,60 C600,10 750,110 900,60 C1050,10 1150,60 1200,60"
              stroke="url(#journeyGrad)"
              strokeWidth="2"
              strokeDasharray="8 6"
            />
            <defs>
              <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-blue)" />
                <stop offset="50%" stopColor="var(--color-pink)" />
                <stop offset="100%" stopColor="var(--color-blue)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones */}
          <div className="journey-milestones">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.id}
                className={`milestone ${i % 2 === 0 ? 'milestone--up' : 'milestone--down'}`}
                initial={{ opacity: 0, y: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="milestone-card" style={{ '--m-color': m.color } as React.CSSProperties}>
                  <div className="milestone-icon">{m.icon}</div>
                  <span className="milestone-id font-display">{m.id}</span>
                  <h4 className="milestone-name font-heading">{m.title}</h4>
                  <p className="milestone-desc">{m.desc}</p>
                </div>
                <div className="milestone-connector">
                  <div className="milestone-dot" style={{ background: m.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
