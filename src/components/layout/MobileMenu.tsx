import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Instagram, ArrowUpRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TehriLogo } from '../common/TehriLogo';

const MENU_ITEMS = [
  { label: 'NEW IN', view: 'new-in', sub: 'Autumn / Winter 2026 Archive', image: '/images/tehri_hero_campaign_1790685959459.jpg' },
  { label: 'WOMEN', view: 'women', sub: 'Fluid Silhouettes & Silk Tailoring', image: '/images/tehri_collection_women_1790686005820.jpg' },
  { label: 'MEN', view: 'men', sub: 'Architectural Minimalist Overcoats', image: '/images/tehri_collection_men_1790686025637.jpg' },
  { label: 'COLLECTIONS', view: 'collections', sub: 'Between Form & Flow', image: '/images/tehri_campaign_film_1790685989101.jpg' },
  { label: 'OUR STORY', view: 'story', sub: 'Artisan Philosophy & Atelier', image: '/images/tehri_editorial_split_1790685974493.jpg' },
];

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setActiveView, closeProductDetail, setIsSizeGuideOpen } = useShop();
  const [activeHoverImage, setActiveHoverImage] = useState<string>(MENU_ITEMS[0].image);

  if (!isMobileMenuOpen) return null;

  const handleSelect = (view: string) => {
    closeProductDetail();
    setActiveView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-[#151515] text-[#F8F5EF] flex flex-col justify-between overflow-y-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#F8F5EF]/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <TehriLogo variant="circular" className="w-full h-full" circleColor="#98323F" textColor="#F8F5EF" />
            </div>
            <span className="font-serif tracking-[0.25em] text-xl font-light">TEHRI</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-[#F8F5EF] hover:text-[#98323F] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-6 py-10 flex flex-col justify-center">
          <div className="space-y-4">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
                onMouseEnter={() => setActiveHoverImage(item.image)}
              >
                <button
                  onClick={() => handleSelect(item.view)}
                  className="group flex flex-col text-left w-full py-2 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl md:text-5xl tracking-wide group-hover:text-[#98323F] transition-colors">
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#F8F5EF]/30 group-hover:text-[#98323F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <span className="text-xs text-[#F8F5EF]/50 tracking-wider mt-1">
                    {item.sub}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Quick Secondary Links */}
          <div className="mt-12 pt-8 border-t border-[#F8F5EF]/10 grid grid-cols-2 gap-4 text-xs tracking-widest uppercase text-[#F8F5EF]/70">
            <button
              onClick={() => handleSelect('account')}
              className="text-left hover:text-[#F8F5EF] transition-colors cursor-pointer"
            >
              Customer Account
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSizeGuideOpen(true);
              }}
              className="text-left hover:text-[#F8F5EF] transition-colors cursor-pointer"
            >
              Size Guide
            </button>
            <button
              onClick={() => handleSelect('wishlist')}
              className="text-left hover:text-[#F8F5EF] transition-colors cursor-pointer"
            >
              Saved Items
            </button>
            <button
              onClick={() => handleSelect('story')}
              className="text-left hover:text-[#F8F5EF] transition-colors cursor-pointer"
            >
              Sustainability & Care
            </button>
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="px-6 py-6 border-t border-[#F8F5EF]/10 flex items-center justify-between text-xs text-[#F8F5EF]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#98323F]" />
            <span className="tracking-widest">ATELIER NEW DELHI · WORLDWIDE</span>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F8F5EF] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@TEHRI</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
