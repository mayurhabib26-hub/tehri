import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, CreditCard, Smartphone, Banknote, Building2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TehriLogo } from '../common/TehriLogo';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartSubtotal, amountUntilFreeShipping, clearCart } = useShop();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [formData, setFormData] = useState({
    name: 'Mayur Habib',
    email: 'mayurhabib26@gmail.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Heritage Residency, Defence Colony',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110024',
    country: 'India',
    paymentMethod: 'upi',
    upiId: 'mayur@okhdfcbank',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvv: '•••',
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const shippingCost = amountUntilFreeShipping === 0 ? 0 : 250;
  const finalTotal = cartSubtotal + shippingCost;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `TH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('confirmed');
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('details');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F8F5EF] text-[#151515]">
        {/* Top Header */}
        <div className="max-w-5xl mx-auto px-6 py-6 border-b border-[#151515]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <TehriLogo variant="circular" className="w-full h-full" circleColor="#98323F" textColor="#F8F5EF" />
            </div>
            <div>
              <span className="font-serif tracking-[0.25em] text-xl font-light block">TEHRI</span>
              <span className="text-[10px] tracking-widest uppercase text-[#98323F] font-semibold">SECURE ATELIER CHECKOUT</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-[#151515]/60 hover:text-[#98323F] cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-10">
          {step === 'confirmed' ? (
            /* Order Confirmation View */
            <div className="max-w-xl mx-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#98323F] text-[#F8F5EF] flex items-center justify-center mx-auto mb-6 shadow-md">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-2">
                ORDER #{orderNumber} CONFIRMED
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#151515] mb-4">
                Thank you, {formData.name}.
              </h2>
              <p className="text-xs sm:text-sm text-[#151515]/70 max-w-md mx-auto leading-relaxed mb-8">
                Your bespoke pieces have been reserved at the atelier. A confirmation dispatch note and invoice have been sent to <strong>{formData.email}</strong>.
              </p>

              <div className="bg-[#FCFAF7] border border-[#151515]/10 p-6 text-left text-xs space-y-2 mb-8">
                <div className="flex justify-between border-b border-[#151515]/10 pb-2">
                  <span className="text-[#151515]/60">Shipping Destination:</span>
                  <span className="font-medium text-right">{formData.address}, {formData.city}, {formData.pincode}</span>
                </div>
                <div className="flex justify-between border-b border-[#151515]/10 pb-2">
                  <span className="text-[#151515]/60">Payment Status:</span>
                  <span className="font-medium text-[#98323F]">Authorized ({formData.paymentMethod.toUpperCase()})</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#151515]/60">Total Amount Paid:</span>
                  <span className="font-bold text-sm tabular-nums">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer"
              >
                RETURN TO ATELIER STORE
              </button>
            </div>
          ) : (
            /* Checkout Form Grid */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Input Sections */}
              <div className="lg:col-span-7">
                {step === 'details' ? (
                  <form onSubmit={handleDetailsSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl text-[#151515] mb-1">
                        1. Contact & Delivery Destination
                      </h3>
                      <p className="text-xs text-[#151515]/60">
                        Please provide your dispatch coordinates for courier receipt.
                      </p>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                            Phone Number (for SMS Tracking)
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                          Street Address & Residence
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                            City
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                            State
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#151515]">
                            PIN Code
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                            className="w-full bg-white border border-[#151515]/20 p-3 focus:outline-none focus:border-[#98323F]"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer"
                    >
                      CONTINUE TO PAYMENT METHOD →
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handlePlaceOrder} className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl text-[#151515]">
                          2. Select Payment Method
                        </h3>
                        <button
                          type="button"
                          onClick={() => setStep('details')}
                          className="text-xs text-[#98323F] underline cursor-pointer"
                        >
                          Edit Address
                        </button>
                      </div>
                      <p className="text-xs text-[#151515]/60 mt-1">
                        Encrypted 256-bit SSL transaction for Indian and international cards.
                      </p>
                    </div>

                    <div className="space-y-3 text-xs">
                      {/* UPI Option */}
                      <label className={`flex items-center justify-between p-4 border cursor-pointer transition-colors bg-white ${formData.paymentMethod === 'upi' ? 'border-[#98323F] ring-1 ring-[#98323F]' : 'border-[#151515]/15'}`}>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'upi'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                            className="accent-[#98323F]"
                          />
                          <div>
                            <span className="font-semibold block text-[#151515]">Instant UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
                            <span className="text-[11px] text-[#151515]/60">Zero processing surcharge</span>
                          </div>
                        </div>
                        <Smartphone className="w-5 h-5 text-[#98323F]" />
                      </label>

                      {/* Card Option */}
                      <label className={`flex items-center justify-between p-4 border cursor-pointer transition-colors bg-white ${formData.paymentMethod === 'card' ? 'border-[#98323F] ring-1 ring-[#98323F]' : 'border-[#151515]/15'}`}>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'card'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                            className="accent-[#98323F]"
                          />
                          <div>
                            <span className="font-semibold block text-[#151515]">Credit or Debit Cards</span>
                            <span className="text-[11px] text-[#151515]/60">Visa, Mastercard, RuPay, American Express</span>
                          </div>
                        </div>
                        <CreditCard className="w-5 h-5 text-[#98323F]" />
                      </label>

                      {/* Net Banking Option */}
                      <label className={`flex items-center justify-between p-4 border cursor-pointer transition-colors bg-white ${formData.paymentMethod === 'netbanking' ? 'border-[#98323F] ring-1 ring-[#98323F]' : 'border-[#151515]/15'}`}>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'netbanking'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'netbanking' })}
                            className="accent-[#98323F]"
                          />
                          <div>
                            <span className="font-semibold block text-[#151515]">Net Banking</span>
                            <span className="text-[11px] text-[#151515]/60">HDFC, ICICI, SBI, Axis, and 50+ banks</span>
                          </div>
                        </div>
                        <Building2 className="w-5 h-5 text-[#98323F]" />
                      </label>

                      {/* Cash on Delivery Option */}
                      <label className={`flex items-center justify-between p-4 border cursor-pointer transition-colors bg-white ${formData.paymentMethod === 'cod' ? 'border-[#98323F] ring-1 ring-[#98323F]' : 'border-[#151515]/15'}`}>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="payment"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                            className="accent-[#98323F]"
                          />
                          <div>
                            <span className="font-semibold block text-[#151515]">Cash on Delivery (COD)</span>
                            <span className="text-[11px] text-[#151515]/60">Pay cash or UPI upon courier arrival</span>
                          </div>
                        </div>
                        <Banknote className="w-5 h-5 text-[#98323F]" />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#98323F] hover:bg-[#681F29] text-[#F8F5EF] text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer shadow-lg"
                    >
                      AUTHORIZE & PLACE ORDER (₹{finalTotal.toLocaleString('en-IN')})
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#151515]/10 p-6 sm:p-8 space-y-6">
                <h4 className="font-serif text-xl text-[#151515] pb-3 border-b border-[#151515]/10">
                  ORDER SUMMARY ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h4>

                <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 text-xs">
                      <div className="w-14 h-18 bg-[#ECE8E1] shrink-0 overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-[#151515] line-clamp-1">{item.product.name}</h5>
                        <p className="text-[11px] text-[#151515]/60">
                          {item.size} · {item.color} · Qty: {item.quantity}
                        </p>
                        <span className="font-semibold tabular-nums mt-1 block">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#151515]/10 pt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-[#151515]/70">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#151515] tabular-nums">
                      ₹{cartSubtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#151515]/70">
                    <span>Priority Shipping</span>
                    <span>{shippingCost === 0 ? 'COMPLIMENTARY' : '₹250'}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-[#151515] pt-2 border-t border-[#151515]/10">
                    <span>Final Amount</span>
                    <span className="tabular-nums text-[#98323F] text-base">
                      ₹{finalTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[10px] text-[#151515]/60">
                  <ShieldCheck className="w-4 h-4 text-[#98323F]" />
                  <span>Atelier Authentication Guarantee & 14-day exchange privilege</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
