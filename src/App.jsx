import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages (to be implemented)
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Schedule from './pages/Schedule';
import Guests from './pages/Guests';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Sponsorship from './pages/Sponsorship';
import Prizes from './pages/Prizes';

const MainLanding = () => {
  return (
    <>
      <Home />
      <About />
      <Event />
      <Prizes />
      <Schedule />
      <Guests />
      <Sponsorship />
      <Register />
      <Contact />
    </>
  );
};

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100; // Updated to match Navbar pill offset
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-orange selection:text-bg-base">
      <div className="hex-grid-overlay opacity-30" />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainLanding />} />
            <Route path="/register" element={<Register />} />
            {/* Redirect legacy routes to anchor points */}
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/domains" element={<Navigate to="/#domains" replace />} />
            <Route path="/schedule" element={<Navigate to="/#schedule" replace />} />
            <Route path="/guests" element={<Navigate to="/#guests" replace />} />
            <Route path="/sponsors" element={<Navigate to="/#sponsors" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
