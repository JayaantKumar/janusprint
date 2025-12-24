import React from 'react';
import TextReveal from './TextReveal'; // <--- Import

const items = [
    { url: "https://5.imimg.com/data5/SELLER/Default/2022/8/AN/PH/YE/15303877/4.webp", label: "URBAN" },
    { url: "https://industry.packaging-labelling.com/articles/1734584753-packaging.png", label: "NIKE" },
    { url: "https://i0.wp.com/1.bp.blogspot.com/-VQmKI98vfVA/XcEEfEP0wGI/AAAAAAAGTlk/ul4qpT74eW00tZmD_sgaPiIs_FDF9nLFwCLcBGAsYHQ/s1600/My-Project-02.jpg?ssl=1", label: "ADIDAS" },
    { url: "https://image.commarts.com/images1/9/5/1/1/115964_101_350_LTk1NTMwNDIwOS0xOTUzMzk5Njg0.jpg", label: "PUMA" },
    { url: "https://a.storyblok.com/f/102007/768x432/94c9316db2/sustainable-packaging-paper-eco-friendly-disposable-tableware-plates-cups-bowls-recycling-signs.jpg/m/filters:quality(90)", label: "VOGUE" },
];

const SlantedMarquee = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between z-10 pb-20">
      
      {/* Title Area with Reveal */}
      <div className="w-full flex justify-end px-6 md:px-10 pt-24 md:pt-32 pb-10 z-20 bg-black relative">
        <TextReveal className="text-right"> {/* Pass text-right class */}
            <h2 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase italic leading-[0.9] text-white mix-blend-difference">
            Creative <br/> <span className="font-serif font-thin not-italic text-white">Showcase</span>
            </h2>
        </TextReveal>
      </div>

      {/* Tilted Images Section */}
      <div className="relative w-full grow flex items-center justify-center mt-10">
        <div className="-rotate-2 md:rotate-[-4deg] w-[120%] border-y border-white/10 bg-zinc-900/20 backdrop-blur-sm py-20 md:py-32">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee items-center">
              {[...items, ...items, ...items, ...items].map((item, i) => (
                <div 
                  key={i} 
                  className="mx-4 md:mx-8 relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                  style={{ 
                    width: '70vw', 
                    height: '50vh',
                    minWidth: '280px',
                  }}
                >
                    <div className="w-[70vw] h-[50vh] md:w-[45vw] md:h-[70vh]">
                      <img 
                        src={item.url} 
                        alt="" 
                        className="w-full h-full object-cover transition-all duration-700 ease-out rounded-md shadow-2xl" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                      <span className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-3xl md:text-5xl font-bold tracking-widest text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                          {item.label}
                      </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (min-width: 768px) {
            .animate-marquee {
                animation: marquee 60s linear infinite;
            }
        }
      `}</style>
    </section>
  );
};

export default SlantedMarquee;