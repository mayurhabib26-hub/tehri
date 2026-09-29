import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FramerStaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}> = ({ children, className = '', delayChildren = 0.1, staggerChildren = 0.08 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FramerStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FramerHoverButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const FramerBadgeBounce: React.FC<{
  count: number;
  className?: string;
}> = ({ count, className = '' }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        className={className}
      >
        {count}
      </motion.span>
    </AnimatePresence>
  );
};
