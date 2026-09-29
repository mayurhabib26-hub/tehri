import React, { useState } from 'react';
import { Heart, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../data/products';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist, openProductDetail, setQuickAddProduct } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const isFavorited = isInWishlist(product.id);
  const primaryImg = product.images[0] || '';
  const secondaryImg = product.images[1] || product.images[0] || '';

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECE8E1] transition-transform duration-500 ease-out"
        onClick={() => openProductDetail(product)}
      >
        {/* Primary Image */}
        <img
          src={primaryImg}
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered && secondaryImg ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary Image (Crossfade on Hover) */}
        {secondaryImg && (
          <img
            src={secondaryImg}
            alt={`${product.name} alternate view`}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Editorial Minimal Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] tracking-[0.25em] font-semibold uppercase text-[#151515] bg-[#F8F5EF]/90 backdrop-blur-sm px-2 py-0.5 border border-[#151515]/10">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Toggle (Top Right) */}
        <motion.button
          whileTap={{ scale: 0.78 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-[#F8F5EF]/80 backdrop-blur-sm hover:bg-[#F8F5EF] text-[#151515] transition-colors cursor-pointer"
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-all ${
              isFavorited ? 'fill-[#98323F] text-[#98323F] scale-110' : 'text-[#151515] hover:text-[#98323F]'
            }`}
          />
        </motion.button>

        {/* Quick Add Slide-up Action (Bottom of Image) */}
        <div
          className={`absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none md:pointer-events-auto'
          }`}
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={(e) => {
              e.stopPropagation();
              setQuickAddProduct(product);
            }}
            className="w-full py-2.5 px-3 bg-[#F8F5EF] hover:bg-[#98323F] text-[#151515] hover:text-[#F8F5EF] text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>QUICK ADD</span>
          </motion.button>
        </div>
      </div>

      {/* Product Metadata Area (Clean, zero pill boxes) */}
      <div className="pt-3.5 pb-2 flex flex-col gap-1">
        {/* Color Swatches */}
        <div className="flex items-center gap-1.5 h-4 mb-0.5">
          {product.colors.map((c, i) => (
            <button
              key={c.name}
              title={c.name}
              onClick={(e) => {
                e.stopPropagation();
                setActiveColorIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                activeColorIndex === i ? 'ring-1 ring-offset-1 ring-[#98323F] scale-110' : 'opacity-70 hover:opacity-100'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <span className="text-[10px] text-[#151515]/50 ml-1 font-light truncate">
            {product.colors[activeColorIndex]?.name}
          </span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => openProductDetail(product)}
          className="text-sm font-medium tracking-tight text-[#151515] hover:text-[#98323F] transition-colors truncate"
        >
          {product.name}
        </h3>

        {/* Pricing in Tabular Numbers */}
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-[#151515] tabular-nums">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-[#151515]/40 line-through tabular-nums">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
