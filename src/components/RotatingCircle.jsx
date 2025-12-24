import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// High-quality vertical/portrait images work best for this
const images = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop", // Clothing/Fabric
  "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&h=800&fit=crop", // Shopping Bags
  "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&h=800&fit=crop", // Box Packaging
  "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&h=800&fit=crop", // Abstract
];

const RotatingCircle = () => {
  const componentRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Setup the rotation timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: "+=400%", // Longer scroll distance for smoother rotation
          scrub: 1.5,    // Smooth scrubbing (lag) for premium feel
          pin: true,
          anticipatePin: 1,
        }
      });

      // Rotate the wheel 360 degrees
      tl.to(wheelRef.current, {
        rotation: -360, // Negative for clockwise motion perception
        ease: "none"
      });

      // Optional: Counter-rotate images so they stay upright (if desired)
      // If you want them to spin WITH the wheel, remove this block.
      // If you want them to always face 'up', keep this.
      gsap.utils.toArray(".wheel-image").forEach((img) => {
        tl.to(img, { rotation: 360, ease: "none" }, 0);
      });

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="h-screen w-full bg-black relative overflow-hidden flex flex-col justify-center items-center z-20">
      
      {/* 1. THE CONTENT LAYER (Rotates Behind the Mask) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
            ref={wheelRef} 
            className="relative w-[120vh] h-[120vh] flex items-center justify-center" // Huge container
        >
            {images.map((src, i) => {
                // Position images at 0, 90, 180, 270 degrees
                const angle = (i / images.length) * 360; 
                // Determine CSS transform to push them to the edge of the circle
                return (
                    <div 
                        key={i}
                        className="wheel-image absolute w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                            transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)` // Push out by 350px
                        }}
                    >
                        <img 
                            src={src} 
                            alt="" 
                            className="w-full h-full object-cover scale-125" 
                        />
                    </div>
                );
            })}
        </div>
      </div>

      {/* 2. THE MASK LAYER (The Black Overlay with Two Holes) */}
      {/* This SVG sits on top and hides everything except the holes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" width="100%" height="100%">
        <defs>
          <mask id="double-circle-mask">
            {/* White pixels = Visible (Holes), Black pixels = Hidden */}
            {/* We start with a white rectangle (visible) */}
            <rect width="100%" height="100%" fill="white" />
            
            {/* Then we draw two BLACK circles. In a mask, black = transparent/hidden. 
                Wait! We want the OPPOSITE. We want a Black overlay with transparent holes.
                So in the DOM, we need a Black Path with holes. 
            */}
          </mask>
          
          {/* BETTER APPROACH: A Path using 'fill-rule="evenodd"' */}
          {/* This path draws the huge screen rectangle, then 'cuts out' two circles */}
          <mask id="hole-mask">
             <rect width="100%" height="100%" fill="white"/>
             {/* The Holes - Positioned center-left and center-right */}
             <circle cx="35%" cy="50%" r="200" fill="black" /> 
             <circle cx="65%" cy="50%" r="200" fill="black" />
          </mask>
        </defs>

        {/* The Actual Overlay Rectangle using the mask */}
        <rect 
            width="100%" 
            height="100%" 
            fill="black" 
            mask="url(#hole-mask)" 
        />
      </svg>

      {/* 3. STATIC TEXT OVERLAYS (Sits on top of the black mask) */}
      <div className="absolute inset-0 z-40 flex justify-between items-center px-10 md:px-32 pointer-events-none">
        <div className="text-left">
            <h3 className="text-white text-xl md:text-2xl font-light opacity-80">Years</h3>
            <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter">40+</h2>
        </div>
        
        <div className="text-right">
            <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter">7+</h2>
            <h3 className="text-white text-xl md:text-2xl font-light opacity-80">Services</h3>
        </div>
      </div>

    </div>
  );
};

export default RotatingCircle;