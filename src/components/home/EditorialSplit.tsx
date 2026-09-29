import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp, ScrollParallax } from '../motion/ScrollMotion';

export const EditorialSplit: React.FC = () => {
  const { setActiveView } = useShop();

  return (
    <section className="w-full bg-[#151515] text-[#F8F5EF] overflow-hidden my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Full Height Editorial Fashion Image with Scroll Parallax */}
        <div className="relative min-h-[460px] lg:min-h-[640px] overflow-hidden group">
          <ScrollParallax speed={20} className="w-full h-full">
            <img
              src="/images/tehri_editorial_split_1790685974493.jpg"
              alt="TEHRI Editorial Atelier"
              className="w-full h-[115%] -mt-[8%] object-cover object-center filter brightness-95 transition-transform duration-700 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </ScrollParallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.3em] uppercase text-[#F8F5EF]/80 font-medium z-10">
            ATELIER ARCHIVE · N° 01
          </div>
        </div>

        {/* Right: Signature Deep Burgundy Panel with Scroll Fade */}
        <div className="bg-[#98323F] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between">
          <ScrollFadeUp>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-10 bg-[#F8F5EF]/40" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#F8F5EF]/80 font-semibold">
                  DESIGN PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F8F5EF] tracking-tight leading-[1.05] mb-6">
                THE ART OF <br />
                <span className="italic font-light text-[#DDD4C9]">EVERYDAY DRESSING.</span>
              </h2>

              <p className="text-sm md:text-base text-[#F8F5EF]/90 font-light leading-relaxed max-w-lg mb-8">
                Clothing designed to stay with you, not simply pass through your wardrobe. We balance generous proportions with precision tailoring, choosing natural fibres that develop character over years of wear.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#F8F5EF]/20 max-w-md">
                <div>
                  <span className="font-serif text-2xl md:text-3xl block text-[#F8F5EF]">380<span className="text-sm">GSM</span></span>
                  <span className="text-[11px] tracking-wider uppercase text-[#F8F5EF]/70">Pure Virgin Wool</span>
                </div>
                <div>
                  <span className="font-serif text-2xl md:text-3xl block text-[#F8F5EF]">100%</span>
                  <span className="text-[11px] tracking-wider uppercase text-[#F8F5EF]/70">Organic Traceable Silk</span>
                </div>
              </div>
            </div>
          </ScrollFadeUp>

          <ScrollFadeUp delay={0.2} className="pt-10">
            <button
              onClick={() => {
                setActiveView('story');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-[#F8F5EF] hover:bg-[#151515] text-[#151515] hover:text-[#F8F5EF] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>DISCOVER TEHRI</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </ScrollFadeUp>
        </div>
      </div>
    </section>
  );
};
