import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutIntro from "./components/AboutIntro";

import RotatingCircle from "./components/RotatingCircle";
import MobileImageStack from "./components/MobileImageStack"; // ✅ NEW

import HorizontalScroll from "./components/HorizontalScroll";
import SlantedMarquee from "./components/SlantedMarquee";
import FanScrollSection from "./components/FanScrollSection";
import Footer from "./components/Footer";

// Pages
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Resources from "./pages/Resources";
import Industries from "./pages/Industries";
import Sustainability from "./pages/Sustainability";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";

/* ---------------- Scroll To Top ---------------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* ---------------- HOME ---------------- */
const Home = () => (
  <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
    <Navbar />
    <HeroSection />

    {/* Content pushed below hero */}
    <div className="relative z-10 bg-black mt-[100vh]">
      <AboutIntro />

      {/* ✅ MOBILE VERSION */}
      <MobileImageStack />

      {/* ✅ DESKTOP VERSION */}
      <RotatingCircle />

      <HorizontalScroll />
      <SlantedMarquee />
      <FanScrollSection />
      <Footer />
    </div>
  </main>
);

/* ---------------- APP ---------------- */
const App = () => {
  return (
    <ReactLenis root>

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Industries />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
};

export default App;
