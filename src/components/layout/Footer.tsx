import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TehriLogo } from '../common/TehriLogo';

export const Footer: React.FC = () => {
  const { setActiveView, setIsSizeGuideOpen, closeProductDetail } = useShop();

  const handleNav = (view: string) => {
    closeProductDetail();
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-[#F8F5EF] pt-20 md:pt-28 pb-12 border-t border-[#F8F5EF]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-16 border-b border-[#F8F5EF]/10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
              <TehriLogo variant="circular" className="w-full h-full" circleColor="#98323F" textColor="#F8F5EF" />
            </div>
            <div>
              <span className="font-serif tracking-[0.25em] text-2xl font-light block">TEHRI</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5EF]/60">CONTEMPORARY HAUTE COUTURE</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs tracking-widest uppercase text-[#F8F5EF]/70">
            <span>DISPATCHING WORLDWIDE FROM NEW DELHI</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-[#98323F] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 text-xs">
          {/* Column 1: Shop */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#98323F] font-semibold">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-[#F8F5EF]/80">
              <li>
                <button onClick={() => handleNav('new-in')} className="hover:text-white transition-colors cursor-pointer">
                  New Arrivals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('women')} className="hover:text-white transition-colors cursor-pointer">
                  Women's Edit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('men')} className="hover:text-white transition-colors cursor-pointer">
                  Men's Edit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Between Form & Flow
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer">
                  Archive Pieces
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Client Care */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#98323F] font-semibold">
              CLIENT CARE
            </h4>
            <ul className="space-y-2.5 text-[#F8F5EF]/80">
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-white transition-colors cursor-pointer">
                  Bespoke Size Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
                  Shipping & Customs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
                  Complimentary Returns
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('account')} className="hover:text-white transition-colors cursor-pointer">
                  Order Tracking
                </button>
              </li>
              <li>
                <a href="mailto:concierge@tehri.in" className="hover:text-white transition-colors">
                  concierge@tehri.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#98323F] font-semibold">
              THE ATELIER
            </h4>
            <ul className="space-y-2.5 text-[#F8F5EF]/80">
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
                  Brand Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
                  Virgin Wool & Mulberry Silk
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
                  Artisanal Craftsmanship
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
                  Sustainability Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#98323F] font-semibold">
              CHANNELS
            </h4>
            <ul className="space-y-2.5 text-[#F8F5EF]/80">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#98323F]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#pinterest" className="hover:text-white transition-colors">
                  Pinterest Editorial
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:text-white transition-colors">
                  YouTube Fashion Film
                </a>
              </li>
              <li>
                <a href="#spotify" className="hover:text-white transition-colors">
                  Atelier Soundscapes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Huge TEHRI Typography Spanning Across Viewport Width */}
        <div className="py-12 md:py-20 border-t border-[#F8F5EF]/10 flex justify-center overflow-hidden">
          <span className="font-serif tracking-[0.22em] text-[15vw] leading-none text-[#F8F5EF]/15 hover:text-[#98323F]/30 transition-colors duration-700 select-none uppercase font-light">
            TEHRI
          </span>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-[#F8F5EF]/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#F8F5EF]/50 tracking-wider gap-4">
          <div>
            © 2026 TEHRI APPAREL LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
              PRIVACY POLICY
            </button>
            <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
              TERMS OF SERVICE
            </button>
            <button onClick={() => handleNav('story')} className="hover:text-white transition-colors cursor-pointer">
              COOKIE DISCLOSURE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
