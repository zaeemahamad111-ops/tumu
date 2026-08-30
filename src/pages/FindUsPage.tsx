import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import './Pages.css';
import '../components/FindTumu.css';

const STORE_LOCATIONS = [
  {
    city: 'Mumbai',
    coords: { x: '22%', y: '52%' },
    stores: [
      { name: 'TUMU Bandra West', address: 'Shop 4, Carter Road Promenade, Bandra West, Mumbai - 400050', phone: '+91 22 4567 8901', hours: '11:00 AM - 11:00 PM' },
      { name: 'TUMU Phoenix Palladium', address: 'Level 2, Food Court, Palladium Mall, Lower Parel, Mumbai - 400013', phone: '+91 22 4567 8902', hours: '10:00 AM - 10:00 PM' }
    ]
  },
  {
    city: 'Delhi',
    coords: { x: '38%', y: '22%' },
    stores: [
      { name: 'TUMU Connaught Place', address: 'Block H, Radial Road 4, Connaught Place, New Delhi - 110001', phone: '+91 11 4321 0987', hours: '11:00 AM - 11:00 PM' },
      { name: 'TUMU Select CITYWALK', address: '1st Floor, Food Court, Select CITYWALK Mall, Saket, New Delhi - 110017', phone: '+91 11 4321 0988', hours: '10:00 AM - 10:00 PM' }
    ]
  },
  {
    city: 'Bengaluru',
    coords: { x: '36%', y: '72%' },
    stores: [
      { name: 'TUMU Indiranagar', address: '12th Main Road, Hal 2nd Stage, Indiranagar, Bengaluru - 560038', phone: '+91 80 4987 6543', hours: '11:00 AM - 11:00 PM' },
      { name: 'TUMU Forum Rex Walk', address: 'Brigade Road, Ashok Nagar, Bengaluru - 560001', phone: '+91 80 4987 6544', hours: '11:00 AM - 11:30 PM' }
    ]
  },
  {
    city: 'Kolkata',
    coords: { x: '62%', y: '38%' },
    stores: [
      { name: 'TUMU Park Street', address: 'Mcleod House, 3 Park Street, Kolkata - 700016', phone: '+91 33 2244 6688', hours: '11:00 AM - 10:30 PM' }
    ]
  },
  {
    city: 'Hyderabad',
    coords: { x: '40%', y: '60%' },
    stores: [
      { name: 'TUMU Jubilee Hills', address: 'Road No. 36, Jubilee Hills, Hyderabad - 500033', phone: '+91 40 6688 9900', hours: '11:00 AM - 11:00 PM' }
    ]
  },
  {
    city: 'Chennai',
    coords: { x: '44%', y: '75%' },
    stores: [
      { name: 'TUMU Express Avenue', address: '3rd Floor, Express Avenue Mall, Royapettah, Chennai - 600014', phone: '+91 44 2846 1122', hours: '10:00 AM - 10:00 PM' }
    ]
  },
  {
    city: 'Pune',
    coords: { x: '28%', y: '56%' },
    stores: [
      { name: 'TUMU Koregaon Park', address: 'Lunkad Sky Vista, Viman Nagar, Pune - 411014', phone: '+91 20 6789 0123', hours: '11:00 AM - 11:00 PM' }
    ]
  }
];

export function FindUsPage() {
  const [selectedCity, setSelectedCity] = useState(STORE_LOCATIONS[0]);

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Stores &amp; Addresses</span>
        <h1 className="page-banner-title font-heading">FIND US</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        <div className="grid-two-col grid-find">
          
          {/* Left panel: List & details */}
          <div className="find-stores-list">
            <h2 className="font-heading text-black" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>SELECT YOUR CITY</h2>
            
            {/* Quick city tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {STORE_LOCATIONS.map((loc) => (
                <button
                  key={loc.city}
                  className={`btn btn-sm ${selectedCity.city === loc.city ? 'btn-blue' : 'btn-outline-white'}`}
                  style={{ 
                    borderRadius: '8px', 
                    fontWeight: 700, 
                    border: selectedCity.city === loc.city ? 'none' : '1.5px solid var(--color-border)',
                    color: selectedCity.city === loc.city ? 'white' : 'var(--color-black)'
                  }}
                  onClick={() => setSelectedCity(loc)}
                >
                  {loc.city}
                </button>
              ))}
            </div>

            {/* Selected City Outlets */}
            <h3 className="font-display text-pink" style={{ fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-pink)', paddingBottom: '0.5rem' }}>
              {selectedCity.city} OUTLETS
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {selectedCity.stores.map((store, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: 'var(--color-white)', 
                    border: '1.5px solid var(--color-border)', 
                    borderRadius: '16px', 
                    padding: '1.75rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
                  }}
                >
                  <h4 className="font-heading text-black" style={{ fontSize: '1.25rem', margin: '0 0 1rem' }}>{store.name}</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#555' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <MapPin size={16} className="text-pink" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{store.address}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <Clock size={16} className="text-blue" />
                      <span>{store.hours}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <Phone size={16} className="text-blue" />
                      <span>{store.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Static Indian map visual */}
          <div className="find-map-visual" style={{ position: 'relative', background: 'var(--color-cream)', borderRadius: '24px', padding: '2rem', display: 'flex', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
            <svg 
              className="find-map-svg" 
              viewBox="0 0 400 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', maxWidth: '350px' }}
            >
              {/* Simplified India Map Outline */}
              <path
                d="M180,20 L260,30 L310,70 L340,100 L360,140 L370,180 L360,220 L370,260 L350,300 L310,340 L280,380 L250,420 L220,455 L200,480 L175,455 L150,420 L130,390 L100,350 L70,310 L50,270 L40,230 L50,190 L40,150 L60,110 L90,75 L130,45 Z"
                fill="#ffffff"
                stroke="#c3d5ef"
                strokeWidth="2.5"
              />

              {/* Pin indicator lines and city markers */}
              {STORE_LOCATIONS.map((loc) => {
                const isActive = loc.city === selectedCity.city;
                return (
                  <g 
                    key={loc.city} 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedCity(loc)}
                  >
                    <circle
                      cx={loc.coords.x}
                      cy={loc.coords.y}
                      r={isActive ? 8 : 5}
                      fill={isActive ? 'var(--color-pink)' : 'var(--color-blue)'}
                      stroke="#ffffff"
                      strokeWidth="2"
                      style={{ transition: 'all 0.3s' }}
                    />
                    {isActive && (
                      <circle
                        cx={loc.coords.x}
                        cy={loc.coords.y}
                        r="14"
                        stroke="var(--color-pink)"
                        strokeWidth="1.5"
                        fill="none"
                        style={{ opacity: 0.5 }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* City label helper on map */}
            <div style={{ position: 'absolute', bottom: '1rem', right: '1.5rem', background: 'var(--color-white)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid var(--color-border)' }}>
              Selected: <span className="text-pink">{selectedCity.city}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
