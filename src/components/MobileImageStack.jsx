import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
  "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800",
  "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800",
  "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=800",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
];

const MobileImageStack = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      if (i === 0) return;

      gsap.fromTo(
        img,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => `top+=${(i + 1) * window.innerHeight} top`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative md:hidden bg-black"
      style={{ height: `${images.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        
        {/* CIRCLE IMAGE */}
        <div className="relative w-[85vw] h-[85vw] rounded-full overflow-hidden">
          {images.map((src, i) => (
            <img
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              src={src}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: i }}
            />
          ))}
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="mt-10 text-center text-white">
          <h2 className="text-5xl font-bold tracking-tight">40+</h2>
          <p className="text-sm opacity-70 mt-1">Years</p>

          <h2 className="text-5xl font-bold tracking-tight mt-6">07+</h2>
          <p className="text-sm opacity-70 mt-1">Services</p>
        </div>

      </div>
    </section>
  );
};

export default MobileImageStack;
