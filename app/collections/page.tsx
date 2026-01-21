'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown, X, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/features/ProductCard';
import { productsCollection, ProductCollection } from '@/lib/data';

// --- Types ---
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

export default function CollectionPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Source data
  const products: ProductCollection[] = productsCollection;
  
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Currency (Same logic as Home)
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$', rate: 1 });

  useEffect(() => {
    setIsLoaded(true);
    // Currency Detection
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTimeZone === 'Asia/Kolkata' || userTimeZone === 'Asia/Calcutta') {
        setCurrency({ code: 'INR', symbol: '₹', rate: 20.5 });
      }
    } catch (e) {
      console.warn('Could not detect timezone');
    }
  }, []);

  // --- Derived Data ---
  const categories = Array.from(new Set(products.map(p => p.category)));
  const colors = Array.from(new Set(products.map(p => p.color)));

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category Filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      // Color Filter
      if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
        return false;
      }
      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'newest': return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default: return 0; // featured (default id sort)
      }
    });
  }, [selectedCategories, selectedColors, priceRange, sortBy]);

  // --- Handlers ---
  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleColor = (col: string) => {
    setSelectedColors(prev => 
      prev.includes(col) ? prev.filter(c => c !== col) : [...prev, col]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setPriceRange([0, 1000]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Simple Header */}
      <div className="pt-32 pb-12 px-6 bg-gray-50 text-center">
        <h1 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          The Archives
        </h1>
        <p className={`text-gray-500 max-w-xl mx-auto transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Explore our complete collection of hand-woven masterpieces. Ethically sourced, timelessly designed.
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-gray-100 gap-4">
          <button 
            onClick={() => setIsMobileFiltersOpen(true)}
            className="lg:hidden flex items-center space-x-2 text-sm font-medium hover:text-gray-600 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter & Sort</span>
          </button>

          <span className="text-sm text-gray-500 hidden lg:block">
            Showing {filteredProducts.length} results
          </span>

          {/* Desktop Sort */}
          <div className="hidden lg:flex items-center space-x-3 group relative">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-transparent text-sm font-medium pr-8 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex lg:space-x-12">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-10">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-900">Category</h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                    <div className={`w-4 h-4 border transition-colors flex items-center justify-center ${selectedCategories.includes(cat) ? 'bg-gray-900 border-gray-900' : 'border-gray-300 group-hover:border-gray-500'}`}>
                      {selectedCategories.includes(cat) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-gray-900 font-medium' : 'text-gray-500 group-hover:text-gray-900'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-900">Color</h3>
              <div className="space-y-3">
                {colors.map(col => (
                  <label key={col} className="flex items-center space-x-3 cursor-pointer group">
                    <div className={`w-4 h-4 border transition-colors flex items-center justify-center ${selectedColors.includes(col) ? 'bg-gray-900 border-gray-900' : 'border-gray-300 group-hover:border-gray-500'}`}>
                      {selectedColors.includes(col) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedColors.includes(col)}
                      onChange={() => toggleColor(col)}
                    />
                    <span className={`text-sm transition-colors ${selectedColors.includes(col) ? 'text-gray-900 font-medium' : 'text-gray-500 group-hover:text-gray-900'}`}>
                      {col}
                    </span>
                  </label>
                ))}
              </div>
            </div>

             {/* Price */}
             <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-900">Price Range</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{currency.symbol}{priceRange[0]}</span>
                <span className="h-px w-4 bg-gray-300"></span>
                <span>{currency.symbol}{priceRange[1]}+</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1000" 
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
                className="w-full mt-4 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
              />
            </div>

            {(selectedCategories.length > 0 || selectedColors.length > 0) && (
              <button 
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-gray-900 underline transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} currency={currency} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-gray-400 mb-4">No products match your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className="text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filters Drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${isMobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileFiltersOpen(false)}
        />
        
        {/* Drawer Content */}
        <div className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-light">Filters</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)}>
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="space-y-8">
             {/* Mobile Sort */}
             <div>
               <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Sort By</h3>
               <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full p-2 border border-gray-200 rounded-sm bg-white text-sm"
              >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
             </div>

             {/* Reuse Logic for Mobile Categories */}
             <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Category</h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <label key={`mobile-${cat}`} className="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      className="accent-gray-900 w-4 h-4"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="text-sm text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

             {/* Mobile Price */}
             <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Max Price</h3>
              <input 
                type="range" 
                min="0" 
                max="1000" 
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none accent-gray-900"
              />
              <div className="mt-2 text-right text-sm text-gray-500">
                Up to {currency.symbol}{priceRange[1]}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <button 
              onClick={() => setIsMobileFiltersOpen(false)}
              className="w-full bg-gray-900 text-white py-3 text-sm font-medium rounded-sm"
            >
              Show Results
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}