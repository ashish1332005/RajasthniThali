import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ScrollThaliAssembly from './components/ScrollThaliAssembly/ScrollThaliAssembly';
import HeritageStory from './components/HeritageStory/HeritageStory';
import RoyalMenu from './components/RoyalMenu/RoyalMenu';
import AmbianceGallery from './components/AmbianceGallery/AmbianceGallery';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

export default function App() {
  return (
    <div className="app-container">
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <ScrollThaliAssembly />
        <HeritageStory />
        <RoyalMenu />
        <AmbianceGallery />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
