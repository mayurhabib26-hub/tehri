import React from 'react';
import { ArrowRight, Film } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp, ScrollParallax } from '../motion/ScrollMotion';

export const CampaignFilm: React.FC = () => {
  const { setActiveView } = useShop();

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#151515] text-[#F8F5EF] select-none my-12">
      {/* Background Cinematic Visual with Scroll Parallax */}
      <ScrollParallax speed={25} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img
          src="/src/assets/images/tehri_campaign_film_1790685989101.jpg"
          alt="TEHRI Autumn Winter Campaign Film"
          className="w-full h-full object-cover object-center filter brightness-[0.8] scale-105"
          referrerPolicy="no-referrer"
        />
      </ScrollParallax>

      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60 z-10" />

      {/* Center Statement with Scroll Fade Up */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <ScrollFadeUp>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#F8F5EF]/80 font-medium mb-4">
            <Film className="w-3.5 h-3.5 text-[#B75D69]" />
            <span>CAMPAIGN FILM · AW 2026</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#F8F5EF] mb-6">
            THE GEOMETRY OF SILENCE
          </h2>

          <p className="text-sm md:text-base text-[#F8F5EF]/85 max-w-xl mx-auto font-light leading-relaxed mb-8">
            Shot in the brutalist monolithic galleries of the north. An exploration of solitude, heavy wools, and uninterrupted lines.
          </p>

          <button
            onClick={() => {
              setActiveView('collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-3 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>VIEW CAMPAIGN ARCHIVE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </ScrollFadeUp>
      </div>
    </section>
  );
};
