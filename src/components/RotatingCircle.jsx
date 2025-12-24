import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
  "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800",
  "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800",
  "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=800",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
];

const RotatingCircle = () => {
  const componentRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: "+=250%", // ✅ SHORTER SCROLL DURATION
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(wheelRef.current, {
        rotation: -360,
        ease: "none",
      });

      gsap.utils.toArray(".wheel-image").forEach((img) => {
        tl.to(img, { rotation: 360, ease: "none" }, 0);
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      className="hidden md:flex h-screen w-full bg-black relative overflow-hidden items-center justify-center z-20"
    >
      {/* ROTATING IMAGE WHEEL */}
      <div
        ref={wheelRef}
        className="relative flex items-center justify-center"
        style={{
          width: "100vw",
          height: "100vw",
          maxWidth: "1000px",
          maxHeight: "1000px",
        }}
      >
        {images.map((src, i) => {
          const angle = (i / images.length) * 360;

          return (
            <div
              key={i}
              className="wheel-image absolute w-[24vw] h-[24vw] md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-black shadow-2xl"
              style={{
                top: "50%",
                left: "50%",
                transform: `
                  translate(-50%, -50%)
                  rotate(${angle}deg)
                  translate(25vw)
                  rotate(-${angle}deg)
                `,
              }}
            >
              <img src={src} className="w-full h-full object-cover scale-110" />
            </div>
          );
        })}
      </div>

      {/* BLACK MASK WITH HOLES */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <mask id="holeMask">
              <rect width="100%" height="100%" fill="white" />
              <circle cx="25%" cy="50%" r="15%" fill="black" />
              <circle cx="75%" cy="50%" r="15%" fill="black" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="black" mask="url(#holeMask)" />
        </svg>
      </div>

      {/* CENTER DOT */}
      <div className="absolute z-40 w-2 h-2 bg-white rounded-full" />

      {/* SIDE TEXT */}
      <div className="absolute z-40 w-full flex justify-between px-12 mix-blend-difference pointer-events-none text-white">
        <div>
          <p className="text-sm opacity-70">Years</p>
          <h2 className="text-8xl font-bold tracking-tighter">40+</h2>
        </div>
        <div className="text-right">
          <h2 className="text-8xl font-bold tracking-tighter">7+</h2>
          <p className="text-sm opacity-70">Services</p>
        </div>
      </div>
    </section>
  );
};

export default RotatingCircle;
