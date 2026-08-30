import { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle } from 'lucide-react';
import './Pages.css';
import '../components/TumuMoments.css';

const MOMENTS_GALLERY = [
  { 
    id: 1, 
    label: 'INDULGENCE', 
    category: 'flavours',
    caption: 'Matcha cream filling meeting double-baked crunch shell.', 
    img: '/background.png',
    likes: 342,
    comments: 18
  },
  { 
    id: 2, 
    label: 'BERRY BLISS', 
    category: 'flavours',
    caption: 'Fresh strawberries whipped into pure, rich dairy cream.', 
    img: '/flavour strawberry.png',
    likes: 512,
    comments: 42
  },
  { 
    id: 3, 
    label: 'CRAFTED IN JAPAN', 
    category: 'brand',
    caption: 'Traditional packaging meeting modern Japanese snack design.', 
    img: '/logo background for design.png',
    likes: 289,
    comments: 11
  },
  { 
    id: 4, 
    label: 'TUMU VIBES', 
    category: 'brand',
    caption: 'Vibrant Pantone pink and blue colors blending with pop culture.', 
    img: '/bg design.png',
    likes: 421,
    comments: 29
  },
  { 
    id: 5, 
    label: 'OUR BOOTH', 
    category: 'store',
    caption: 'TUMU kiosk design: Sleek contours, bright glowing neon lights.', 
    img: '/franchise_store.png',
    likes: 673,
    comments: 89
  },
  { 
    id: 6, 
    label: 'DELIGHTS', 
    category: 'flavours',
    caption: 'Velvety cream swirls, crispy cookie bits and pure joy.', 
    img: '/background.png',
    likes: 310,
    comments: 14
  }
];

export function MomentsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredMoments = activeTab === 'all' 
    ? MOMENTS_GALLERY 
    : MOMENTS_GALLERY.filter(item => item.category === activeTab);

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Shared Joy &amp; Gallery</span>
        <h1 className="page-banner-title font-heading">TUMU MOMENTS</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        {/* Categories Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {['all', 'flavours', 'brand', 'store'].map((tab) => (
            <button
              key={tab}
              className={`btn btn-sm ${activeTab === tab ? 'btn-pink' : 'btn-outline-white'}`}
              style={{ 
                borderRadius: '9999px',
                border: activeTab === tab ? 'none' : '1px solid var(--color-border)',
                color: activeTab === tab ? 'var(--color-white)' : 'var(--color-black)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="page-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}>
          {filteredMoments.map((item) => (
            <div 
              key={item.id} 
              className="moment-card"
              style={{ overflow: 'hidden', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}
            >
              <div className="moment-img-wrap" style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  right: '12px', 
                  background: 'rgba(255,255,255,0.9)', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '9999px',
                  display: 'flex',
                  gap: '0.8rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-black)',
                  alignItems: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Heart size={12} fill="var(--color-pink)" stroke="none" /> {item.likes}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><MessageCircle size={12} /> {item.comments}</span>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <span className="font-display text-pink" style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{item.category}</span>
                <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: '0 0 0.5rem' }}>{item.label}</h3>
                <p style={{ fontSize: '0.85rem', color: '#555', margin: '0', lineHeight: '1.5' }}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
