import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/products';

export interface CartItem {
  id: string; // unique item id = `${productId}-${size}-${color}`
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: string[]; // product ids
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  cartSubtotal: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  totalCartCount: number;

  // View state
  activeView: string;
  setActiveView: (view: string) => void;
  selectedProduct: Product | null;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;

  // Modals & Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  quickAddProduct: Product | null;
  setQuickAddProduct: (prod: Product | null) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  
  // Intro animation viewed status
  introDismissed: boolean;
  setIntroDismissed: (dismissed: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 2999;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tehri_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tehri_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeView, setActiveView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [introDismissed, setIntroDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('tehri_intro_seen') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tehri_cart', JSON.stringify(cart));
    } catch {
      // ignore in iframe
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('tehri_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    const itemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, size, color, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartSubtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountUntilFreeShipping,
        totalCartCount,
        activeView,
        setActiveView,
        selectedProduct,
        openProductDetail,
        closeProductDetail,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        quickAddProduct,
        setQuickAddProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        introDismissed,
        setIntroDismissed,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
