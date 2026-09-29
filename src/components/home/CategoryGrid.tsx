import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp } from '../motion/ScrollMotion';

const CATEGORIES = [
  {
    id: 'outerwear',
    name: 'OUTERWEAR',
    count: '14 SILHOUETTES',
    image: '/src/assets/images/tehri_hero_campaign_1790685959459.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2 aspect-[4/5] md:aspect-auto',
    desc: 'Double-face cashmere overcoats & structured wool overshirts',
  },
  {
    id: 'dresses',
    name: 'DRESSES & TUNICS',
    count: '09 PIECES',
    image: '/src/assets/images/tehri_collection_women_1790686005820.jpg',
    span: 'col-span-1 aspect-[3/4]',
    desc: 'Bias-cut mulberry silks & fluid evening columns',
  },
  {
    id: 'shirts',
    name: 'SHIRTS & TOPS',
    count: '18 EDITIONS',
    image: '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
    span: 'col-span-1 aspect-[3/4]',
    desc: 'Egyptian poplin button-downs & heavy ribbed knits',
  },
  {
    id: 'trousers',
    name: 'TAILORED TROUSERS',
    count: '11 CUTS',
    image: '/src/assets/images/tehri_collection_men_1790686025637.jpg',
    span: 'col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/9]',
    desc: 'Forward double-pleat columns with side waist adjusters',
  },
];

export const CategoryGrid: React.FC = () => {
  const { setActiveView } = useShop();

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollFadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#151515]/10">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-2">
              EXPLORE BY SILHOUETTE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#151515]">
              CATEGORY ARCHIVE
            </h2>
          </div>
          <p className="text-xs tracking-wider uppercase text-[#151515]/60 mt-2 md:mt-0 font-medium">
            HAND-CRAFTED ATELIER EDITIONS
          </p>
        </div>
      </ScrollFadeUp>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <ScrollFadeUp key={cat.id} delay={idx * 0.08} className={cat.span}>
            <div
              onClick={() => {
                setActiveView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative w-full h-full min-h-[300px] overflow-hidden bg-[#151515] cursor-pointer select-none"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Category Information Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-[#F8F5EF] flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#F8F5EF]/70 block mb-1">
                    {cat.count}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-tight group-hover:text-[#D5AFB4] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#F8F5EF]/80 font-light mt-1 max-w-xs line-clamp-1">
                    {cat.desc}
                  </p>
                </div>

                <div className="w-10 h-10 border border-white/20 group-hover:border-[#98323F] group-hover:bg-[#98323F] flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </ScrollFadeUp>
        ))}
      </div>
    </section>
  );
};
