import React, { useState } from 'react';
import { X, Heart, ChevronDown, ChevronUp, Check, ArrowRight, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';
import { Product, PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart, isInWishlist, toggleWishlist, setIsSizeGuideOpen, openProductDetail } = useShop();
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [openAccordion, setOpenAccordion] = useState<string>('details');
  const [addedNotice, setAddedNotice] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? '' : id));
  };

  // Complementary pieces
  const complementaryProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="fixed inset-0 z-40 bg-[#F8F5EF] text-[#151515] overflow-y-auto">
      {/* Top sticky navigation bar */}
      <div className="sticky top-0 z-30 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#151515]/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif tracking-[0.25em] text-lg font-light">TEHRI</span>
          <span className="text-[#151515]/40 text-xs">/</span>
          <span className="text-xs tracking-wider uppercase text-[#151515]/70 truncate max-w-[200px] sm:max-w-md">
            {product.name}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-[#151515] hover:text-[#98323F] transition-colors cursor-pointer flex items-center gap-1.5 text-xs tracking-widest uppercase font-semibold"
          aria-label="Close product view"
        >
          <span>CLOSE</span>
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Multi-angle Vertical Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Gallery Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-16 h-20 md:w-20 md:h-26 overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-[#98323F] ring-1 ring-[#98323F]'
                      : 'border-[#151515]/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Main Active Image with Subtle Zoom Hover */}
            <div className="flex-1 aspect-[3/4] bg-[#ECE8E1] overflow-hidden relative group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs tracking-[0.25em] font-semibold uppercase text-[#151515] bg-[#F8F5EF]/90 backdrop-blur-sm px-3 py-1 border border-[#151515]/10">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Purchase Module */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Product Header */}
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-1">
                  {product.collection}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#151515] tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs text-[#151515]/60 mt-1 italic font-light">
                  {product.tagline}
                </p>

                {/* Price Display */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xl sm:text-2xl font-semibold text-[#151515] tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-[#151515]/40 line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-[11px] text-[#151515]/60">
                    Taxes Included · Complimentary Dispatch
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="border-t border-[#151515]/10 pt-5">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="tracking-wider uppercase font-semibold text-[#151515]">
                    COLOUR: <span className="font-normal text-[#151515]/70">{selectedColor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`group relative p-1 rounded-full transition-all cursor-pointer ${
                        selectedColor === c.name ? 'ring-2 ring-[#98323F]' : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      <span
                        className="block w-6 h-6 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="border-t border-[#151515]/10 pt-5">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="tracking-wider uppercase font-semibold text-[#151515]">
                    SIZE
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="underline underline-offset-4 text-[#98323F] hover:text-[#681F29] tracking-wider uppercase font-medium cursor-pointer"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => {
                    const isAvailable = product.sizes.includes(sz as any);
                    const isSelected = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        disabled={!isAvailable}
                        onClick={() => setSelectedSize(sz)}
                        className={`h-11 flex items-center justify-center text-xs tracking-wider font-semibold border transition-all cursor-pointer ${
                          !isAvailable
                            ? 'opacity-25 border-[#151515]/10 cursor-not-allowed bg-transparent text-[#151515]'
                            : isSelected
                            ? 'bg-[#151515] text-[#F8F5EF] border-[#151515]'
                            : 'bg-transparent text-[#151515] border-[#151515]/20 hover:border-[#151515]'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTAs: Add to Bag & Wishlist */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleAdd}
                  className="w-full py-4 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>ADDED TO YOUR BAG</span>
                    </>
                  ) : (
                    <span>ADD TO BAG — ₹{product.price.toLocaleString('en-IN')}</span>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="w-full py-3.5 bg-transparent border border-[#151515]/20 hover:border-[#98323F] text-[#151515] hover:text-[#98323F] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorited ? 'fill-[#98323F] text-[#98323F]' : ''
                    }`}
                  />
                  <span>{isFavorited ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}</span>
                </button>
              </div>

              {/* Assurance Trust Callouts */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#151515]/10 text-[11px] text-[#151515]/75">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#98323F]" />
                  <span>100% Certified Fabrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#98323F]" />
                  <span>14-Day Atelier Returns</span>
                </div>
              </div>

              {/* Editorial Accordions */}
              <div className="border-t border-[#151515]/10 pt-4 space-y-2 text-xs">
                {/* Accordion 1: Details */}
                <div className="border-b border-[#151515]/10 pb-3">
                  <button
                    onClick={() => toggleAccordion('details')}
                    className="w-full flex items-center justify-between text-left py-2 font-semibold tracking-wider uppercase text-[#151515] hover:text-[#98323F] cursor-pointer"
                  >
                    <span>DETAILS & CRAFTSMANSHIP</span>
                    {openAccordion === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'details' && (
                    <div className="pt-2 text-[#151515]/80 space-y-2 font-light leading-relaxed">
                      <p>{product.description}</p>
                      <ul className="list-disc pl-4 space-y-1 pt-1">
                        {product.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Size & Fit */}
                <div className="border-b border-[#151515]/10 pb-3">
                  <button
                    onClick={() => toggleAccordion('fit')}
                    className="w-full flex items-center justify-between text-left py-2 font-semibold tracking-wider uppercase text-[#151515] hover:text-[#98323F] cursor-pointer"
                  >
                    <span>SIZE & FIT GUIDANCE</span>
                    {openAccordion === 'fit' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'fit' && (
                    <div className="pt-2 text-[#151515]/80 space-y-2 font-light leading-relaxed">
                      <p>{product.fit}</p>
                      <p className="text-[11px] text-[#151515]/60">
                        Our model is 182cm (5'11") and wears size Medium.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Material & Care */}
                <div className="border-b border-[#151515]/10 pb-3">
                  <button
                    onClick={() => toggleAccordion('material')}
                    className="w-full flex items-center justify-between text-left py-2 font-semibold tracking-wider uppercase text-[#151515] hover:text-[#98323F] cursor-pointer"
                  >
                    <span>MATERIAL & CARE</span>
                    {openAccordion === 'material' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'material' && (
                    <div className="pt-2 text-[#151515]/80 space-y-2 font-light leading-relaxed">
                      <p><strong>Composition:</strong> {product.composition}</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {product.careInstructions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete the Look Section */}
        <div className="mt-20 pt-16 border-t border-[#151515]/10">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#98323F]" />
            <h3 className="font-serif text-2xl md:text-3xl text-[#151515] tracking-tight">
              COMPLETE THE LOOK
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {complementaryProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => openProductDetail(p)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[3/4] bg-[#ECE8E1] overflow-hidden mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#151515] group-hover:text-[#98323F] transition-colors truncate">
                  {p.name}
                </h4>
                <span className="text-xs font-semibold text-[#151515] tabular-nums mt-1">
                  ₹{p.price.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
