import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll, useSpring } from 'motion/react';
import { useShop } from '../../context/ShopContext';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const {
    isCartOpen,
    isSearchOpen,
    isMobileMenuOpen,
    isSizeGuideOpen,
    selectedProduct,
    isCheckoutOpen,
    introDismissed,
  } = useShop();

  const isModalActive =
    isCartOpen ||
    isSearchOpen ||
    isMobileMenuOpen ||
    isSizeGuideOpen ||
    !!selectedProduct ||
    isCheckoutOpen ||
    !introDismissed;

  useEffect(() => {
    // Only activate smooth scroll if user does not prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause smooth scroll when modal/drawer is open so inner scrolling works natively
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isModalActive) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isModalActive]);

  // Luxury Hairline Scroll Progress Bar along top of viewport
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Editorial Hairline Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#98323F] z-50 origin-left pointer-events-none"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};
