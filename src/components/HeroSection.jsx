import React from 'react';
import TextReveal from './TextReveal';

const HeroSection = () => {
  const videoUrl = "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4";

  return (
    // CHANGE: 'fixed' instead of 'sticky'. 'z-0' puts it behind everything.
    <section className="fixed top-0 left-0 h-screen w-full overflow-hidden z-0">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          src={videoUrl} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <TextReveal>
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tight mb-6 text-white drop-shadow-lg">
            Elevate Your <br /> Packaging
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/90 mb-8 font-light mx-auto">
            We provide high-quality, customized packaging solutions that safeguard your brand.
            </p>
            <div className="flex justify-center">
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                    Explore Solutions
                </button>
            </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default HeroSection;