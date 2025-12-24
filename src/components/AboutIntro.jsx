import React from 'react';
import TextReveal from './TextReveal';

const stats = [
  { value: "40+", label: "Years in Industry" },
  { value: "300M+", label: "Products Delivered" },
  { value: "32+", label: "Cutting Edge Equipment" },
  { value: "200+", label: "Team Members" }, // Assumed "Team Members" for the last one based on context
];

const AboutIntro = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Headline */}
        <TextReveal>
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-[1.1] tracking-tight">
            Elevate Your Packaging Game with JanusPrint
          </h2>
        </TextReveal>

        {/* 2. Description Text */}
        <TextReveal staggerAmount={0.05}>
          <p className="text-lg md:text-2xl text-gray-400 max-w-5xl leading-relaxed mb-24 font-light">
            We are a leading printing and packaging company specializing in mono carton boxes, food packaging boxes, and corrugated boxes. 
            With over 40 years of experience across our group of four companies, we offer a one-stop solution for all your packaging needs—from designing to delivering your product. 
            Our expertise ensures high-quality, customized packaging solutions that enhance your product’s appeal and safeguard your brand. 
            Whether it’s creative design or timely delivery, we are dedicated to providing seamless packaging services that set your business apart.
          </p>
        </TextReveal>

        {/* 3. Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 border border-white/10 p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-zinc-800/60 transition-colors duration-500 group"
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm font-semibold group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;