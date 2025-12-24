import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 40, suffix: "+", label: "Years in Industry" },
  { value: 300, suffix: "M+", label: "Products Delivered" },
  { value: 32, suffix: "+", label: "Cutting Edge Equipment" },
  { value: 200, suffix: "+", label: "Team Members" },
];

const AboutIntro = () => {
  const containerRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Loop through each stat and create a unique animation for it
      stats.forEach((stat, index) => {
        const element = numberRefs.current[index];
        if (!element) return;

        // 1. Create a "Proxy Object" to hold the value (Starts at 0)
        const counter = { val: 0 };

        // 2. Animate that object's value to the target number
        gsap.to(counter, {
          val: stat.value,
          duration: 3, // Duration in seconds
          ease: "power3.out", // Smooth easing (starts fast, slows down)
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", // Triggers when top of section hits 75% of screen
            toggleActions: "play none none reverse", // Plays on enter, resets on leave
          },
          onUpdate: () => {
            // 3. On every frame, update the text on screen
            element.textContent = Math.floor(counter.val) + stat.suffix;
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white py-24 px-6 md:px-20 relative z-10 border-b border-white/10">
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

        {/* 3. Stats Grid with Counting Animation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 border border-white/10 p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-zinc-800/60 transition-colors duration-500 group"
            >
              {/* The Number being animated */}
              <h3 
                ref={el => numberRefs.current[index] = el}
                className="text-5xl md:text-6xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300 font-mono"
              >
                0{stat.suffix} {/* Initial State */}
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