import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext';
import { TehriLogo } from '../common/TehriLogo';
import { FramerBadgeBounce } from '../motion/FramerComponents';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    activeView,
    setActiveView,
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen,
    closeProductDetail,
    selectedProduct,
  } = useShop();

  const isDarkHeroView = activeView === 'home' && !selectedProduct;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightText = isDarkHeroView && !isScrolled;

  const handleNavClick = (view: string) => {
    closeProductDetail();
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'new-in', label: 'NEW IN' },
    { id: 'women', label: 'WOMEN' },
    { id: 'men', label: 'MEN' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'story', label: 'STORY' },
  ];

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isLightText ? 'rgba(0, 0, 0, 0)' : 'rgba(248, 245, 239, 0.96)',
        color: isLightText ? '#F8F5EF' : '#151515',
        borderBottomColor: isLightText ? 'rgba(0, 0, 0, 0)' : 'rgba(21, 21, 21, 0.08)',
      }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-30 backdrop-blur-md border-b transition-shadow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Zone 1: Mobile Hamburger & Brand Mark */}
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 -ml-2 hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </motion.button>

          {/* Official Brand Lockup */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="TEHRI Home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-sm">
              <TehriLogo
                variant="circular"
                className="w-full h-full"
                circleColor="#98323F"
                textColor="#F8F5EF"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif tracking-[0.26em] text-xl md:text-2xl font-light uppercase transition-colors ${
                  isLightText ? 'text-[#F8F5EF]' : 'text-[#151515]'
                }`}
              >
                TEHRI
              </span>
            </div>
          </motion.button>
        </div>

        {/* Zone 2: Framer Motion Navigation Links with shared layoutId indicator */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] lg:text-[13px] tracking-[0.2em] font-medium uppercase">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1.5 transition-colors cursor-pointer ${
                  isActive ? 'text-[#98323F] font-semibold' : 'hover:text-[#98323F]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#98323F]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Functional Utilities */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Currency indicator */}
          <span className="hidden lg:inline-block text-[11px] tracking-wider text-[#98323F] font-semibold">
            INR (₹)
          </span>

          {/* Search Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Search collection"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

          {/* Account Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavClick('account')}
            className="hidden sm:block p-2 hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Customer account"
          >
            <User className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

          {/* Wishlist Button with Framer Bounce Badge */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavClick('wishlist')}
            className="relative p-2 hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Wishlist items"
          >
            <Heart
              className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                wishlist.length > 0 ? 'fill-[#98323F] text-[#98323F]' : ''
              }`}
            />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#98323F] text-[#F8F5EF] text-[9px] flex items-center justify-center font-bold">
                <FramerBadgeBounce count={wishlist.length} />
              </span>
            )}
          </motion.button>

          {/* Cart Bag with Count */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 py-2 px-2.5 hover:opacity-85 transition-opacity cursor-pointer group"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            <span
              className={`text-[12px] md:text-[13px] font-semibold tabular-nums ${
                totalCartCount > 0 ? 'text-[#98323F]' : ''
              }`}
            >
              (<FramerBadgeBounce count={totalCartCount} />)
            </span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};
