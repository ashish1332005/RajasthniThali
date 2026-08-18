import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const hindiRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const thaliFrameRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollCueRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

    // Initial load animations matching Screenshot 1
    tl.fromTo(bgRef.current, { scale: 1.15, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' })
      .fromTo(hindiRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=1.4')
      .fromTo(eyebrowRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1 }, '-=1.1')
      .fromTo(titleRef.current, { y: 35, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.9')
      .fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
      .fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
      .fromTo(thaliFrameRef.current, { scale: 0.88, opacity: 0, rotate: -3 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.3, ease: 'back.out(1.2)' }, '-=0.6')
      .fromTo(scrollCueRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.4');

    // Subtle parallax background on scroll
    gsap.to(bgRef.current, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  const handleScrollToThali = () => {
    const thaliSection = document.getElementById('thali-experience');
    if (thaliSection) {
      thaliSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" ref={containerRef}>
      {/* Dark Luxury Haveli Lantern Background matching Screenshot 1 */}
      <div className="hero-bg-wrapper">
        <div
          ref={bgRef}
          className="hero-bg-image"
          style={{ backgroundImage: `url('/images/dark_haveli_hero_bg.png')` }}
        />
        <div className="hero-overlay-radial" />
        <div className="hero-overlay-dark" />
      </div>

      {/* Hero Content Stack matching Screenshot 1 */}
      <div className="hero-content container">
        
        {/* Top Hindi Welcome Tagline */}
        <div ref={hindiRef} className="hero-welcome-box">
          <span className="hindi-welcome-text">पधारो सा</span>
          <div className="filigree-divider">
            <span className="filigree-line" />
            <span className="filigree-diamond">❖</span>
            <span className="filigree-line" />
          </div>
        </div>

        {/* Sub Eyebrow */}
        <div ref={eyebrowRef} className="eyebrow-wrapper">
          <span className="eyebrow">AUTHENTIC RAJASTHANI DINING</span>
        </div>

        {/* Grand Title matching Screenshot 1 (Separated Spans to prevent word collision) */}
        <h1 ref={titleRef} className="hero-title-grand">
          <span className="title-row line-white">RAJASTHAN</span>
          <span className="title-row line-gold">KA ASLI</span>
          <span className="title-row line-gold">SWAAD</span>
        </h1>

        {/* Bottom Filigree Line */}
        <div className="filigree-divider title-bottom-filigree">
          <span className="filigree-line" />
          <span className="filigree-diamond">❖</span>
          <span className="filigree-line" />
        </div>

        {/* Description */}
        <p ref={descRef} className="hero-description">
          An unforgettable journey through Rajasthan's legendary Dal Bati Churma and traditional royal cuisine.
        </p>

        {/* Action Buttons with Arrows */}
        <div ref={buttonsRef} className="hero-actions">
          <button className="btn btn-primary" onClick={handleScrollToThali}>
            EXPERIENCE THE THALI <ArrowRight size={16} />
          </button>
          <button className="btn btn-ghost" onClick={handleScrollToMenu}>
            VIEW MENU <ArrowRight size={16} />
          </button>
        </div>

        {/* Loaded Royal Thali Centerpiece */}
        <div ref={thaliFrameRef} className="hero-thali-hero-frame">
          <div className="hero-filled-thali">
            <img src="/images/thali/Thali.png" alt="Royal Brass Thali Plate" className="h-dish h-plate" />
            <img src="/images/thali/Daal.png" alt="Panchmel Dal" className="h-dish h-dal" />
            <img src="/images/thali/Churma.png" alt="Saffron Churma" className="h-dish h-churma" />
            <img src="/images/thali/Gatte.png" alt="Jodhpuri Gatte" className="h-dish h-gatte" />
            <img src="/images/thali/Bati.png" alt="Desi Ghee Bati" className="h-dish h-bati" />
            <img src="/images/thali/kersangri.png" alt="Ker Sangri" className="h-dish h-kersangri" />
            <img src="/images/thali/Lahsun.png" alt="Lahsun Chutney" className="h-dish h-lahsun" />
            <img src="/images/thali/Chaas.png" alt="Kulhad Mint Chaas" className="h-dish h-chaas" />
            <img src="/images/thali/papad.png" alt="Bikaneri Papad" className="h-dish h-papad" />
          </div>
          <div className="hero-thali-glow" />
        </div>

        {/* Scroll To Taste Cue matching Screenshot 1 */}
        <div ref={scrollCueRef} className="hero-scroll-taste-cue" onClick={handleScrollToThali}>
          <span>SCROLL TO TASTE</span>
          <div className="vertical-cue-line" />
          <ChevronDown size={16} className="scroll-arrow-down" />
        </div>

      </div>
    </section>
  );
}
