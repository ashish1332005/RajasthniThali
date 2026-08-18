import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Rajasthan ka asli swaad yaad aa gaya.',
    author: 'Ankit Sharma',
    city: 'Jaipur',
    rating: 5
  },
  {
    id: 2,
    quote: 'The Panchmel Dal and molten Ghee Bati transported us straight to a royal banquet in Udaipur.',
    author: 'Ranveer Brar',
    city: 'Mumbai',
    rating: 5
  },
  {
    id: 3,
    quote: 'Unmatched 3D thali presentation and authentic Mathania chilli flavors. Pure perfection.',
    author: 'Sunita Singh',
    city: 'Jodhpur',
    rating: 5
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo('.mock-quote-card', 
      { opacity: 0, scale: 0.96 }, 
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, { scope: containerRef, dependencies: [currentIndex] });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials-section" ref={containerRef}>
      <div className="container text-center">
        
        {/* Mock Quote Card matching Right Screen in Reference Image */}
        <div className="mock-quote-container">
          <button className="slider-arrow-btn" onClick={handlePrev} aria-label="Previous Review">
            <ChevronLeft size={20} />
          </button>

          <div className="mock-quote-card">
            <span className="big-quote-mark">“</span>
            
            <p className="quote-body-text">"{active.quote}"</p>

            <div className="quote-stars-row">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} size={16} className="star-gold-filled" />
              ))}
            </div>

            <h4 className="quote-author-name">{active.author}</h4>
            <span className="quote-author-city">{active.city}</span>
          </div>

          <button className="slider-arrow-btn" onClick={handleNext} aria-label="Next Review">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
