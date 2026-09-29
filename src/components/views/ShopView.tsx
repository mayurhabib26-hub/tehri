import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Grid3X3, Grid2X2, ArrowLeft } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { ProductCard } from '../commerce/ProductCard';
import { useShop } from '../../context/ShopContext';

interface ShopViewProps {
  initialCategory?: string;
  initialGender?: 'women' | 'men' | 'all';
  title?: string;
}

export const ShopView: React.FC<ShopViewProps> = ({
  initialCategory = 'all',
  initialGender = 'all',
  title = 'COLLECTION ARCHIVE',
}) => {
  const { setActiveView } = useShop();

  const [category, setCategory] = useState<string>(initialCategory);
  const [gender, setGender] = useState<'women' | 'men' | 'all'>(initialGender);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [gridColumns, setGridColumns] = useState<2 | 3 | 4>(4);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (category !== 'all' && p.category !== category) return false;
      // Gender filter
      if (gender !== 'all' && p.gender !== gender && p.gender !== 'unisex') return false;
      // Size filter
      if (selectedSize !== 'all' && !p.sizes.includes(selectedSize as any)) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0;
    });
  }, [category, gender, selectedSize, sortBy]);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-10 pb-6 border-b border-[#151515]/10">
        <button
          onClick={() => setActiveView('home')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#151515]/60 hover:text-[#98323F] transition-colors mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO JOURNAL</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-1">
              TEHRI ATELIER SELECTION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight">
              {title}
            </h1>
          </div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#151515]/60 font-semibold tabular-nums">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'PIECE' : 'PIECES'} AVAILABLE
          </span>
        </div>
      </div>

      {/* Filter & Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#151515]/10 text-xs">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'all', label: 'All Silhouettes' },
            { id: 'outerwear', label: 'Outerwear' },
            { id: 'shirts', label: 'Shirts & Tops' },
            { id: 'trousers', label: 'Trousers' },
            { id: 'dresses', label: 'Dresses' },
            { id: 'accessories', label: 'Atelier Accessories' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 border transition-all cursor-pointer ${
                category === c.id
                  ? 'bg-[#98323F] text-[#F8F5EF] border-[#98323F]'
                  : 'bg-transparent text-[#151515]/70 border-[#151515]/15 hover:border-[#151515]/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Sort & Grid Density Controls */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-[#151515]/60 hidden sm:inline">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border border-[#151515]/20 py-1.5 px-3 text-xs tracking-wider uppercase focus:outline-none focus:border-[#98323F] cursor-pointer"
            >
              <option value="featured">Featured Editions</option>
              <option value="newest">Newest Releases</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Grid column switchers (Desktop) */}
          <div className="hidden lg:flex items-center border border-[#151515]/20 p-0.5 bg-white">
            <button
              onClick={() => setGridColumns(2)}
              className={`p-1.5 transition-colors cursor-pointer ${gridColumns === 2 ? 'bg-[#98323F] text-white' : 'text-[#151515]/50'}`}
              aria-label="2 columns"
            >
              <Grid2X2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridColumns(3)}
              className={`p-1.5 transition-colors cursor-pointer ${gridColumns === 3 ? 'bg-[#98323F] text-white' : 'text-[#151515]/50'}`}
              aria-label="3 columns"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridColumns(4)}
              className={`p-1.5 transition-colors cursor-pointer ${gridColumns === 4 ? 'bg-[#98323F] text-white' : 'text-[#151515]/50'}`}
              aria-label="4 columns"
            >
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4 p-0.5">
                <span className="bg-current block w-1 h-1" />
                <span className="bg-current block w-1 h-1" />
                <span className="bg-current block w-1 h-1" />
                <span className="bg-current block w-1 h-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <h3 className="font-serif text-3xl text-[#151515] mb-2">NO MATCHING PIECES</h3>
          <p className="text-xs text-[#151515]/60 max-w-sm mx-auto mb-6">
            No garments match the current combination of filters. Try selecting all silhouettes.
          </p>
          <button
            onClick={() => {
              setCategory('all');
              setGender('all');
              setSelectedSize('all');
            }}
            className="bg-[#98323F] text-[#F8F5EF] px-6 py-3 text-xs tracking-widest uppercase font-semibold cursor-pointer"
          >
            RESET FILTERS
          </button>
        </div>
      ) : (
        <div
          className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            gridColumns === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : gridColumns === 3
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};
