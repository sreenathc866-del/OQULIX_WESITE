import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/hero/HeroSection';
import ProductCarousel from './components/products/ProductCarousel';
import ProductShowcase from './components/products/ProductShowcase';
import SolutionsSection from './components/solutions/SolutionsSection';
import AboutSection from './components/about/AboutSection';
// import ExperienceSection from './components/experience/ExperienceSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import TeamSection from './components/team/TeamSection';
import ContactSection from './components/contact/ContactSection';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductCarousel />
              <ProductShowcase />
              <SolutionsSection />
              <AboutSection />
              {/* <ExperienceSection /> */}
              <TestimonialsSection />
              <TeamSection />
              <ContactSection />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;