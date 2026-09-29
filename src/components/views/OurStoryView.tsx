import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Feather, Scissors, Compass } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TehriLogo } from '../common/TehriLogo';

export const OurStoryView: React.FC = () => {
  const { setActiveView } = useShop();

  return (
    <article className="min-h-screen bg-[#F8F5EF] text-[#151515] py-8 sm:py-16 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back */}
        <button
          onClick={() => setActiveView('home')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#151515]/60 hover:text-[#98323F] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO STORE</span>
        </button>

        {/* Editorial Cover */}
        <header className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 shadow-md">
            <TehriLogo variant="circular" className="w-full h-full" circleColor="#98323F" textColor="#F8F5EF" />
          </div>
          <span className="text-xs tracking-[0.35em] uppercase text-[#98323F] font-semibold block mb-4">
            ATELIER ESSAY · 2026
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-[#151515] mb-8">
            CLOTHING AS <br />
            <span className="italic font-light text-[#98323F]">LIVING ARCHITECTURE.</span>
          </h1>
          <p className="text-sm md:text-lg text-[#151515]/75 font-light leading-relaxed max-w-2xl mx-auto">
            TEHRI was founded with a singular conviction: that contemporary luxury is not about ornamentation, but about the intimacy between tailored form, natural movement, and honest fiber.
          </p>
        </header>

        {/* Full-width Editorial Visual */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#151515] mb-20 shadow-md">
          <img
            src="/images/tehri_hero_campaign_1790685959459.jpg"
            alt="The TEHRI Atelier"
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.3em] uppercase text-[#F8F5EF]/80">
            FIG. 01 — FORM IN TENSION · NEW DELHI ATELIER
          </div>
        </div>

        {/* Chapter 01: The Manifesto */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 border-t border-[#151515]/10">
          <div className="md:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[#98323F] block mb-2">[01]</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#151515] leading-tight">
              The Philosophy of Permanence
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-sm md:text-base text-[#151515]/80 font-light leading-relaxed">
            <p>
              In an era dominated by fleeting micro-trends and synthetic disposability, TEHRI moves in deliberate opposition. We design pieces intended to inhabit your wardrobe for decades, maturing with your rhythm and gaining patinated beauty with each wear.
            </p>
            <p>
              Every garment begins not with an aesthetic sketch, but with the tactile investigation of the cloth. How does 380gsm virgin wool behave when draped on a bias? How does unwashed Egyptian poplin fall across a relaxed shoulder? By respecting the mechanical physics of each textile, we create silhouettes that do not constrain the human body, but celebrate its natural poise.
            </p>
          </div>
        </section>

        {/* Two Image Editorial Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="aspect-[3/4] overflow-hidden bg-[#ECE8E1]">
            <img
              src="/images/tehri_editorial_split_1790685974493.jpg"
              alt="Atelier Cutting Table"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-12 bg-[#FCFAF7] border border-[#151515]/10">
            <span className="text-xs font-mono tracking-widest text-[#98323F] block mb-2">[02]</span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#151515] mb-4">
              Material Honesty
            </h3>
            <p className="text-xs sm:text-sm text-[#151515]/75 font-light leading-relaxed mb-6">
              We prohibit petroleum-based synthetics in our primary garment fabrics. Polyester and acrylic have no place against bare human skin.
            </p>
            <div className="space-y-3 border-t border-[#151515]/10 pt-4 text-xs">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#98323F]" />
                <span>30 Momme Heavy Washed Mulberry Silk</span>
              </div>
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#98323F]" />
                <span>Responsible Wool Standard (RWS) Certified Merino</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#98323F]" />
                <span>120s Two-Ply Organic Egyptian Cotton Poplin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 03: Small Batch Atelier */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 border-t border-[#151515]/10">
          <div className="md:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[#98323F] block mb-2">[03]</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#151515] leading-tight">
              Atelier Production
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-sm md:text-base text-[#151515]/80 font-light leading-relaxed">
            <p>
              Each TEHRI silhouette is produced in numbered small batches, seldom exceeding eighty pieces worldwide. Our pattern-makers work closely with heritage Indian tailoring master-craftsmen in New Delhi, marrying generations-old hand-finishing techniques with minimalist brutalist geometry.
            </p>
            <p>
              Seams are bound by hand, buttonholes are keyhole-stitched with pure silk thread, and interior facings receive the same meticulous scrutiny as the exterior drape. What remains unseen is as vital as what is visible.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <div className="mt-20 py-16 bg-[#98323F] text-[#F8F5EF] text-center p-8 sm:p-12">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F8F5EF]">
            EXPERIENCE THE ARCHIVE
          </h3>
          <p className="text-xs sm:text-sm text-[#F8F5EF]/85 max-w-md mx-auto mb-8 font-light">
            Explore Autumn / Winter 2026. Made to be felt, worn, and remembered.
          </p>
          <button
            onClick={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#F8F5EF] text-[#151515] hover:bg-[#151515] hover:text-[#F8F5EF] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer"
          >
            EXPLORE COLLECTION 01 →
          </button>
        </div>
      </div>
    </article>
  );
};
