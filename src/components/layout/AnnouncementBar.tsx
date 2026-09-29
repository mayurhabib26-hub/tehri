import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const MESSAGES = [
  'COMPLIMENTARY SHIPPING ABOVE ₹2,999 — WORLDWIDE DISPATCH',
  'AUTUMN / WINTER 2026 — COLLECTION 01 NOW LIVE',
  'HAND-CRAFTED EDITIONS IN CERTIFIED VIRGIN WOOL & SILK',
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { setActiveView } = useShop();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-40 bg-[#98323F] text-[#F8F5EF] h-8 text-[11px] md:text-xs tracking-[0.16em] uppercase font-medium flex items-center justify-center px-4 overflow-hidden border-b border-[#F8F5EF]/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-center"
        >
          <span className="truncate max-w-[90vw]">{MESSAGES[index]}</span>
          <button
            onClick={() => setActiveView('shop')}
            className="hidden md:inline-flex items-center gap-1 underline underline-offset-4 hover:text-white transition-colors cursor-pointer ml-1"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
