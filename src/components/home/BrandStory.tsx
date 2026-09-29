import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ScrollFadeUp, ScrollTextReveal } from '../motion/ScrollMotion';

export const BrandStory: React.FC = () => {
  const { setActiveView } = useShop();

  const manifestoText =
    "TEHRI is created for people who treat clothing as more than something they wear. We explore form, movement, texture and individuality to craft pieces designed to become part of your everyday story.";

  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center select-none">
      <div className="flex flex-col items-center">
        <ScrollFadeUp>
          <span className="text-xs tracking-[0.35em] uppercase text-[#98323F] font-semibold mb-8 flex items-center justify-center gap-3">
            <span className="h-[1px] w-6 bg-[#98323F]" />
            OUR PHILOSOPHY
            <span className="h-[1px] w-6 bg-[#98323F]" />
          </span>
        </ScrollFadeUp>

        {/* Scroll Text Reveal: Each word progressively illuminates as user scrolls */}
        <div className="max-w-4xl mx-auto my-4 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.3] font-normal">
          <ScrollTextReveal
            text={manifestoText}
            highlightWords={['more', 'than', 'something', 'they', 'wear.', 'everyday', 'story.']}
          />
        </div>

        <ScrollFadeUp delay={0.2}>
          <p className="mt-8 text-sm md:text-base text-[#151515]/65 max-w-2xl mx-auto font-light leading-relaxed">
            Rooted in artisanal Indian craftsmanship and synthesized with contemporary architectural cuts. Every seam is considered; every textile is chosen for its tactile honesty.
          </p>
        </ScrollFadeUp>

        <ScrollFadeUp delay={0.35}>
          <div className="mt-10">
            <button
              onClick={() => {
                setActiveView('story');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#151515] hover:text-[#98323F] transition-colors border-b border-[#151515]/30 hover:border-[#98323F] pb-1 cursor-pointer"
            >
              <span>READ THE FULL MANIFESTO</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
};
