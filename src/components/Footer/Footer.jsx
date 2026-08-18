import React from 'react';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        
        {/* Location & Contact Card */}
        <div className="mock-location-card">
          <div className="location-card-header">
            <span className="mock-eyebrow">HUM YAHA HAI</span>
            <h3 className="location-card-title">Hum Yaha Hai, Jaipur</h3>
          </div>

          <div className="location-card-grid">
            {/* Contact Details Column */}
            <div className="location-info-col">
              <div className="loc-item">
                <MapPin size={18} className="gold-icon" />
                <div>
                  <strong>Address</strong>
                  <p>123, Palace Road, Jaipur, Rajasthan 302002</p>
                </div>
              </div>

              <div className="loc-item">
                <Phone size={18} className="gold-icon" />
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="loc-item">
                <Clock size={18} className="gold-icon" />
                <div>
                  <strong>Timings</strong>
                  <p>11:00 AM – 11:00 PM (Everyday)</p>
                </div>
              </div>
            </div>

            {/* Stylized Map Preview Box */}
            <div className="location-map-box">
              <div className="map-pin-badge">
                <MapPin size={22} className="red-pin-icon" />
              </div>
              <span className="map-label">Royal Jaipur Haveli</span>
            </div>
          </div>

          <div className="location-card-action">
            <a href="tel:+919876543210" className="btn btn-primary btn-full">
              <Phone size={18} /> CALL FOR INQUIRY (+91 98765 43210)
            </a>
            <p className="location-sub-note">Warm hospitality and authentic Rajasthani dining experience.</p>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Kesariya Rajwada Fine Dining. All Rights Reserved.</p>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <span>TOP</span> <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
