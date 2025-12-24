import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://www.pacagemockup.com/wp-content/uploads/2020/07/Vertical-Product-Box-Mockup-2-1024x768.jpg",
  "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600",
  "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600",
  "https://i.pinimg.com/1200x/31/c2/04/31c20422fdc9db2e882b8c24fd7cecca.jpg",
];

const FanScrollSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({

        /* ================= DESKTOP ================= */
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 1,
              pin: true,
            },
          });

          cardsRef.current.forEach((card, i) => {
            const xPos = (i - 1.5) * 110;
            tl.to(
              card,
              {
                xPercent: xPos,
                rotation: (i - 1.5) * 5,
                ease: "none",
              },
              0
            );
          });
        },

        /* ================= MOBILE ================= */
        "(max-width: 767px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=120%",
              scrub: 1,
              pin: true,
            },
          });

          cardsRef.current.forEach((card, i) => {
            const xPos = (i - 1.5) * 45;   // 🔽 tighter spread
            tl.to(
              card,
              {
                xPercent: xPos,
                rotation: (i - 1.5) * 2,  // 🔽 subtle rotation
                scale: 0.98,
                ease: "none",
              },
              0
            );
          });
        },

      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black flex flex-col items-center justify-center z-10 overflow-hidden"
    >
      {/* TITLE */}
      <div className="mb-14 md:mb-20 z-20">
        <TextReveal>
          <h2 className="text-3xl md:text-6xl font-bold text-white text-center">
            Our Services
          </h2>
          <p className="text-white/50 text-center mt-3 md:mt-4">
            Scroll to explore
          </p>
        </TextReveal>
      </div>

      {/* FAN CARDS */}
      <div className="relative w-56 h-80 md:w-64 md:h-96">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            style={{ zIndex: images.length - i }}
          >
            <img src={src} className="w-full h-full object-cover" alt="" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/80 to-transparent">
              <span className="text-white font-mono">0{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FanScrollSection;
