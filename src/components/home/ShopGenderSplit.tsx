import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp } from '../motion/ScrollMotion';

export const ShopGenderSplit: React.FC = () => {
  const { setActiveView } = useShop();

  const handleGenderSelect = (gender: 'women' | 'men') => {
    setActiveView(gender);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollFadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* WOMEN Panel */}
          <div
            onClick={() => handleGenderSelect('women')}
            className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer select-none bg-[#151515]"
          >
            <img
              src="/images/tehri_collection_women_1790686005820.jpg"
              alt="TEHRI Women's Collection"
              className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Panel Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 text-[#F8F5EF]">
              <span className="text-xs tracking-[0.3em] uppercase text-[#F8F5EF]/80 font-medium">
                CURATED COLLECTION
              </span>

              <div>
                <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                  WOMEN
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F5EF]/80 max-w-xs font-light mb-6">
                  Fluid draping, architectural coats, and evening silk silhouettes.
                </p>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#F8F5EF] group-hover:text-[#D5AFB4] transition-colors border-b border-white/40 pb-1">
                  <span>SHOP WOMEN</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* MEN Panel */}
          <div
            onClick={() => handleGenderSelect('men')}
            className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer select-none bg-[#151515]"
          >
            <img
              src="/images/tehri_collection_men_1790686025637.jpg"
              alt="TEHRI Men's Collection"
              className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Panel Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 text-[#F8F5EF]">
              <span className="text-xs tracking-[0.3em] uppercase text-[#F8F5EF]/80 font-medium">
                CURATED COLLECTION
              </span>

              <div>
                <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                  MEN
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F5EF]/80 max-w-xs font-light mb-6">
                  Architectural tailoring, textured knitwear, and generous pleated trousers.
                </p>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#F8F5EF] group-hover:text-[#D5AFB4] transition-colors border-b border-white/40 pb-1">
                  <span>SHOP MEN</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeUp>
    </section>
  );
};
