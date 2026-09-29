import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  viewKey: string;
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ viewKey, children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={viewKey}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
