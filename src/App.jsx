import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import RotatingCircle from './components/RotatingCircle';
import SlantedMarquee from './components/SlantedMarquee';
import FanScrollSection from './components/FanScrollSection';
import Footer from './components/Footer'; // <--- Import Footer
import AdminLogin from './admin/AdminLogin';
import Dashboard from './admin/Dashboard';

const Home = () => (
  <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-white selection:text-black">
    {/* Navigation Overlay */}
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-white pointer-events-none">
      <div className="text-2xl font-bold tracking-tighter pointer-events-auto cursor-pointer">JANUS.CLONE</div>
      <button className="pointer-events-auto border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-sm">
        Get in Touch
      </button>
    </nav>

    <HeroSection />
    
    {/* Content Wrapper */}
    <div className="relative z-10 bg-black">
      <RotatingCircle />
      <SlantedMarquee />
      <FanScrollSection />
    </div>

    {/* Footer - Sits at the bottom */}
    <Footer />
  </main>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;