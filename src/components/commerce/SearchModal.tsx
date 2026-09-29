import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openProductDetail, setActiveView } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results: Product[] = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectProduct = (prod: Product) => {
    setIsSearchOpen(false);
    openProductDetail(prod);
  };

  const handleQuickTag = (tag: string) => {
    setQuery(tag);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-[#151515]/95 backdrop-blur-xl text-[#F8F5EF] flex flex-col justify-start">
        {/* Header Bar */}
        <div className="max-w-6xl mx-auto w-full px-6 py-8 flex items-center justify-between border-b border-[#F8F5EF]/15">
          <span className="font-serif tracking-[0.25em] text-xl font-light text-[#F8F5EF]">
            TEHRI ARCHIVE SEARCH
          </span>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-[#F8F5EF] hover:text-[#98323F] transition-colors cursor-pointer flex items-center gap-1.5 text-xs tracking-widest uppercase font-semibold"
          >
            <span>ESC / CLOSE</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Search Input Field */}
        <div className="max-w-4xl mx-auto w-full px-6 pt-12 pb-8">
          <div className="relative border-b-2 border-[#F8F5EF]/30 focus-within:border-[#98323F] transition-colors pb-4 flex items-center gap-4">
            <Search className="w-6 h-6 md:w-8 md:h-8 text-[#98323F] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="WHAT ARE YOU LOOKING FOR?"
              className="w-full bg-transparent text-xl md:text-3xl lg:text-4xl text-[#F8F5EF] placeholder-[#F8F5EF]/30 tracking-wider font-serif uppercase focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs uppercase tracking-wider text-[#F8F5EF]/50 hover:text-[#F8F5EF] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Search Suggestions */}
          {!query && (
            <div className="mt-8">
              <span className="text-xs tracking-[0.25em] uppercase text-[#F8F5EF]/60 block mb-3 font-semibold">
                CURATED INQUIRIES:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Overshirt', 'Cashmere Coat', 'Silk Gown', 'Wine', 'Virgin Wool', 'Trousers'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => handleQuickTag(term)}
                      className="px-3.5 py-1.5 bg-[#F8F5EF]/10 hover:bg-[#98323F] text-[#F8F5EF] transition-colors cursor-pointer tracking-wider"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Live Search Results */}
        <div className="max-w-6xl mx-auto w-full px-6 flex-1 overflow-y-auto pb-16">
          {query.trim() && (
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#F8F5EF]/10">
                <span className="text-xs tracking-[0.2em] uppercase text-[#F8F5EF]/70">
                  {results.length} {results.length === 1 ? 'RESULT' : 'RESULTS'} FOUND FOR “{query}”
                </span>
                {results.length > 0 && (
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setActiveView('shop');
                    }}
                    className="text-xs tracking-wider uppercase text-[#98323F] hover:text-white transition-colors cursor-pointer"
                  >
                    View in Full Catalog →
                  </button>
                )}
              </div>

              {results.length === 0 ? (
                <div className="py-16 text-center text-[#F8F5EF]/60">
                  <p className="font-serif text-2xl text-[#F8F5EF] mb-2">NO MATCHING PIECES FOUND</p>
                  <p className="text-xs max-w-sm mx-auto font-light">
                    Try searching by garment type (e.g., “coat”, “silk”, “overshirt”) or exploring our New Arrivals.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className="group cursor-pointer select-none"
                    >
                      <div className="aspect-[3/4] bg-[#1E1E1E] overflow-hidden mb-3 relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[10px] tracking-wider uppercase text-[#B75D69] block">
                        {product.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-medium text-[#F8F5EF] group-hover:text-[#B75D69] transition-colors truncate">
                        {product.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#F8F5EF] tabular-nums mt-0.5 block">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
