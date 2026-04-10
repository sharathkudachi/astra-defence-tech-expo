import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
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

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-orange selection:text-bg-base">
        <div className="hex-grid-overlay opacity-30" />
        <Navbar />
        <main className="relative z-10 pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/event" element={<Event />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/guests" element={<Guests />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
