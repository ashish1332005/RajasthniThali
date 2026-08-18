import React, { useState, useEffect } from 'react';
import { Phone, Clock, X, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Thali', href: '#thali-experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Left: Brand Logo */}
          <a href="#hero" className="navbar-brand">
            <span className="brand-icon">❖</span>
            <div className="brand-text">
              <span className="brand-title">KESARIYA RAJWADA</span>
              <span className="brand-sub">ROYAL RAJASTHANI CUISINE</span>
            </div>
          </a>

          {/* Center: Desktop Links */}
          <nav className="navbar-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Hamburger Menu Toggle */}
          <div className="navbar-actions">
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* World-Class Ultra-Luxury Fullscreen Mobile Navigation Menu */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-bg-glow" />

        {/* Dedicated Top Bar inside Overlay */}
        <div className="mobile-nav-top-bar">
          <div className="navbar-brand">
            <span className="brand-icon">❖</span>
            <div className="brand-text">
              <span className="brand-title">KESARIYA RAJWADA</span>
              <span className="brand-sub">ROYAL RAJASTHANI CUISINE</span>
            </div>
          </div>

          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Menu Scrollable Body */}
        <div className="mobile-nav-body">
          <div className="mobile-nav-header text-center">
            <span className="eyebrow">
              <Sparkles size={12} className="gold-icon" /> पधारो सा • ROYAL HOSPITALITY
            </span>
            <h2 className="mobile-nav-title">RAJASTHAN KA ASLI SWAAD</h2>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                style={{ '--i': idx }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-text">{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-contact-row">
              <div className="mobile-contact-item">
                <Phone size={15} className="gold-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="mobile-contact-item">
                <Clock size={15} className="gold-icon" />
                <span>11:00 AM – 11:00 PM</span>
              </div>
            </div>

            <a
              href="tel:+919876543210"
              className="btn btn-primary mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              CALL FOR INQUIRY (+91 98765 43210)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
