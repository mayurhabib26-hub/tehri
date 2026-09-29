import React, { useState } from 'react';
import { Package, MapPin, User, ArrowLeft, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const AccountView: React.FC = () => {
  const { setActiveView } = useShop();
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'profile'>('orders');

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Back button */}
      <button
        onClick={() => setActiveView('home')}
        className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#151515]/60 hover:text-[#98323F] transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>RETURN TO STORE</span>
      </button>

      {/* Account Header */}
      <div className="mb-10 pb-6 border-b border-[#151515]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-1">
            CLIENT PORTAL
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#151515] tracking-tight">
            HELLO, MAYUR
          </h1>
          <p className="text-xs text-[#151515]/60 mt-1">
            Atelier Member since 2026 · Priority Dispatch Status
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 text-xs border border-[#151515]/15 p-1 bg-white">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
              activeTab === 'orders' ? 'bg-[#98323F] text-[#F8F5EF]' : 'text-[#151515]/70 hover:text-[#151515]'
            }`}
          >
            Orders (2)
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
              activeTab === 'addresses' ? 'bg-[#98323F] text-[#F8F5EF]' : 'text-[#151515]/70 hover:text-[#151515]'
            }`}
          >
            Addresses
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
              activeTab === 'profile' ? 'bg-[#98323F] text-[#F8F5EF]' : 'text-[#151515]/70 hover:text-[#151515]'
            }`}
          >
            Sizing & Profile
          </button>
        </div>
      </div>

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          {/* Order 1 */}
          <div className="bg-[#FCFAF7] border border-[#151515]/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#151515]/10 gap-2">
              <div>
                <span className="text-xs font-semibold text-[#151515]">ORDER #TH-918230</span>
                <span className="text-xs text-[#151515]/50 ml-3">Placed 18 Sep 2026</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Delivered via Priority Courier</span>
              </div>
            </div>

            <div className="py-4 flex gap-4 items-center">
              <div className="w-16 h-20 bg-[#ECE8E1] overflow-hidden shrink-0">
                <img
                  src="/images/tehri_hero_campaign_1790685959459.jpg"
                  alt="Sculptural Cashmere Cocoon Coat"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-xs">
                <h4 className="font-semibold text-sm text-[#151515]">
                  Sculptural Cashmere Cocoon Coat
                </h4>
                <p className="text-[#151515]/60 mt-0.5">
                  Size: Medium · Colour: Vintage Wine · 1 Piece
                </p>
                <span className="font-semibold tabular-nums mt-1 block">
                  ₹18,499
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#151515]/10 flex items-center justify-between text-xs">
              <span className="text-[#151515]/60">Total: ₹18,499 (Taxes & Shipping Included)</span>
              <button className="underline hover:text-[#98323F] cursor-pointer">
                Download Atelier Receipt PDF
              </button>
            </div>
          </div>

          {/* Order 2 */}
          <div className="bg-[#FCFAF7] border border-[#151515]/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#151515]/10 gap-2">
              <div>
                <span className="text-xs font-semibold text-[#151515]">ORDER #TH-810924</span>
                <span className="text-xs text-[#151515]/50 ml-3">Placed 26 Sep 2026</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#98323F] font-medium">
                <Clock className="w-4 h-4 text-[#98323F]" />
                <span>In Transit · Out for Delivery</span>
              </div>
            </div>

            <div className="py-4 flex gap-4 items-center">
              <div className="w-16 h-20 bg-[#ECE8E1] overflow-hidden shrink-0">
                <img
                  src="/images/tehri_editorial_split_1790685974493.jpg"
                  alt="Structured Overshirt in Wine Wool"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-xs">
                <h4 className="font-semibold text-sm text-[#151515]">
                  Structured Overshirt in Wine Wool
                </h4>
                <p className="text-[#151515]/60 mt-0.5">
                  Size: Large · Colour: Tehri Burgundy · 1 Piece
                </p>
                <span className="font-semibold tabular-nums mt-1 block">
                  ₹6,499
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#151515]/10 flex items-center justify-between text-xs">
              <span className="text-[#151515]/60">Airway Bill: #DL-941804192 (BlueDart Apex)</span>
              <button className="underline hover:text-[#98323F] cursor-pointer">
                Track Dispatch Status →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Addresses Tab */}
      {activeTab === 'addresses' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FCFAF7] border border-[#98323F] p-6 relative">
            <span className="text-[10px] uppercase tracking-wider text-[#98323F] font-semibold block mb-2">
              PRIMARY RESIDENCE · DEFAULT
            </span>
            <h4 className="text-sm font-semibold text-[#151515]">Mayur Habib</h4>
            <p className="text-xs text-[#151515]/70 mt-2 leading-relaxed">
              Flat 402, Heritage Residency<br />
              Defence Colony, Ring Road<br />
              New Delhi, Delhi 110024<br />
              India
            </p>
            <p className="text-xs text-[#151515]/60 mt-3">+91 98765 43210</p>
          </div>

          <div className="bg-[#FCFAF7] border border-[#151515]/10 p-6 flex flex-col items-center justify-center text-center">
            <MapPin className="w-8 h-8 text-[#151515]/30 mb-2" />
            <h4 className="text-sm font-semibold text-[#151515]">Add Secondary Address</h4>
            <p className="text-xs text-[#151515]/60 mt-1 max-w-xs mb-4">
              Add studio, office, or international vacation address for seamless dispatch.
            </p>
            <button className="px-4 py-2 border border-[#151515]/20 text-xs uppercase font-medium hover:border-[#98323F] hover:text-[#98323F] cursor-pointer">
              + New Address
            </button>
          </div>
        </div>
      )}

      {/* Profile & Sizing Tab */}
      {activeTab === 'profile' && (
        <div className="bg-[#FCFAF7] border border-[#151515]/10 p-6 sm:p-8 space-y-6 text-xs">
          <div>
            <h3 className="font-serif text-2xl text-[#151515] mb-1">
              Atelier Fit Preferences
            </h3>
            <p className="text-[#151515]/60">
              Saved measurements help our concierge recommend the ideal silhouette and drape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#151515]/10">
            <div className="p-4 bg-white border border-[#151515]/10">
              <span className="text-[10px] uppercase tracking-wider text-[#151515]/60 block mb-1">
                Outerwear & Coats
              </span>
              <span className="font-serif text-xl font-bold text-[#98323F]">Size Medium (M)</span>
              <p className="text-[11px] text-[#151515]/60 mt-1">40" Chest / 76cm Length</p>
            </div>

            <div className="p-4 bg-white border border-[#151515]/10">
              <span className="text-[10px] uppercase tracking-wider text-[#151515]/60 block mb-1">
                Tailored Trousers
              </span>
              <span className="font-serif text-xl font-bold text-[#98323F]">Size 32 (M)</span>
              <p className="text-[11px] text-[#151515]/60 mt-1">84cm Waist / Forward Pleat</p>
            </div>

            <div className="p-4 bg-white border border-[#151515]/10">
              <span className="text-[10px] uppercase tracking-wider text-[#151515]/60 block mb-1">
                Poplin Shirts
              </span>
              <span className="font-serif text-xl font-bold text-[#98323F]">Relaxed (M)</span>
              <p className="text-[11px] text-[#151515]/60 mt-1">15.5" Collar / Extended Cuff</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
