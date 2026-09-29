import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../commerce/ProductCard';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp } from '../motion/ScrollMotion';

const TABS = [
  { id: 'all', label: 'All Editions' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'shirts', label: 'Shirts & Knits' },
  { id: 'trousers', label: 'Tailored Trousers' },
  { id: 'dresses', label: 'Dresses' },
];

export const NewArrivals: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { setActiveView } = useShop();

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'shirts') return p.category === 'shirts';
    return p.category === activeTab;
  }).slice(0, 8);

  return (
    <section id="new-arrivals" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <ScrollFadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#151515]/10">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-2">
              AUTUMN / WINTER SELECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#151515]">
              NEW ARRIVALS
            </h2>
          </div>

          {/* View All link */}
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <button
              onClick={() => {
                setActiveView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#151515] hover:text-[#98323F] transition-colors cursor-pointer"
            >
              <span>VIEW ALL ({PRODUCTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </ScrollFadeUp>

      {/* Interactive Filter Tabs */}
      <ScrollFadeUp delay={0.1}>
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 mb-8 text-xs tracking-wider">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#98323F] text-[#F8F5EF] border-[#98323F]'
                  : 'bg-transparent text-[#151515]/70 border-[#151515]/15 hover:border-[#151515]/40 hover:text-[#151515]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollFadeUp>

      {/* 4-column desktop / 2-column mobile grid with Scroll Stagger */}
      <ScrollFadeUp delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </ScrollFadeUp>
    </section>
  );
};
