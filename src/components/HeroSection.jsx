import React from 'react';

const HeroSection = () => {
  // Static placeholder video (Pexels free stock video)
  const videoUrl = "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4";

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden z-0">
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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tight mb-6 text-white drop-shadow-lg">
          Elevate Your <br /> Packaging
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-white/90 mb-8 font-light">
          We provide high-quality, customized packaging solutions that safeguard your brand.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
            Explore Solutions
        </button>
      </div>
    </section>
  );
};

export default HeroSection;