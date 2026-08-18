import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import './AmbianceGallery.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Royal Floor Gaddi Dining',
    subtitle: 'Chowki Seating with Hand-Carved Brassware',
    category: 'Architecture',
    image: '/images/hero-bg.png',
    tag: 'Authentic Experience'
  },
  {
    id: 2,
    title: 'Live Manganiyar Folk Music',
    subtitle: 'Soulful Sarangi & Khartal Performances Every Evening',
    category: 'Culture',
    image: '/images/hero-bg.png',
    tag: 'Folk Heritage'
  },
  {
    id: 3,
    title: 'Jharokha Courtyard Dining',
    subtitle: 'Overlooking Starlit Palace Courtyards',
    category: 'Ambiance',
    image: '/images/hero-bg.png',
    tag: 'Regal Views'
  },
  {
    id: 4,
    title: 'Master Khansama Preparation',
    subtitle: 'Slow Clay-Pot Cooking & Fresh Ghee Dipping',
    category: 'Kitchen',
    image: '/images/hero-bg.png',
    tag: 'Culinary Craft'
  },
  {
    id: 5,
    title: 'Shahi Royal Suites',
    subtitle: 'Private Dining for Royal Family Celebrations',
    category: 'Architecture',
    image: '/images/hero-bg.png',
    tag: 'Private Dining'
  },
  {
    id: 6,
    title: 'Traditional Welcome Ritual',
    subtitle: 'Aarti, Tilak & Attar Welcome by Royal Hosts',
    category: 'Culture',
    image: '/images/hero-bg.png',
    tag: 'Atithi Devo Bhava'
  }
];

export default function AmbianceGallery() {
  const containerRef = useRef(null);
  const [activeModalItem, setActiveModalItem] = useState(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo('.gallery-header', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cards alternate left/right slide-in reveal
    gsap.utils.toArray('.gallery-card-item').forEach((card, i) => {
      const direction = i % 2 === 0 ? -40 : 40;
      gsap.fromTo(card,
        { opacity: 0, x: direction, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="gallery" className="gallery-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="gallery-header text-center">
          <div className="eyebrow-wrapper">
            <span className="eyebrow">
              <Sparkles size={14} className="gold-icon" /> HERITAGE AMBIANCE & ROYAL HOSPITALITY
            </span>
          </div>
          <h2 className="section-title">
            STEP INSIDE THE <span className="highlight-gold">ROYAL HAVELI</span>
          </h2>
          <p className="section-subtitle">
            Immerse yourself in hand-painted Mandana murals, golden Jharokha archways, live Rajasthani folk music, and traditional floor chowki dining.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="gallery-card-item"
              onClick={() => setActiveModalItem(item)}
            >
              <div className="gallery-image-box">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="gallery-tag-pill">{item.tag}</div>
                  <div className="gallery-overlay-text">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="zoom-icon-box">
                    <Maximize2 size={18} className="gold-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalItem && (
        <div className="gallery-modal-overlay" onClick={() => setActiveModalItem(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setActiveModalItem(null)}>
              <X size={20} />
            </button>
            <div className="modal-image-wrapper">
              <img src={activeModalItem.image} alt={activeModalItem.title} />
            </div>
            <div className="modal-info-panel">
              <span className="modal-tag">{activeModalItem.tag}</span>
              <h3 className="modal-title">{activeModalItem.title}</h3>
              <p className="modal-sub">{activeModalItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
