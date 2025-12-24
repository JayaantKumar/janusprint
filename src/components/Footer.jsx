import React from 'react';
import { FaInstagram, FaFacebookF, FaBehance, FaTwitter, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative h-screen bg-white text-black flex flex-col justify-between px-6 md:px-20 py-20 z-0">
      
      {/* Top Section: Huge CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/10 pb-10">
        <div>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-6 leading-[0.8]">
            Let's <br/> Talk
          </h2>
          <button className="text-xl md:text-2xl border border-black/20 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Get in Touch
          </button>
        </div>
        
        <div className="mt-10 md:mt-0 text-right">
          <p className="text-lg opacity-60 max-w-sm">
            Elevate your packaging game with our sustainable, high-quality printing solutions.
          </p>
        </div>
      </div>

      {/* Middle Section: Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
        {/* Column 1: Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-bold uppercase opacity-40 mb-4">Explore</h3>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">Portfolio</a>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">Our Services</a>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">Info</a>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-bold uppercase opacity-40 mb-4">Resources</h3>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">FAQ's</a>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">Blogs</a>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">Glossary</a>
          <a href="#" className="text-xl hover:opacity-50 transition-opacity">Material</a>
        </div>

        {/* Column 3: Address (Mockup) */}
        <div className="flex flex-col space-y-2">
           <h3 className="text-sm font-bold uppercase opacity-40 mb-4">Visit</h3>
           <p className="text-lg leading-snug">
             123 Creative Estate,<br/>
             Industrial Area Phase 1,<br/>
             New Delhi, India
           </p>
        </div>

        {/* Column 4: Socials */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-bold uppercase opacity-40 mb-4">Social</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:scale-110 transition-transform"><FaInstagram /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaFacebookF /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaBehance /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaTwitter /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaMedium /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="flex flex-col md:flex-row justify-between text-sm opacity-40 pt-4 border-t border-black/10">
        <p>&copy; 2024 Janus Print Clone. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;