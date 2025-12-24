import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Links Configuration
  const links = [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" }, // 'Industry We Serve'
    { name: "Resources", path: "/resources" },
    { name: "Sustainability", path: "/sustainability" },
  ];

  return (
    <>
      {/* 1. FIXED HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-white">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter z-50">
          JANUS.CLONE
        </Link>

        {/* Desktop: Get in Touch Button */}
        <div className="hidden md:flex items-center gap-6">
            <button className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                Get in Touch
            </button>
            {/* Hamburger Icon (Desktop Side Menu trigger) */}
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                <FaBars />
            </button>
        </div>

        {/* Mobile: Hamburger Icon Only */}
        <div className="md:hidden z-50">
             <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </nav>

      {/* 2. FULLSCREEN OVERLAY MENU */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        <div className="flex flex-col space-y-8 text-center">
            {links.map((link, idx) => (
                <Link 
                    key={idx} 
                    to={link.path} 
                    onClick={toggleMenu}
                    className="text-4xl md:text-6xl font-bold text-white hover:text-gray-400 transition-colors tracking-tight"
                >
                    {link.name}
                </Link>
            ))}
        </div>

        <div className="absolute bottom-10 text-white/50 text-sm">
            © 2025 Janus Print Clone
        </div>
      </div>
    </>
  );
};

export default Navbar;