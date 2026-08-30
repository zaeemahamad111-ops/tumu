import { useState } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import './Pages.css';
import '../components/OurFlavors.css';

const ALL_FLAVORS = [
  { 
    id: '01', 
    name: 'MATCHA', 
    kanji: '抹茶', 
    bg: '#e8f0dc', 
    accent: '#5a8a3c', 
    emoji: '🍵', 
    img: '/background.png',
    desc: 'Crafted using authentic Uji green tea powder, delivering a perfect balance of earthy bitterness and rich sweet cream.',
    ingredients: 'Ceremonial Uji Matcha, Pure Milk Cream, Crisp Rice Shell.'
  },
  { 
    id: '02', 
    name: 'STRAWBERRY', 
    kanji: '苺', 
    bg: '#fce8ec', 
    accent: '#d44060', 
    emoji: '🍓', 
    img: '/flavour strawberry.png',
    desc: 'Bursting with real sun-ripened strawberry puree folded into our smooth dairy cream core for a refreshingly sweet delight.',
    ingredients: 'Tochigi Strawberries, Pure Velvet Cream, Baked Pastry Shell.'
  },
  { 
    id: '03', 
    name: 'CHOCOLATE', 
    kanji: 'チョコ', 
    bg: '#ede0d4', 
    accent: '#5c3a1e', 
    emoji: '🍫', 
    img: '/background.png',
    desc: 'A decadent 70% dark Belgian cocoa cream filling, wrapped inside our signature golden-crisp shell.',
    ingredients: 'Dark Cocoa Beans, Creamy Ganache, Toasted Shell.'
  },
  { 
    id: '04', 
    name: 'VANILLA', 
    kanji: 'バニラ', 
    bg: '#fdf6e3', 
    accent: '#c49a3c', 
    emoji: '🤍', 
    img: '/background.png',
    desc: 'Infused with premium Madagascar bourbon vanilla beans, offering a timelessly aromatic and comforting experience.',
    ingredients: 'Madagascar Vanilla Pods, Pure Cream, Traditional Crust.'
  },
  { 
    id: '05', 
    name: 'CARAMEL', 
    kanji: 'キャラメル', 
    bg: '#f5e6cc', 
    accent: '#9a5e18', 
    emoji: '🍯', 
    img: '/flavour strawberry.png',
    desc: 'Rich, slow-cooked salted caramel cream with a touch of sea salt, creating a buttery sweet and savory sensation.',
    ingredients: 'Salted Caramel, Dairy Cream, Golden Crust.'
  },
  { 
    id: '06', 
    name: 'COOKIES & CREAM', 
    kanji: 'クッキー', 
    bg: '#e8e8e8', 
    accent: '#222222', 
    emoji: '🍪', 
    img: '/background.png',
    desc: 'Crunchy chocolate cookie bits blended into our fresh sweet cream core for double the crunch experience.',
    ingredients: 'Cocoa Cookies, White Sweet Cream, Toasted Shell.'
  },
  { 
    id: '07', 
    name: 'YUZU', 
    kanji: '柚子', 
    bg: '#fdf7d4', 
    accent: '#c9a600', 
    emoji: '🍋', 
    img: '/background.png',
    desc: 'A bright, zesty citrus cream filling made with fresh yuzu extract from Japan, bringing a citrusy pop to your tastebuds.',
    ingredients: 'Japanese Yuzu Extract, Citrus Curd Cream, Baked Shell.'
  },
];

export function FlavorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFlavors = ALL_FLAVORS.filter(flavor => 
    flavor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Discover the Collection</span>
        <h1 className="page-banner-title font-heading">OUR FLAVOURS</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        {/* Search bar */}
        <div style={{ maxWidth: '400px', margin: '0 auto 3rem' }}>
          <input
            type="text"
            className="form-input"
            placeholder="Search flavours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="page-grid">
          {filteredFlavors.map((flavor) => (
            <div 
              key={flavor.id} 
              className="flavor-card"
              style={{ 
                '--card-bg': flavor.bg, 
                '--card-accent': flavor.accent 
              } as React.CSSProperties}
            >
              <div className="flavor-card-bg" />
              <div className="flavor-card-inner">
                <div className="flavor-top">
                  <span className="flavor-id font-heading" style={{ color: flavor.accent }}>{flavor.id}</span>
                  <span className="flavor-kanji" style={{ color: flavor.accent }}>{flavor.kanji}</span>
                </div>

                <div className="flavor-visual">
                  <div className="flavor-emoji">{flavor.emoji}</div>
                  <div className="flavor-product-img">
                    <img
                      src={flavor.img}
                      alt={flavor.name}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flavor-bottom" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.5rem' }}>
                  <h3 className="flavor-name font-heading">{flavor.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#555', margin: '0 0 0.5rem', lineHeight: '1.5' }}>{flavor.desc}</p>
                  <div style={{ fontSize: '0.75rem', color: '#777', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.5rem', marginBottom: '0.5rem' }}>
                    <strong>Ingredients: </strong>{flavor.ingredients}
                  </div>
                  <button 
                    className="btn btn-pink btn-sm btn-with-icon" 
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <ShoppingBag size={16} /> ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
