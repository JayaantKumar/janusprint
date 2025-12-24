import React from "react";
import TextReveal from "./TextReveal";

const items = [
  { url: "https://5.imimg.com/data5/SELLER/Default/2022/8/AN/PH/YE/15303877/4.webp", label: "URBAN" },
  { url: "https://industry.packaging-labelling.com/articles/1734584753-packaging.png", label: "NIKE" },
  { url: "https://i0.wp.com/1.bp.blogspot.com/-VQmKI98vfVA/XcEEfEP0wGI/AAAAAAAGTlk/ul4qpT74eW00tZmD_sgaPiIs_FDF9nLFwCLcBGAsYHQ/s1600/My-Project-02.jpg?ssl=1", label: "ADIDAS" },
  { url: "https://image.commarts.com/images1/9/5/1/1/115964_101_350_LTk1NTMwNDIwOS0xOTUzMzk5Njg0.jpg", label: "PUMA" },
  { url: "https://a.storyblok.com/f/102007/768x432/94c9316db2/sustainable-packaging-paper-eco-friendly-disposable-tableware-plates-cups-bowls-recycling-signs.jpg/m/filters:quality(90)", label: "VOGUE" },
];

const SlantedMarquee = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col z-10 pb-16">

      {/* TITLE */}
      <div className="w-full flex justify-end px-5 md:px-10 pt-20 md:pt-32 pb-8 md:pb-10 z-20">
        <TextReveal>
          <h2 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase italic leading-[0.95] text-white text-right mix-blend-difference">
            Creative <br />
            <span className="font-serif font-thin not-italic">Showcase</span>
          </h2>
        </TextReveal>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full grow flex items-center justify-center">
        <div className="-rotate-1 md:rotate-[-4deg] w-[130%] border-y border-white/10 bg-zinc-900/20 backdrop-blur-sm py-16 md:py-32">

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee items-center">

              {[...items, ...items, ...items].map((item, i) => (
                <div
                  key={i}
                  className="mx-3 md:mx-8 relative group"
                >
                  <div
                    className="
                      relative
                      w-[75vw] h-[40vh]
                      md:w-[45vw] md:h-[70vh]
                      rounded-md overflow-hidden shadow-2xl
                    "
                  >
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/25 md:bg-black/20 md:group-hover:bg-transparent transition-all" />

                    {/* LABEL */}
                    <span
                      className="
                        absolute bottom-4 left-4
                        md:bottom-10 md:left-10
                        text-lg md:text-5xl
                        font-bold tracking-widest text-white
                        opacity-100 md:opacity-0 md:group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 45s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 65s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default SlantedMarquee;
