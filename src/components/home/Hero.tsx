import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Hero: React.FC = () => {
  const { setActiveView } = useShop();

  const handleExplore = (target: string) => {
    setActiveView(target);
    const element = document.getElementById('new-arrivals');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-end justify-start overflow-hidden bg-[#151515] text-[#F8F5EF] select-none -mt-16 md:-mt-20">
      {/* Background Campaign Media with slow cinematic scale */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/tehri_hero_campaign_1790685959459.jpg"
          alt="TEHRI Autumn Winter 2026 Campaign"
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Luxury Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />
      </motion.div>

      {/* Floating Campaign Badge / Top Right */}
      <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10 hidden sm:flex flex-col items-end text-right">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#F8F5EF]/80 font-medium">
          AUTUMN / WINTER 2026
        </span>
        <span className="text-xs text-[#98323F] font-serif italic mt-0.5">
          Collection 01
        </span>
      </div>

      {/* Hero Typography & Primary CTA */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl">
          {/* Collection Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-3 md:mb-5"
          >
            <span className="h-[1px] w-8 bg-[#98323F]" />
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#F8F5EF]/90 font-medium">
              NEW SEASON / AW 26
            </span>
          </motion.div>

          {/* Main Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#F8F5EF] mb-4 md:mb-6 font-normal"
          >
            DESIGNED <br />
            <span className="italic font-light text-[#DDD4C9]">TO BE FELT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base text-[#F8F5EF]/85 max-w-xl font-light leading-relaxed mb-8 md:mb-10"
          >
            Tactile virgin wools, washed mulberry silks, and sculpted tailoring. An exploration of form, movement, and identity.
          </motion.p>

          {/* Action Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Dark burgundy sheen fashion CTA */}
            <button
              onClick={() => handleExplore('shop')}
              className="group relative inline-flex items-center gap-3 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] px-7 py-3.5 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('featured-lookbook');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.2em] uppercase text-[#F8F5EF]/90 hover:text-white transition-colors py-3.5 px-2 border-b border-white/30 hover:border-white cursor-pointer"
            >
              <span>VIEW THE EDIT</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 right-8 hidden lg:flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#F8F5EF]/60 font-medium"
      >
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
};
