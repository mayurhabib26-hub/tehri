import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { Product } from '../../data/products';
import { useShop } from '../../context/ShopContext';

interface QuickAddModalProps {
  product: Product;
  onClose: () => void;
}

export const QuickAddModal: React.FC<QuickAddModalProps> = ({ product, onClose }) => {
  const { addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, 1);
    setAdded(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Box */}
        <motion.div
          className="relative w-full max-w-md bg-[#F8F5EF] text-[#151515] p-6 shadow-2xl border border-[#151515]/10 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <div className="flex items-start justify-between pb-4 border-b border-[#151515]/10">
            <div className="flex items-center gap-3">
              <div className="w-14 h-18 bg-[#ECE8E1] overflow-hidden shrink-0">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#98323F] font-semibold block">
                  QUICK SELECTION
                </span>
                <h3 className="text-sm font-medium text-[#151515] line-clamp-1">
                  {product.name}
                </h3>
                <span className="text-xs font-semibold text-[#151515] tabular-nums mt-0.5 block">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#151515]/60 hover:text-[#151515] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Color Choices */}
          <div className="py-4">
            <span className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#151515]">
              Select Colour: <span className="font-normal text-[#151515]/70">{selectedColor}</span>
            </span>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`p-1 rounded-full cursor-pointer ${
                    selectedColor === c.name ? 'ring-2 ring-[#98323F]' : 'opacity-70'
                  }`}
                >
                  <span
                    className="block w-5 h-5 rounded-full border border-black/10"
                    style={{ backgroundColor: c.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Choices */}
          <div className="pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#151515]">
              Select Size
            </span>
            <div className="grid grid-cols-5 gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((sz) => {
                const isAvailable = product.sizes.includes(sz as any);
                const isSelected = selectedSize === sz;
                return (
                  <button
                    key={sz}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-semibold border transition-all cursor-pointer ${
                      !isAvailable
                        ? 'opacity-25 border-[#151515]/10 cursor-not-allowed'
                        : isSelected
                        ? 'bg-[#151515] text-[#F8F5EF] border-[#151515]'
                        : 'border-[#151515]/20 hover:border-[#151515]'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full py-3.5 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <span>CONFIRM & ADD TO BAG</span>
            )}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
