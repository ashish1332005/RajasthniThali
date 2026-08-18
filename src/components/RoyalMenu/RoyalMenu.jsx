import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Search, Sparkles } from 'lucide-react';
import './RoyalMenu.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MENU_ITEMS = [
  {
    id: 'm1',
    category: 'curries',
    name: 'Gatte Ki Sabzi',
    hindiName: 'जोधपुरी गट्टे की सब्जी',
    price: 240,
    isJain: true,
    isPopular: true,
    desc: 'Gram flour dumplings in spiced yoghurt gravy cooked in mustard oil & fennel.',
    image: '/images/thali/Gatte.png'
  },
  {
    id: 'm2',
    category: 'curries',
    name: 'Ker Sangri',
    hindiName: 'कैरि सांगरी',
    price: 260,
    isJain: true,
    isPopular: true,
    desc: 'Desert capers & dried beans cooked in traditional Thar desert spices.',
    image: '/images/thali/kersangri.png'
  },
  {
    id: 'm3',
    category: 'thali',
    name: 'Maharana Grand Rajwada Thali',
    hindiName: 'महाराणा भव्य राजवाड़ा थाली',
    price: 799,
    isJain: true,
    isPopular: true,
    desc: 'The ultimate royal feast! 4 Desi Ghee Batis, Panchmel Dal, 2 Churma varieties, Gatte ki Sabzi, Ker Sangri, Lahsun Chutney & Chaas.',
    image: '/images/thali/Thali.png'
  },
  {
    id: 'm4',
    category: 'bati',
    name: 'Shahi Dry Fruit Bati (2 Pcs)',
    hindiName: 'शाही ड्राई फ्रूट बाटी',
    price: 260,
    isJain: true,
    isPopular: true,
    desc: 'Whole wheat batis stuffed with mawa, crushed cashew & raisins, drenched in pure cow ghee.',
    image: '/images/thali/Bati.png'
  },
  {
    id: 'm5',
    category: 'curries',
    name: 'Panchmel Tadka Dal',
    hindiName: 'पंचमेल तड़का दाल',
    price: 220,
    isJain: true,
    isPopular: false,
    desc: 'Slow-cooked 5-lentil claypot dal tempered with Mathania chillies & cumin.',
    image: '/images/thali/Daal.png'
  },
  {
    id: 'm6',
    category: 'desserts',
    name: 'Mewari Kesar Churma',
    hindiName: 'मेवाड़ी केसर चूरमा',
    price: 250,
    isJain: true,
    isPopular: true,
    desc: 'Roasted hand-crushed wheat sweet cooked in organic jaggery & Kashmiri saffron.',
    image: '/images/thali/Churma.png'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'thali', label: 'Royal Thalis' },
  { id: 'curries', label: 'Royal Curries' },
  { id: 'bati', label: 'Bati & Churma' },
  { id: 'desserts', label: 'Sweets & Drinks' }
];

export default function RoyalMenu() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useGSAP(() => {
    gsap.fromTo('.menu-card-mock', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' }
    );
  }, { scope: containerRef, dependencies: [activeCategory, searchQuery] });

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="menu" className="menu-section" ref={containerRef}>
      <div className="container">
        
        {/* Header */}
        <div className="menu-header text-center">
          <span className="mock-eyebrow">
            <Sparkles size={14} className="gold-icon" /> OUR SIGNATURE MENU
          </span>
          <h2 className="section-title">
            KHAAS DISHES, <span className="highlight-gold">KHAAS ANDAAZ</span>
          </h2>
          <p className="section-subtitle">
            Crafted with authentic khansama recipes, hand-ground spices, and 100% pure Desi Ghee.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="menu-filter-bar">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cat-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-input-box">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Dish Cards Grid */}
        <div className="menu-grid-mock">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card-mock">
              
              <div className="mock-card-img-box">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="mock-card-content">
                <div className="mock-card-header-row">
                  <h3 className="mock-card-title">{item.name.toUpperCase()}</h3>
                  <span className="mock-card-hindi">{item.hindiName}</span>
                </div>

                <p className="mock-card-desc">{item.desc}</p>

                <div className="mock-card-footer">
                  <span className="mock-card-price">₹{item.price}</span>
                  {item.isPopular && <span className="menu-tag-pill">POPULAR</span>}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
