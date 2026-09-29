import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Ruler } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const SIZES_CM = [
  { size: 'XS', chest: '88 - 92', waist: '72 - 76', hip: '90 - 94', length: '72' },
  { size: 'S', chest: '93 - 97', waist: '77 - 81', hip: '95 - 99', length: '74' },
  { size: 'M', chest: '98 - 102', waist: '82 - 86', hip: '100 - 104', length: '76' },
  { size: 'L', chest: '103 - 108', waist: '87 - 92', hip: '105 - 110', length: '78' },
  { size: 'XL', chest: '109 - 115', waist: '93 - 98', hip: '111 - 116', length: '80' },
  { size: 'XXL', chest: '116 - 122', waist: '99 - 105', hip: '117 - 122', length: '82' },
];

const SIZES_IN = [
  { size: 'XS', chest: '34.6 - 36.2', waist: '28.3 - 29.9', hip: '35.4 - 37.0', length: '28.3' },
  { size: 'S', chest: '36.6 - 38.2', waist: '30.3 - 31.9', hip: '37.4 - 39.0', length: '29.1' },
  { size: 'M', chest: '38.6 - 40.2', waist: '32.3 - 33.9', hip: '39.4 - 40.9', length: '29.9' },
  { size: 'L', chest: '40.6 - 42.5', waist: '34.3 - 36.2', hip: '41.3 - 43.3', length: '30.7' },
  { size: 'XL', chest: '42.9 - 45.3', waist: '36.6 - 38.6', hip: '43.7 - 45.7', length: '31.5' },
  { size: 'XXL', chest: '45.7 - 48.0', waist: '39.0 - 41.3', hip: '46.1 - 48.0', length: '32.3' },
];

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'CM' | 'IN'>('CM');

  if (!isSizeGuideOpen) return null;

  const data = unit === 'CM' ? SIZES_CM : SIZES_IN;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSizeGuideOpen(false)}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-2xl bg-[#F8F5EF] text-[#151515] p-6 sm:p-8 shadow-2xl border border-[#151515]/10 z-10"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#151515]/10">
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-[#98323F]" />
              <h2 className="font-serif text-2xl text-[#151515] tracking-tight">
                TEHRI ATELIER SIZE GUIDE
              </h2>
            </div>
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="p-1 text-[#151515]/60 hover:text-[#151515] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Unit Toggle */}
          <div className="flex items-center justify-between my-6">
            <p className="text-xs text-[#151515]/70 font-light">
              Measurements reflect body contours with allowance for our relaxed tailored silhouettes.
            </p>
            <div className="flex items-center border border-[#151515]/20 p-0.5 bg-white shrink-0">
              <button
                onClick={() => setUnit('CM')}
                className={`px-3 py-1 text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                  unit === 'CM' ? 'bg-[#98323F] text-[#F8F5EF]' : 'text-[#151515]/70'
                }`}
              >
                CM
              </button>
              <button
                onClick={() => setUnit('IN')}
                className={`px-3 py-1 text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                  unit === 'IN' ? 'bg-[#98323F] text-[#F8F5EF]' : 'text-[#151515]/70'
                }`}
              >
                IN
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-[#151515]/20 text-[#151515] uppercase tracking-wider font-semibold">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Chest ({unit})</th>
                  <th className="py-2.5 px-3">Waist ({unit})</th>
                  <th className="py-2.5 px-3">Hip ({unit})</th>
                  <th className="py-2.5 px-3">Length ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#151515]/10 text-[#151515]/80 tabular-nums">
                {data.map((row) => (
                  <tr key={row.size} className="hover:bg-[#ECE8E1]/50">
                    <td className="py-2.5 px-3 font-semibold text-[#98323F]">{row.size}</td>
                    <td className="py-2.5 px-3">{row.chest}</td>
                    <td className="py-2.5 px-3">{row.waist}</td>
                    <td className="py-2.5 px-3">{row.hip}</td>
                    <td className="py-2.5 px-3">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure guidance */}
          <div className="mt-8 pt-6 border-t border-[#151515]/10 text-xs text-[#151515]/75 space-y-2">
            <h4 className="font-semibold uppercase tracking-wider text-[#151515]">
              HOW TO MEASURE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.
              </div>
              <div>
                <strong>Waist:</strong> Measure around your natural waistline, typically the narrowest point.
              </div>
              <div>
                <strong>Hips:</strong> Measure around the fullest part of your hips with feet together.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
