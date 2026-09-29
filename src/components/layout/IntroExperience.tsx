import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TehriLogo } from '../common/TehriLogo';

interface IntroExperienceProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const IntroExperience: React.FC<IntroExperienceProps> = ({ onComplete, forceShow = false }) => {
  const [phase, setPhase] = useState<'line' | 'text' | 'subtext' | 'curtain' | 'done'>('line');

  useEffect(() => {
    // 0.3s: line expands
    const t1 = setTimeout(() => setPhase('text'), 500);
    // 1.2s: subtext appears
    const t2 = setTimeout(() => setPhase('subtext'), 1200);
    // 2.1s: curtain splits open
    const t3 = setTimeout(() => setPhase('curtain'), 2100);
    // 2.7s: complete and unmount
    const t4 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (phase === 'done' && !forceShow) return null;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#98323F] text-[#F8F5EF] select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Subtle cinematic film grain & ambient vignette */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 mix-blend-soft-light"
            style={{
              backgroundImage: `radial-gradient(circle at center, transparent 40%, rgba(21, 21, 21, 0.5) 100%)`,
            }}
          />

          {/* Curtain Left */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#98323F] border-r border-[#F8F5EF]/10"
            initial={{ x: 0 }}
            animate={phase === 'curtain' ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Curtain Right */}
          <motion.div
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#98323F] border-l border-[#F8F5EF]/10"
            initial={{ x: 0 }}
            animate={phase === 'curtain' ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Central Logo Sequence */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Fine Ivory Line */}
            <motion.div
              className="h-[1px] bg-[#F8F5EF]/60 mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: phase === 'line' ? 80 : 180, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Circular Logo Mark & Wordmark */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={phase !== 'line' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-6 drop-shadow-lg">
                <TehriLogo variant="circular" className="w-full h-full" circleColor="#681F29" textColor="#F8F5EF" />
              </div>

              <motion.div
                className="overflow-hidden"
                initial={{ y: 24, opacity: 0 }}
                animate={phase !== 'line' ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif tracking-[0.35em] text-3xl md:text-5xl font-light text-[#F8F5EF]">
                  TEHRI
                </h1>
              </motion.div>
            </motion.div>

            {/* Subtext Motto */}
            <motion.div
              className="mt-6 overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              animate={phase === 'subtext' || phase === 'curtain' ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#F8F5EF]/80 font-medium">
                AUTUMN / WINTER 2026 · WEAR YOUR STORY
              </p>
            </motion.div>

            {/* Skip Button for quick accessibility */}
            <motion.button
              onClick={() => {
                setPhase('done');
                onComplete();
              }}
              className="absolute -bottom-24 text-[10px] tracking-[0.25em] uppercase text-[#F8F5EF]/50 hover:text-[#F8F5EF] transition-colors py-2 px-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8 }}
            >
              Skip Intro →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
