import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './OurFlavors.css';

const FLAVORS = [
  { id: '01', name: 'MATCHA',        kanji: '抹茶',  bg: '#e8f0dc', accent: '#5a8a3c', img: '/flavours/flavour-1.png' },
  { id: '02', name: 'STRAWBERRY',    kanji: '苺',    bg: '#fce8ec', accent: '#d44060', img: '/flavours/flavour-2.png' },
  { id: '03', name: 'CHOCOLATE',     kanji: 'チョコ', bg: '#ede0d4', accent: '#5c3a1e', img: '/flavours/flavour-3.png' },
  { id: '04', name: 'VANILLA',       kanji: 'バニラ', bg: '#fdf6e3', accent: '#c49a3c', img: '/flavours/flavour-4.png' },
  { id: '05', name: 'CARAMEL',       kanji: 'キャラメル', bg: '#f5e6cc', accent: '#9a5e18', img: '/flavours/flavour-5.png' },
  { id: '06', name: 'COOKIES &\nCREAM', kanji: 'クッキー', bg: '#e8e8e8', accent: '#222', img: '/flavours/flavour-6.png' },
  { id: '07', name: 'YUZU',          kanji: '柚子',  bg: '#fdf7d4', accent: '#c9a600', img: '/flavours/flavour-7.png' },
  { id: '08', name: 'MANGO',         kanji: 'マンゴー', bg: '#fff0cc', accent: '#e69900', img: '/flavours/flavour-8.png' },
];

export function OurFlavors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: scrollLeft + (dir === 'right' ? clientWidth * 0.6 : -clientWidth * 0.6),
      behavior: 'smooth',
    });
  };

  return (
    <section className="flavors-section section" id="flavors">
      <div className="container">
        <div className="flavors-header">
          <div>
            <motion.p
              className="flavors-eyebrow font-display"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ✦ DISCOVER
            </motion.p>
            <motion.h2
              className="font-heading text-blue"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              OUR FLAVOURS
            </motion.h2>
          </div>
          <div className="flavors-nav">
            <button className="flavor-nav-btn" onClick={() => scroll('left')} aria-label="Previous">
              <ArrowLeft size={20} />
            </button>
            <button className="flavor-nav-btn flavor-nav-btn--filled" onClick={() => scroll('right')} aria-label="Next">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flavors-scroll-container" ref={scrollRef}>
        <div className="flavors-track">
          {FLAVORS.map((flavor, i) => (
            <motion.div
              className="flavor-card"
              key={flavor.id}
              style={{ '--card-bg': flavor.bg, '--card-accent': flavor.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Full bleed image */}
              <img
                className="flavor-card-img"
                src={flavor.img}
                alt={flavor.name}
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="flavor-card-overlay" />

              {/* Top row: id + kanji */}
              <div className="flavor-card-top">
                <span className="flavor-id font-display">{flavor.id}</span>
                <span className="flavor-kanji">{flavor.kanji}</span>
              </div>

              {/* Bottom: name + cta */}
              <div className="flavor-bottom">
                <h3 className="flavor-name font-heading">{flavor.name}</h3>
                <button className="flavor-cta">
                  Explore <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
          {/* End spacer */}
          <div style={{ width: '2rem', flexShrink: 0 }} />
        </div>
      </div>
    </section>
  );
}
