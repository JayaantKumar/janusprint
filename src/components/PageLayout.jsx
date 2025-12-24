import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TextReveal from './TextReveal'; // <--- Import

const PageLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <Navbar />
      <div className="px-6 md:px-20 mb-20">
        {/* Wrap content in TextReveal */}
        <TextReveal staggerAmount={0.2}>
            <h1 className="text-5xl md:text-8xl font-bold mb-10 text-gray-200 leading-tight">{title}</h1>
            <div className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed space-y-6">
                {/* We wrap children in divs so TextReveal treats them as separate blocks to stagger */}
                <div>{children}</div>
            </div>
        </TextReveal>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;