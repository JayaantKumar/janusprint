import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = "", staggerAmount = 0.1 }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    // Select direct children elements (e.g., paragraphs, headings inside this wrapper)
    const targets = triggerRef.current.children;

    gsap.fromTo(targets,
      { 
        y: 50, // Start 50px down
        opacity: 0, 
        // Using clip-path creates a "masking" effect without needing extra wrapper divs
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" 
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Reveal fully
        stagger: staggerAmount, // The delay between each item
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 85%", // Trigger when top of section hits 85% viewport height
          toggleActions: "play none none reverse", // Replays if you scroll back up
        }
      }
    );
  }, [staggerAmount]);

  return (
    <div ref={triggerRef} className={className}>
       {children}
    </div>
  );
};

export default TextReveal;