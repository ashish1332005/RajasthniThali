import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';
import './ScrollThaliAssembly.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ASSEMBLY_STEPS = [
  {
    id: 'thali',
    num: '00',
    name: 'Royal Brass Thali Plate',
    hindiName: 'शाही पीतल थाली',
    image: '/images/thali/Thali.png',
    tag: '👑 HERITAGE SILVERWARE',
    desc: 'The foundation of royal feast—a heavy, hand-engraved brass plate passed down through Mewar palace kitchens.',
    origin: 'House of Royal Craftsmen, Udaipur'
  },
  {
    id: 'dal',
    num: '01',
    name: 'PANCHMEL DAL',
    hindiName: 'पंचमेल तड़का दाल',
    image: '/images/thali/Daal.png',
    tag: '♨ WARM & COMFORTING',
    desc: 'Paanch daalon ka paramparik sangam, dheemi aanch aur khaas Rajasthani masalon ke saath.',
    origin: 'House of Jaipur Royal Khansamas'
  },
  {
    id: 'bati',
    num: '02',
    name: 'DESI GHEE BATI',
    hindiName: 'देसी घी बाटी',
    image: '/images/thali/Bati.png',
    tag: '🔥 DUNGAR PIT BAKED',
    desc: 'Crispy outside, soft inside. Drenched generously with pure A2 Gir Cow Desi Ghee.',
    origin: 'Mewar Royal Army Rations (1303 AD)'
  },
  {
    id: 'churma',
    num: '03',
    name: 'MEETHA CHURMA',
    hindiName: 'शाही केसर चूरमा',
    image: '/images/thali/Churma.png',
    tag: '✨ SAFFRON & JAGGERY SWEET',
    desc: 'Sweet, nutty and rich – roasted coarse wheat hand-ground with saffron & organic jaggery.',
    origin: 'Udaipur City Palace Kitchens'
  },
  {
    id: 'gatte',
    num: '04',
    name: 'GATTE KI SABZI',
    hindiName: 'जोधपुरी गट्टे की सब्जी',
    image: '/images/thali/Gatte.png',
    tag: '🌱 GRAM FLOUR DUMPLINGS',
    desc: 'Gram flour dumplings in a flavorful spicy yoghurt & Nagauri methi gravy.',
    origin: 'Marwar Desert Royalty'
  },
  {
    id: 'kersangri',
    num: '05',
    name: 'AUTHENTIC KER SANGRI',
    hindiName: 'कैरि सांगरी',
    image: '/images/thali/kersangri.png',
    tag: '🌵 THAR DESERT DELICACY',
    desc: 'Wild desert capers and dried beans pan-tossed in mustard oil, raisins & dry raw mango.',
    origin: 'Thar Desert Tradition'
  },
  {
    id: 'lahsun',
    num: '06',
    name: 'MATHANIA LAHSUN CHUTNEY',
    hindiName: 'मथानिया लहसुन चटनी',
    image: '/images/thali/Lahsun.png',
    tag: '🌶 FIERY RED GARLIC RELISH',
    desc: 'Stone-pounded red garlic and sun-dried Mathania red chillies tossed in raw mustard oil.',
    origin: 'Rural Marwar Farms'
  },
  {
    id: 'chaas',
    num: '07',
    name: 'KULHAD MINT CHAAS',
    hindiName: 'कुल्हड़ मट्ठा',
    image: '/images/thali/Chaas.png',
    tag: '❄ SMOKED SPICED BUTTERMILK',
    desc: 'Chilled hand-churned yoghurt with roasted cumin, mint leaves, and black salt in terracotta kulhad.',
    origin: 'Shekhawati Royal Summer Craft'
  }
];

export default function ScrollThaliAssembly() {
  const pinSectionRef = useRef(null);
  const triggerTrackRef = useRef(null);
  
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerTrackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
        pin: pinSectionRef.current,
        onUpdate: (self) => {
          const progress = self.progress;
          let step = Math.min(
            ASSEMBLY_STEPS.length - 1,
            Math.floor(progress * ASSEMBLY_STEPS.length)
          );
          setActiveStepIndex(step);
        }
      }
    });

    // 0. Base Brass Thali Plate Entry
    tl.fromTo('.dish-slot-thali', 
      { opacity: 0, scale: 0.75, rotateX: 30, z: -200 },
      { opacity: 1, scale: 1, rotateX: 0, z: 0, duration: 1, ease: 'power2.out' }
    );

    // 1. Panchmel Dal (12 o'clock)
    tl.fromTo('.dish-slot-dal',
      { opacity: 0, scale: 2.2, y: -300, z: 500 },
      { opacity: 1, scale: 1, y: 0, z: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // 2. Desi Ghee Bati (6 o'clock)
    tl.fromTo('.dish-slot-bati',
      { opacity: 0, scale: 2.5, y: 350, z: 600 },
      { opacity: 1, scale: 1, y: 0, z: 0, duration: 1.2, ease: 'bounce.out' }
    );

    // 3. Saffron Churma (2 o'clock)
    tl.fromTo('.dish-slot-churma',
      { opacity: 0, scale: 2.2, x: 300, y: -200, z: 500 },
      { opacity: 1, scale: 1, x: 0, y: 0, z: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // 4. Jodhpuri Gatte (4 o'clock)
    tl.fromTo('.dish-slot-gatte',
      { opacity: 0, scale: 2.2, x: 350, z: 500 },
      { opacity: 1, scale: 1, x: 0, z: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // 5. Authentic Ker Sangri (7:30)
    tl.fromTo('.dish-slot-kersangri',
      { opacity: 0, scale: 2.2, x: -300, y: 250, z: 500 },
      { opacity: 1, scale: 1, x: 0, y: 0, z: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // 6. Mathania Lahsun Chutney (9 o'clock)
    tl.fromTo('.dish-slot-lahsun',
      { opacity: 0, scale: 2.2, x: -350, z: 500 },
      { opacity: 1, scale: 1, x: 0, z: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // 7. Kulhad Chaas (10:30)
    tl.fromTo('.dish-slot-chaas',
      { opacity: 0, scale: 2.2, x: -250, y: -250, z: 500 },
      { opacity: 1, scale: 1, x: 0, y: 0, z: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // Grand Finale 3D Tilt
    tl.to('.stage-3d-thali-container', {
      rotateX: 14,
      rotateY: -8,
      scale: 1.05,
      duration: 1.5,
      ease: 'power2.inOut'
    });

  }, { scope: triggerTrackRef });

  const currentStep = ASSEMBLY_STEPS[activeStepIndex];

  const scrollToStep = (idx) => {
    if (!triggerTrackRef.current) return;
    const track = triggerTrackRef.current;
    const trackTop = track.offsetTop;
    const trackHeight = track.offsetHeight - window.innerHeight;
    const stepProgress = idx / (ASSEMBLY_STEPS.length - 1);
    window.scrollTo({ top: trackTop + (stepProgress * trackHeight), behavior: 'smooth' });
  };

  return (
    <div id="thali-experience" ref={triggerTrackRef} className="scroll-assembly-track">
      <section className="scroll-assembly-pinned" ref={pinSectionRef}>
        
        <div className="thali-bg-glow-radial" />

        <div className="container assembly-main-container">
          
          {/* Header matching Screenshot 3 */}
          <div className="assembly-header text-center">
            <span className="assembly-eyebrow">⤛ THE ROYAL THALI EXPERIENCE ⤜</span>
            <h2 className="assembly-title">SCROLL. DISCOVER. SAVOR.</h2>
            <p className="assembly-subtitle">Ek ek vyanjan, ek ek kahaani.</p>
          </div>

          {/* 3-Column Desktop / Responsive Mobile Grid */}
          <div className="assembly-stage-grid">
            
            {/* Left Column (Clean Filigree Line, Triangle SVG Completely Removed!) */}
            <div className="journey-left-col">
              <div className="left-filigree-divider">
                <span className="f-line" />
                <span className="f-diamond">❖</span>
                <span className="f-line" />
              </div>

              <span className="journey-subhead">STEP INTO THE</span>
              <h3 className="journey-title">ROYAL FEAST OF RAJASTHAN</h3>

              <p className="journey-desc">
                Scroll down to see how a simple thali becomes a royal experience filled with tradition, taste and timeless recipes.
              </p>

              <div className="journey-scroll-cue">
                <span>SCROLL TO BEGIN</span>
                <ChevronDown size={16} className="arrow-down-glow" />
              </div>
            </div>

            {/* Center Column: 3D Thali Plate Canvas */}
            <div className="stage-center-canvas">
              <div className="stage-3d-thali-container">
                
                {/* Base Brass Thali Plate */}
                <div className="dish-slot dish-slot-thali">
                  <img src="/images/thali/Thali.png" alt="Royal Brass Thali" />
                </div>

                {/* 1. Panchmel Dal */}
                <div className="dish-slot dish-slot-dal">
                  <img src="/images/thali/Daal.png" alt="Panchmel Dal" />
                </div>

                {/* 2. Desi Ghee Bati */}
                <div className="dish-slot dish-slot-bati">
                  <img src="/images/thali/Bati.png" alt="Desi Ghee Bati" />
                </div>

                {/* 3. Saffron Churma */}
                <div className="dish-slot dish-slot-churma">
                  <img src="/images/thali/Churma.png" alt="Shahi Saffron Churma" />
                </div>

                {/* 4. Jodhpuri Gatte */}
                <div className="dish-slot dish-slot-gatte">
                  <img src="/images/thali/Gatte.png" alt="Jodhpuri Gatte" />
                </div>

                {/* 5. Ker Sangri */}
                <div className="dish-slot dish-slot-kersangri">
                  <img src="/images/thali/kersangri.png" alt="Authentic Ker Sangri" />
                </div>

                {/* 6. Mathania Lahsun Chutney */}
                <div className="dish-slot dish-slot-lahsun">
                  <img src="/images/thali/Lahsun.png" alt="Mathania Lahsun Chutney" />
                </div>

                {/* 7. Kulhad Chaas */}
                <div className="dish-slot dish-slot-chaas">
                  <img src="/images/thali/Chaas.png" alt="Kulhad Mint Chaas" />
                </div>

                {/* 8. Bikaneri Papad & Khicha */}
                <div className="dish-slot dish-slot-papad">
                  <img src="/images/thali/papad.png" alt="Bikaneri Papad & Khicha" />
                </div>

              </div>
            </div>

            {/* Right Column (High Contrast Desktop Timeline) */}
            <div className="journey-right-timeline">
              <span className="timeline-tag">YOUR JOURNEY</span>
              <h4 className="timeline-title">ONE DISH AT A TIME</h4>

              <div className="timeline-items-list">
                {ASSEMBLY_STEPS.slice(1, 5).map((step, idx) => (
                  <div 
                    key={step.id} 
                    className={`timeline-item-row ${activeStepIndex === idx + 1 ? 'active' : ''}`}
                    onClick={() => scrollToStep(idx + 1)}
                  >
                    <div className="item-thumb-micro">
                      <img src={step.image} alt={step.name} />
                    </div>
                    <div className="item-text-info">
                      <h5><span className="step-num">{step.num}</span> {step.name}</h5>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Mobile Spotlight Card & Step Buttons */}
          <div className="mobile-spotlight-section">
            
            {/* Step Buttons */}
            <div className="mobile-step-dots-bar">
              {ASSEMBLY_STEPS.slice(1).map((s, idx) => (
                <button
                  key={s.id}
                  className={`dot-step-btn ${activeStepIndex === idx + 1 ? 'active' : ''}`}
                  onClick={() => scrollToStep(idx + 1)}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Spotlight Card */}
            <div className="mobile-spotlight-card">
              <div className="m-card-content">
                <span className="m-step-badge">⤛ {currentStep.num} ⤜</span>
                <h3 className="m-dish-name">{currentStep.name}</h3>
                <span className="m-dish-hindi">{currentStep.hindiName}</span>
                <p className="m-dish-desc">{currentStep.desc}</p>

                <div className="m-dish-tag">
                  <span>{currentStep.tag}</span>
                </div>
              </div>

              <div className="m-card-img-box">
                <img src={currentStep.image} alt={currentStep.name} />
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
