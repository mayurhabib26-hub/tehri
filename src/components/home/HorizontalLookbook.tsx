import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { LOOKBOOK_EDITS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export const HorizontalLookbook: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setActiveView } = useShop();

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-lookbook" className="py-20 md:py-28 bg-[#1E1E1E] text-[#F8F5EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#B75D69] font-semibold block mb-2">
            LOOKBOOK ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#F8F5EF]">
            THE TEHRI EDIT
          </h2>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll('left')}
            className="w-10 h-10 border border-[#F8F5EF]/20 hover:border-[#F8F5EF] flex items-center justify-center transition-colors cursor-pointer text-[#F8F5EF]"
            aria-label="Scroll lookbook left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-10 h-10 border border-[#F8F5EF]/20 hover:border-[#F8F5EF] flex items-center justify-center transition-colors cursor-pointer text-[#F8F5EF]"
            aria-label="Scroll lookbook right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-smooth pb-4"
      >
        {LOOKBOOK_EDITS.map((item) => (
          <div
            key={item.number}
            onClick={() => {
              setActiveView('collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative flex-none w-[280px] sm:w-[340px] md:w-[380px] aspect-[3/4] overflow-hidden cursor-pointer select-none bg-[#151515]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Lookbook Number Badge */}
            <div className="absolute top-4 left-4 z-10 text-xs font-mono tracking-widest text-[#B75D69]">
              [{item.number}]
            </div>

            {/* Details Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 z-10">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#F8F5EF]/70 block mb-1">
                FEATURED LOOK
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#F8F5EF] tracking-tight mb-2 group-hover:text-[#D5AFB4] transition-colors flex items-center justify-between">
                <span>{item.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#F8F5EF]/40 group-hover:text-[#D5AFB4] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              <p className="text-xs text-[#F8F5EF]/80 font-light leading-relaxed mb-3 line-clamp-2">
                {item.subtitle}
              </p>
              <div className="text-[11px] text-[#DDD4C9] font-medium border-t border-white/15 pt-2">
                {item.look}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
