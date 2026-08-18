import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ShieldCheck, Flame, Award, Clock, Sparkles } from 'lucide-react';
import './HeritageStory.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERITAGE_REGIONS = [
  {
    id: 'mewar',
    title: 'Mewar Royal Tradition',
    subtitle: 'Udaipur & Chittorgarh Fort Kitchens',
    period: 'Established 1303 AD',
    description: 'During long wartime sieges, Maharana warriors baked whole wheat balls under desert sands covered with glowing cow-dung charcoal. Crushed in clarified butter, this sustained the legendary Rajput army with supreme energy.',
    highlights: ['Desert Sand Dungar Baking', 'Pure Gir Cow Ghee Clarification', 'Traditional Khansama Lineage']
  },
  {
    id: 'marwar',
    title: 'Marwar Spice Masters',
    subtitle: 'Jodhpur & Thar Desert Recipes',
    period: 'Royal Court of Meherangarh',
    description: 'To preserve flavor in arid landscapes, Marwari cooks perfected sun-drying wild Ker berries, Sangri desert beans, and fiery Mathania red chillies, creating unforgettably bold pungency.',
    highlights: ['Mathania Sun-Dried Red Chillies', 'Wild Ker Sangri Foraging', 'Clay Pot Slow Simmering']
  },
  {
    id: 'shekhawati',
    title: 'Shekhawati Merchant Feasts',
    subtitle: 'Painted Haveli Grand Banquets',
    period: '18th Century Golden Age',
    description: 'Merchant Princes of Shekhawati elevated everyday royal meals into extravagant 36-course Khomcha thali feasts, accompanying meals with live Sarangi & Manganiyar folk melodies.',
    highlights: ['36 Khomcha Silverware Dining', 'Saffron & Cardamom Churma', 'Live Manganiyar Musical Evenings']
  }
];

export default function HeritageStory() {
  const containerRef = useRef(null);
  const [activeRegion, setActiveRegion] = useState(HERITAGE_REGIONS[0]);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo('.story-header', 
      { opacity: 0, y: 40 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.story-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Pillars alternate left/right slide-in
    gsap.utils.toArray('.pillar-card').forEach((card, i) => {
      const direction = i % 2 === 0 ? -50 : 50;
      gsap.fromTo(card,
        { opacity: 0, x: direction, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Region Box smooth scale-up
    gsap.fromTo('.heritage-region-box',
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.heritage-region-box',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="story" className="story-section" ref={containerRef}>
      <div className="story-bg-pattern" />

      <div className="container">
        {/* Header */}
        <div className="story-header text-center">
          <div className="story-badge-header">
            <span className="eyebrow">
              <Sparkles size={14} className="gold-icon" /> LEGACY OF THE KHANSAMAS • SINCE 1303 AD
            </span>
          </div>
          <h2 className="story-main-title section-title">
            OUR ROYAL <span className="highlight-gold">HERITAGE & SECRETS</span>
          </h2>
          <p className="section-subtitle">
            Every bite at Kesariya Rajwada pays homage to centuries of Rajasthani culinary bravery, royal court khansamas, and time-honored slow-cooking methods.
          </p>
        </div>

        {/* 4 Royal Pillars Grid */}
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-box">
              <ShieldCheck size={26} className="gold-icon" />
            </div>
            <h4>100% Pure A2 Cow Ghee</h4>
            <p>Sourced exclusively from Indigenous Gir cows. Every Bati is soaked warm for authentic richness.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <Flame size={26} className="gold-icon" />
            </div>
            <h4>Dungar Fuel Slow-Baking</h4>
            <p>Baked over traditional cow-dung charcoal pits for a distinctive smoky aroma impossible in modern ovens.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <Award size={26} className="gold-icon" />
            </div>
            <h4>36 Heritage Spices</h4>
            <p>Mathania chillies, Nagauri kasuri methi, and hand-pounded spices ground fresh daily on stone sil-batta.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <Clock size={26} className="gold-icon" />
            </div>
            <h4>6-Hour Clay Pot Simmering</h4>
            <p>Our Panchmel Dal is slow-cooked in earthenware clay pots over low charcoal flames overnight.</p>
          </div>
        </div>

        {/* Interactive Region Tab Showcase */}
        <div className="heritage-region-box">
          <div className="region-tabs-nav">
            {HERITAGE_REGIONS.map((reg) => (
              <button
                key={reg.id}
                className={`region-tab-btn ${activeRegion.id === reg.id ? 'active' : ''}`}
                onClick={() => setActiveRegion(reg)}
              >
                {reg.title}
              </button>
            ))}
          </div>

          <div className="region-display-content">
            <div className="region-info">
              <span className="region-period-tag">{activeRegion.period}</span>
              <h3 className="region-name">{activeRegion.title}</h3>
              <p className="region-sub">{activeRegion.subtitle}</p>
              <p className="region-desc">{activeRegion.description}</p>

              <div className="region-highlights">
                {activeRegion.highlights.map((h, i) => (
                  <div key={i} className="highlight-pill">
                    <Sparkles size={12} className="gold-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="region-stat-card">
              <div className="stat-circle">
                <span className="stat-num">700+</span>
                <span className="stat-label">Years of Heritage</span>
              </div>
              <p className="stat-quote">
                "Preserving Rajasthan's royal soul in every khomcha serving."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
