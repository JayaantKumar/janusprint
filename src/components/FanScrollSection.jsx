import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
    "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600",
    "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600",
    "https://images.unsplash.com/photo-1532323544230-7191fd510c59?w=600",
];

const FanScrollSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        }
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const xPos = (i - 1.5) * 110; 
        tl.to(card, {
          xPercent: xPos,
          rotation: (i - 1.5) * 5, 
        }, 0);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full bg-black flex flex-col items-center justify-center z-10">
      <h2 className="text-4xl font-bold mb-20 text-white z-20">Our Services</h2>
      
      <div className="relative w-64 h-96">
        {images.map((src, i) => (
          <div 
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
            style={{ zIndex: 4 - i }}
          >
            <img src={src} className="w-full h-full object-cover" alt="" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-white font-mono">0{i+1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FanScrollSection;