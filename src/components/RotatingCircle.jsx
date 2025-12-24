import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop", 
  "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&h=800&fit=crop", 
  "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&h=800&fit=crop", 
  "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&h=800&fit=crop", 
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop", 
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=800&fit=crop", 
];

const RotatingCircle = () => {
  const componentRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: "+=500%", 
          scrub: 1,      
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(wheelRef.current, {
        rotation: -360,
        ease: "none"
      });

      gsap.utils.toArray(".wheel-image").forEach((img) => {
        tl.to(img, { rotation: 360, ease: "none" }, 0);
      });

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="h-screen w-full bg-black relative overflow-hidden flex items-center justify-center z-20">
      
      {/* 1. THE REVOLVING IMAGE WHEEL */}
      <div 
        ref={wheelRef} 
        className="relative flex items-center justify-center"
        style={{ 
            width: '100vw', 
            height: '100vw', 
            maxWidth: '1000px', 
            maxHeight: '1000px' 
        }} 
      >
        {images.map((src, i) => {
          const angle = (i / images.length) * 360;

          return (
            <div 
              key={i}
              // UPDATE: Reduced size to w-[24vw] (was 28vw) to match smaller holes
              className="wheel-image absolute w-[24vw] h-[24vw] md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-2 md:border-4 border-black"
              style={{
                top: '50%',
                left: '50%',
                // Keep translation at 25vw so they stay centered in the quadrants
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(25vw) rotate(-${angle}deg)`
              }}
            >
              <img 
                src={src} 
                alt="" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
          );
        })}
      </div>

      {/* 2. THE BLACK OVERLAY (MASK) */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <mask id="holeMask">
              <rect width="100%" height="100%" fill="white" />
              {/* UPDATE: Reduced radius 'r' from 18% to 15% to create space */}
              <circle cx="25%" cy="50%" r="15%" fill="black" />
              <circle cx="75%" cy="50%" r="15%" fill="black" />
            </mask>
          </defs>

          <rect 
            width="100%" 
            height="100%" 
            fill="black" 
            mask="url(#holeMask)" 
          />
        </svg>
      </div>

      {/* 3. CENTER TEXT */}
      {/* UPDATE: Reduced padding from 'md:px-32' to 'md:px-12' to push text to edges */}
      <div className="absolute z-40 flex justify-between items-center w-full px-6 md:px-12 pointer-events-none mix-blend-difference">
         <div className="text-left text-white">
            <h3 className="text-sm md:text-xl font-light opacity-80">Years</h3>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">40+</h2>
        </div>
        
        <div className="text-right text-white">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">7+</h2>
            <h3 className="text-sm md:text-xl font-light opacity-80">Services</h3>
        </div>
      </div>

    </div>
  );
};

export default RotatingCircle;