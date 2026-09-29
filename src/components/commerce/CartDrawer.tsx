import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeShippingThreshold,
    amountUntilFreeShipping,
    setIsCheckoutOpen,
    setActiveView,
  } = useShop();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    setActiveView('shop');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
        />

        {/* Drawer Panel */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            className="w-screen max-w-md bg-[#F8F5EF] text-[#151515] shadow-2xl flex flex-col justify-between"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#151515]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl tracking-tight text-[#151515]">
                  YOUR BAG
                </span>
                <span className="text-xs text-[#98323F] font-semibold tabular-nums">
                  ({cart.reduce((a, b) => a + b.quantity, 0)})
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-[#151515]/60 hover:text-[#98323F] transition-colors cursor-pointer"
                aria-label="Close bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="bg-[#FCFAF7] px-6 py-4 border-b border-[#151515]/10 text-xs">
              <div className="flex items-center gap-2 mb-2 font-medium">
                <Truck className="w-4 h-4 text-[#98323F]" />
                {amountUntilFreeShipping > 0 ? (
                  <span>
                    Add <strong className="text-[#98323F]">₹{amountUntilFreeShipping.toLocaleString('en-IN')}</strong> for complimentary shipping.
                  </span>
                ) : (
                  <span className="text-[#98323F] font-semibold">
                    You have qualified for complimentary priority dispatch!
                  </span>
                )}
              </div>
              <div className="w-full h-1.5 bg-[#DDD4C9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#98323F] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Item List or Empty State */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#ECE8E1] flex items-center justify-center mb-4 text-[#98323F]">
                    <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#151515] mb-2">
                    YOUR BAG IS EMPTY
                  </h3>
                  <p className="text-xs text-[#151515]/60 max-w-xs font-light mb-6">
                    Perhaps it simply awaits something considered from the TEHRI archive.
                  </p>
                  <button
                    onClick={handleContinueShopping}
                    className="bg-[#98323F] text-[#F8F5EF] px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#681F29] transition-colors cursor-pointer"
                  >
                    DISCOVER NEW ARRIVALS
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-[#151515]/10 last:border-b-0"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-26 bg-[#ECE8E1] overflow-hidden shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-medium text-[#151515] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#151515]/40 hover:text-[#98323F] transition-colors p-1 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] text-[#151515]/60 mt-1 space-x-2">
                          <span>Size: <strong>{item.size}</strong></span>
                          <span>·</span>
                          <span>Color: {item.color}</span>
                        </div>
                      </div>

                      {/* Quantity Stepper & Price */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#151515]/20 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-[#ECE8E1] text-[#151515] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-[#ECE8E1] text-[#151515] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-semibold text-[#151515] tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#FCFAF7] border-t border-[#151515]/10 space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#151515]/70">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#151515] tabular-nums">
                      ₹{cartSubtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#151515]/70">
                    <span>Estimated Shipping</span>
                    <span>{amountUntilFreeShipping === 0 ? 'COMPLIMENTARY' : '₹250'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-semibold text-[#151515] pt-2 border-t border-[#151515]/10">
                    <span>Total Due</span>
                    <span className="tabular-nums text-base text-[#98323F]">
                      ₹{(cartSubtotal + (amountUntilFreeShipping === 0 ? 0 : 250)).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-4 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-[#151515]/50 tracking-wider">
                  Taxes calculated at checkout · UPI, Cards, Net Banking & COD Accepted
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
