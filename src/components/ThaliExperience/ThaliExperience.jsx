import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Flame, Sparkles, Droplets, Info, CheckCircle2, ChevronRight, RefreshCw } from 'lucide-react';
import './ThaliExperience.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const THALI_ITEMS = [
  {
    id: 'bati',
    name: 'Desi Ghee Bati',
    hindiName: 'देसी घी बाटी',
    image: '/images/thali/Bati.png',
    spiceLevel: 1,
    gheeLevel: 5,
    tag: 'Baked in Cow-Dung Dungar',
    desc: 'Golden wheat spheres baked over charcoal & dungar fuel, dipped generously in hot A2 Desi Cow Ghee.',
    details: 'Crafted from coarse whole wheat, ajwain seeds, and curd. Crushed warm and drenched in molten ghee before serving.',
    origin: 'Mewar Royal Army Rations (14th Century)'
  },
  {
    id: 'dal',
    name: 'Panchmel Tadka Dal',
    hindiName: 'पंचमेल तड़का दाल',
    image: '/images/thali/Daal.png',
    spiceLevel: 3,
    gheeLevel: 4,
    tag: '5 Lentil Slow-Cooked Fusion',
    desc: 'A rich blend of Toor, Chana, Moong, Masoor, and Urad lentils slow-cooked for 6 hours in clay pots with Mathania chilli tadka.',
    details: 'Tempered with cumin, cloves, roasted asafoetida (hing), and dry Mathania red chillies in pure ghee.',
    origin: 'House of Jaipur Royal Khansamas'
  },
  {
    id: 'churma',
    name: 'Shahi Saffron Churma',
    hindiName: 'शाही केसर चूरमा',
    image: '/images/thali/Churma.png',
    spiceLevel: 0,
    gheeLevel: 5,
    tag: 'Sweet Royal Specialty',
    desc: 'Coarsely ground roasted bati blended with organic jaggery, cardamom, Kashmiri saffron strands, and roasted almonds.',
    details: 'Offered first to Lord Eklingji. Hand-pounded to retain rich grain texture and aromatic sweetness.',
    origin: 'Udaipur City Palace Kitchens'
  },
  {
    id: 'gatte',
    name: 'Jodhpuri Gatte Ki Sabzi',
    hindiName: 'जोधपुरी गट्टे की सब्जी',
    image: '/images/thali/Gatte.png',
    spiceLevel: 3,
    gheeLevel: 3,
    tag: 'Gram Flour Dumplings',
    desc: 'Tender gram flour cylinders infused with fennel and coriander, simmered in a spiced tangy yoghurt gravy.',
    details: 'Boiled in buttermilk and pan-seared with Nagauri methi for a melt-in-mouth texture.',
    origin: 'Marwar Desert Royalty'
  },
  {
    id: 'kersangri',
    name: 'Authentic Ker Sangri',
    hindiName: 'कैरि सांगरी',
    image: '/images/thali/kersangri.png',
    spiceLevel: 2,
    gheeLevel: 2,
    tag: 'Thar Desert Delicacy',
    desc: 'Wild desert capers (Ker) and dried beans (Sangri) pan-tossed in mustard oil, raisins, and secret royal spice blend.',
    details: 'A drought-resilient dish cherished by Kings for its intense savory-sour depth and long preservation shelf-life.',
    origin: 'Thar Desert Tradition'
  },
  {
    id: 'lahsun',
    name: 'Mathania Lahsun Chutney',
    hindiName: 'मथानिया लहसुन चटनी',
    image: '/images/thali/Lahsun.png',
    spiceLevel: 5,
    gheeLevel: 2,
    tag: 'Fiery Garlic Relish',
    desc: 'Pounded red garlic and sun-dried Mathania red chillies ground on traditional stone sil-batta with raw mustard oil.',
    details: 'Delivers a vibrant fiery punch that complements the rich buttery texture of hot Dal Bati.',
    origin: 'Rural Marwar Farms'
  },
  {
    id: 'chaas',
    name: 'Kulhad Mint Chaas',
    hindiName: 'कुल्हड़ मट्ठा',
    image: '/images/thali/Chaas.png',
    spiceLevel: 1,
    gheeLevel: 0,
    tag: 'Smoked Spiced Buttermilk',
    desc: 'Chilled hand-churned yoghurt with roasted cumin, mint leaves, and black salt, served in earthen terracotta kulhad.',
    details: 'Smoked with live charcoal (Dhungar effect) for an authentic rustic woodfire aroma.',
    origin: 'Shekhawati Royal Summer Drinks'
  }
];

export default function ThaliExperience({ onBookClick }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const thaliPlateRef = useRef(null);
  const itemsContainerRef = useRef(null);
  
  const [selectedItem, setSelectedItem] = useState(THALI_ITEMS[0]);
  const [isExploded, setIsExploded] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(thaliPlateRef.current, { opacity: 0, scale: 0.85, rotate: -10 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'back.out(1.4)' }, '-=0.5')
      .fromTo('.thali-item-card', { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out' }, '-=0.8');
  }, { scope: containerRef });

  const handleSelectDish = (item) => {
    setSelectedItem(item);
    
    // Quick GSAP bounce effect on selected image
    gsap.fromTo(`.dish-img-${item.id}`, 
      { scale: 0.9, rotate: -5 }, 
      { scale: 1.08, rotate: 0, duration: 0.5, ease: 'back.out(2)' }
    );
  };

  return (
    <section id="thali-experience" className="thali-section" ref={containerRef}>
      {/* Background Ornaments */}
      <div className="thali-bg-glow" />
      <div className="thali-mandana-bg" />

      <div className="container">
        {/* Section Header */}
        <div className="thali-header" ref={titleRef}>
          <div className="eyebrow-wrapper">
            <span className="eyebrow">
              <Sparkles size={14} className="gold-icon" /> SHAHI RAJWADA THALI • 36 KHOMCHA EXPERIENCE
            </span>
          </div>
          <h2 className="section-title">
            EXPLORE THE <span className="highlight-gold">ROYAL THALI</span> DYNAMICS
          </h2>
          <p className="section-subtitle">
            An authentic Rajasthani feast is a symphony of flavors—balancing spicy red chillies, sweet jaggery, and rich ghee. Click any dish below to discover its secret heritage recipe!
          </p>

          <div className="thali-view-controls">
            <button 
              className={`view-toggle-btn ${isExploded ? 'active' : ''}`}
              onClick={() => setIsExploded(!isExploded)}
            >
              <RefreshCw size={14} className={isExploded ? 'spin-icon' : ''} />
              {isExploded ? 'EXPLODED MOTION VIEW' : 'COMBINED THALI VIEW'}
            </button>
          </div>
        </div>

        {/* Thali Interactive Layout */}
        <div className="thali-showcase-grid">
          {/* Main Visual Display (Center Brass Plate & Floating Items) */}
          <div className="thali-visual-stage" ref={thaliPlateRef}>
            <div className={`thali-plate-wrapper ${isExploded ? 'is-exploded' : ''}`}>
              <img 
                src="/images/thali/Thali.png" 
                alt="Kesariya Rajwada Royal Brass Thali" 
                className="base-thali-img" 
              />

              {/* Floating Individual Dishes */}
              {THALI_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className={`floating-dish-item dish-pos-${item.id} dish-img-${item.id} ${selectedItem.id === item.id ? 'is-active' : ''}`}
                  onClick={() => handleSelectDish(item)}
                  title={item.name}
                >
                  <img src={item.image} alt={item.name} className="floating-img" />
                  <div className="dish-pulse-ring" />
                  <span className="dish-floating-badge">{item.hindiName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Info Card Panel */}
          <div className="thali-detail-card" ref={itemsContainerRef}>
            <div className="detail-card-header">
              <span className="detail-tag">{selectedItem.tag}</span>
              <span className="detail-hindi">{selectedItem.hindiName}</span>
            </div>

            <h3 className="detail-title">{selectedItem.name}</h3>

            <p className="detail-desc">{selectedItem.desc}</p>

            <div className="detail-origin-box">
              <Info size={16} className="gold-icon" />
              <div>
                <span className="origin-label">Royal Culinary Origin:</span>
                <p className="origin-text">{selectedItem.origin}</p>
              </div>
            </div>

            <div className="detail-specs-grid">
              {/* Spice Meter */}
              <div className="spec-item">
                <div className="spec-label">
                  <Flame size={14} className="red-icon" /> Spice Index
                </div>
                <div className="spec-bar-wrapper">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <span 
                      key={lvl} 
                      className={`spec-dot flame-dot ${lvl <= selectedItem.spiceLevel ? 'active' : ''}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Ghee Purity Meter */}
              <div className="spec-item">
                <div className="spec-label">
                  <Droplets size={14} className="gold-icon" /> Desi Ghee Index
                </div>
                <div className="spec-bar-wrapper">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <span 
                      key={lvl} 
                      className={`spec-dot ghee-dot ${lvl <= selectedItem.gheeLevel ? 'active' : ''}`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="detail-recipe-notes">
              <h4>
                <CheckCircle2 size={15} className="gold-icon" /> Khansama Recipe Details
              </h4>
              <p>{selectedItem.details}</p>
            </div>

            <div className="detail-cta-actions">
              <button className="btn btn-primary btn-full" onClick={onBookClick}>
                RESERVE THALI EXPERIENCE <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid Thumbnail Selector below */}
        <div className="thali-thumbnails-strip">
          {THALI_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`thali-thumb-card ${selectedItem.id === item.id ? 'is-selected' : ''}`}
              onClick={() => handleSelectDish(item)}
            >
              <div className="thumb-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="thumb-info">
                <span className="thumb-title">{item.name}</span>
                <span className="thumb-sub">{item.hindiName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
