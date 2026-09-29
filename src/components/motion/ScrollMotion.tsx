import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollFadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const ScrollFadeUp: React.FC<ScrollFadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 32,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number; // e.g. -20 to 20
  className?: string;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  speed = 15,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};

interface ScrollTextRevealProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  highlightWords = ['more than something they wear.', 'everyday story.'],
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.4'],
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            isHighlight={highlightWords.some((hw) => hw.toLowerCase().includes(word.toLowerCase()))}
          />
        );
      })}
    </div>
  );
};

const Word: React.FC<{
  word: string;
  range: [number, number];
  progress: any;
  isHighlight?: boolean;
}> = ({ word, range, progress, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, [
    'rgba(21, 21, 21, 0.25)',
    isHighlight ? '#98323F' : '#151515',
  ]);

  return (
    <span className="relative mr-2 md:mr-3 inline-block">
      <motion.span style={{ opacity, color }} className="inline-block transition-colors">
        {word}
      </motion.span>
    </span>
  );
};
