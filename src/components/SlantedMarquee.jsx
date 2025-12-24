import React from 'react';

// Static Placeholders
const items = [
    { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", label: "URBAN" },
    { url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400", label: "NIKE" },
    { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400", label: "ADIDAS" },
    { url: "https://images.unsplash.com/photo-1560769629-975e13f0c470?w=400", label: "PUMA" },
];

const SlantedMarquee = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden z-10">
      <div className="rotate-[-5deg] scale-110 border-y border-white/10 bg-zinc-900/30 backdrop-blur-sm">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee py-12">
            {[...items, ...items, ...items].map((item, i) => (
              <div key={i} className="mx-8 w-64 h-40 shrink-0 relative group cursor-pointer">
                <img 
                  src={item.url} 
                  alt="" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-md" 
                />
                <span className="block mt-4 text-sm tracking-widest text-white opacity-50">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SlantedMarquee;