import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp, ScrollParallax } from '../motion/ScrollMotion';

export const FeaturedCollection: React.FC = () => {
  const { openProductDetail, setActiveView } = useShop();
  const highlightedProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Title Header */}
      <ScrollFadeUp>
        <div className="mb-12 md:mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-2">
            COLLECTION 01
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight leading-tight max-w-2xl">
            BETWEEN <br />
            <span className="italic font-light text-[#98323F]">FORM & FLOW.</span>
          </h2>
          <p className="text-sm md:text-base text-[#151515]/70 max-w-lg mt-4 font-light">
            Pieces designed around tactile movement, natural drape, and individuality. Crafted in limited atelier runs using natural renewable fibers.
          </p>
        </div>
      </ScrollFadeUp>

      {/* Editorial Layout: Large Campaign Image with Floating Highlight Cards */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Large Visual Stage with Scroll Parallax */}
        <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden bg-[#ECE8E1] group shadow-sm">
          <ScrollParallax speed={18} className="w-full h-[115%] -top-[7%]">
            <img
              src="/images/tehri_hero_campaign_1790685959459.jpg"
              alt="Collection 01 Campaign"
              className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-1000 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </ScrollParallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F8F5EF] z-20">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#F8F5EF]/70 block">
                ATELIER SERIES · EDITIONS 01-12
              </span>
              <span className="font-serif text-xl sm:text-2xl italic">Sculptural Outerwear in Wine</span>
            </div>
            <button
              onClick={() => {
                setActiveView('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs tracking-[0.2em] uppercase font-semibold underline underline-offset-4 hover:text-[#D5AFB4] transition-colors cursor-pointer"
            >
              EXPLORE THE EDIT →
            </button>
          </div>
        </div>

        {/* Floating Side Editorial Products */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <ScrollFadeUp delay={0.15}>
            <span className="text-xs tracking-[0.25em] uppercase text-[#151515]/60 font-semibold border-b border-[#151515]/10 pb-2 block">
              KEY SILHOUETTES
            </span>
          </ScrollFadeUp>

          <div className="space-y-4">
            {highlightedProducts.map((p, idx) => (
              <ScrollFadeUp key={p.id} delay={0.1 + idx * 0.08}>
                <div
                  onClick={() => openProductDetail(p)}
                  className="group flex items-center gap-4 p-3 bg-[#FCFAF7] border border-[#151515]/10 hover:border-[#98323F] transition-all cursor-pointer"
                >
                  <div className="w-16 h-20 bg-[#ECE8E1] overflow-hidden shrink-0">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#98323F] font-semibold block">
                      {p.badge || 'ATELIER'}
                    </span>
                    <h4 className="text-sm font-medium text-[#151515] group-hover:text-[#98323F] transition-colors truncate">
                      {p.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-[#151515] tabular-nums">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#151515]/50">
                        · {p.sizes.join(' ')}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#151515]/30 group-hover:text-[#98323F] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
