import { ArrowLeft } from 'lucide-react';
import './Pages.css';
import '../components/TumuJourney.css';

const TIMELINE_STEPS = [
  {
    id: '01',
    name: 'ROOTED IN JAPAN',
    desc: 'Our journey begins in Japan, drawing inspiration from centuries-old baking methods and traditional tea house flavors to create a snack that is both crisp and cream.',
    emoji: '⛩️',
    color: 'var(--color-blue)',
    year: '2024 - Foundation'
  },
  {
    id: '02',
    name: 'INSPIRED BY CULTURE',
    desc: 'Anime, pop culture, art, and food collide. TUMU is a celebration of vibrant Japanese lifestyle, curated specifically to bring authentic experiences to life.',
    emoji: '🎏',
    color: 'var(--color-pink)',
    year: '2024 - Creative Development'
  },
  {
    id: '03',
    name: 'CRAFTED WITH CARE',
    desc: 'Every bite is engineered to perfection. We meticulously double-bake our outer shells for maximum crunch, then fill them with slow-churned premium velvet cream.',
    emoji: '🧁',
    color: 'var(--color-blue)',
    year: '2025 - Recipe Masterclass'
  },
  {
    id: '04',
    name: 'BORN AS TUMU',
    desc: 'Unveiled as TUMU, representing the crisp sound of biting and the smooth cream core inside. We established our flagship brand identity based on Pantone blue and pink.',
    emoji: '✨',
    color: 'var(--color-pink)',
    year: '2025 - Branding Launch'
  },
  {
    id: '05',
    name: 'MADE FOR INDIA',
    desc: 'TUMU arrives in India! Bridging global flavors with local love, we open premium design stores, kiosks, and online shipping channels to deliver pure indulgence.',
    emoji: '🏛️',
    color: 'var(--color-blue)',
    year: '2026 - Indian Expansion'
  }
];

export function JourneyPage() {
  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Our Story &amp; Heritage</span>
        <h1 className="page-banner-title font-heading">TUMU JOURNEY</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        {/* Narrative introduction */}
        <div style={{ maxWidth: '800px', margin: '0 auto 5rem', textAlign: 'center' }}>
          <h2 className="font-heading text-pink" style={{ fontSize: '2rem', marginBottom: '1rem' }}>FROM TOKYO TO TOUR CITIES</h2>
          <p className="font-body" style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
            TUMU is more than a snack; it is a cultural connection. We blend traditional Japanese culinary precision 
            with modern food design to create double-texture treats that elevate simple snack moments into gourmet indulgences.
            Follow our path from our core inspirations to our current journey in India.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', paddingLeft: '2rem' }}>
          {/* Central Line */}
          <div style={{ 
            position: 'absolute', 
            left: 'calc(2rem + 15px)', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--color-blue), var(--color-pink))', 
            opacity: 0.3 
          }} />

          {TIMELINE_STEPS.map((step) => (
            <div 
              key={step.id} 
              style={{ 
                position: 'relative', 
                marginBottom: '4rem', 
                display: 'flex', 
                gap: '2rem' 
              }}
            >
              {/* Dot indicator */}
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: 'var(--color-white)', 
                  border: `4px solid ${step.color}`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 800, 
                  fontSize: '0.8rem', 
                  zIndex: 2, 
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}
              >
                {step.emoji}
              </div>

              {/* Card content */}
              <div 
                style={{ 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '16px', 
                  padding: '2rem', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  width: '100%' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
                  <span className="font-heading" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: step.color }}>{step.year}</span>
                  <span className="font-heading text-pink" style={{ fontSize: '1.2rem' }}>#{step.id}</span>
                </div>
                <h3 className="font-heading text-black" style={{ fontSize: '1.4rem', margin: '0 0 1rem' }}>{step.name}</h3>
                <p className="font-body" style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
