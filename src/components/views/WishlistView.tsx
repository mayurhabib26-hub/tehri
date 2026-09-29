import React from 'react';
import { Heart, Trash2, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export const WishlistView: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart, setActiveView, openProductDetail } = useShop();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-[#151515]/10">
        <button
          onClick={() => setActiveView('home')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#151515]/60 hover:text-[#98323F] transition-colors mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO HOME</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-1">
              SAVED PIECES
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#151515] tracking-tight">
              YOUR WISHLIST
            </h1>
          </div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#151515]/60 font-semibold tabular-nums">
            {savedProducts.length} {savedProducts.length === 1 ? 'PIECE' : 'PIECES'} SAVED
          </span>
        </div>
      </div>

      {savedProducts.length === 0 ? (
        <div className="py-24 text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#ECE8E1] text-[#98323F] flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 stroke-[1.2]" />
          </div>
          <h2 className="font-serif text-3xl text-[#151515] mb-2">
            YOUR WISHLIST IS WAITING
          </h2>
          <p className="text-xs text-[#151515]/60 leading-relaxed mb-8">
            Curate your personal collection of TEHRI garments. Save pieces to review proportions, fabrics, and availability.
          </p>
          <button
            onClick={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer"
          >
            DISCOVER THE COLLECTION →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FCFAF7] border border-[#151515]/10 flex flex-col justify-between p-4"
            >
              <div
                onClick={() => openProductDetail(product)}
                className="aspect-[3/4] bg-[#ECE8E1] overflow-hidden mb-4 cursor-pointer relative"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-[#F8F5EF]/90 hover:bg-[#98323F] text-[#151515] hover:text-[#F8F5EF] transition-colors cursor-pointer"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#98323F] font-semibold block">
                  {product.category}
                </span>
                <h3
                  onClick={() => openProductDetail(product)}
                  className="text-sm font-medium text-[#151515] hover:text-[#98323F] transition-colors truncate cursor-pointer"
                >
                  {product.name}
                </h3>
                <span className="text-xs font-semibold text-[#151515] tabular-nums mt-1 block">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="pt-4 mt-4 border-t border-[#151515]/10">
                <button
                  onClick={() => {
                    addToCart(product, product.sizes[0], product.colors[0]?.name || 'Standard', 1);
                  }}
                  className="w-full py-2.5 bg-[#151515] hover:bg-[#98323F] text-[#F8F5EF] text-xs tracking-[0.15em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>MOVE TO BAG</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
