import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw", // Move left by 3 screen widths (since we have 4 screens total)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000", // The distance the user scrolls to finish the animation
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-black">
      {/* Width = 400vw because we have 4 sections of 100vw each */}
      <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
        
        {/* Panel 1: Design */}
        <div className="h-screen w-screen flex flex-col items-center justify-center border-r border-white/10 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1600&q=80" 
                    alt="Design Blueprints" 
                    className="w-full h-full object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay for text readability */}
            </div>

            {/* Content (z-10 puts it above the image) */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-9xl text-white/10 font-bold absolute -top-40 left-0 md:static md:mb-4 select-none">01</span>
                <h2 className="text-6xl md:text-9xl text-white font-bold mb-6 tracking-tighter">Design</h2>
                <p className="text-xl text-white/80 max-w-lg font-light">
                    We craft structural designs that protect and impress.
                </p>
            </div>
        </div>
        
        {/* Panel 2: Prototype */}
        <div className="h-screen w-screen flex flex-col items-center justify-center border-r border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80" 
                    alt="Prototyping" 
                    className="w-full h-full object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-9xl text-white/10 font-bold absolute -top-40 left-0 md:static md:mb-4 select-none">02</span>
                 <h2 className="text-6xl md:text-9xl text-white font-bold mb-6 tracking-tighter">Prototype</h2>
                 <p className="text-xl text-white/80 max-w-lg font-light">
                    Rapid sampling to ensure form, fit, and function.
                 </p>
            </div>
        </div>

        {/* Panel 3: Production */}
        <div className="h-screen w-screen flex flex-col items-center justify-center border-r border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1600&q=80" 
                    alt="Industrial Printing" 
                    className="w-full h-full object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-9xl text-white/10 font-bold absolute -top-40 left-0 md:static md:mb-4 select-none">03</span>
                 <h2 className="text-6xl md:text-9xl text-white font-bold mb-6 tracking-tighter">Production</h2>
                 <p className="text-xl text-white/80 max-w-lg font-light">
                    High-volume offset printing with premium finishing.
                 </p>
            </div>
        </div>

         {/* Panel 4: Delivery */}
         <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80" 
                    alt="Logistics Delivery" 
                    className="w-full h-full object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-9xl text-white/10 font-bold absolute -top-40 left-0 md:static md:mb-4 select-none">04</span>
                 <h2 className="text-6xl md:text-9xl text-white font-bold mb-6 tracking-tighter">Delivery</h2>
                 <p className="text-xl text-white/80 max-w-lg font-light">
                    On-time logistics across the globe.
                 </p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default HorizontalScroll;