'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Left side - Menu button (mobile) / Logo (desktop) */}
          <div className="flex items-center flex-shrink-0">
            <button 
              className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors -ml-2 z-10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <a 
              href="/" 
              className={`text-2xl font-light tracking-widest uppercase cursor-pointer transition-opacity duration-1000 hidden lg:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              Kaleen<span className="font-bold"> </span>Baba
            </a>
          </div>

          {/* Center - Logo (mobile) / Navigation (desktop) */}
          <div className="flex-1 flex justify-center lg:justify-center lg:flex-none lg:ml-8">
            <a 
              href="/" 
              className={`text-2xl font-light tracking-widest uppercase cursor-pointer transition-opacity duration-1000 lg:hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              Kaleen<span className="font-bold"> </span>Baba
            </a>

            <div className="hidden lg:flex space-x-12">
              {['Collections', 'New Arrivals', 'Design', 'Trade'].map((item, i) => (
                <a 
                  key={item} 
                  href={item === 'Collections' ? '/collections' : item === 'New Arrivals' ? '/new_arrival' : item === 'Design' ? '/design' : item === 'Trade' ? '/trade' : '#'} 
                  className={`text-sm font-medium text-gray-400 hover:text-gray-900 transition-all duration-700 relative group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Cart/Search */}
          <div className={`flex items-center space-x-6 flex-shrink-0 transition-opacity duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button className="hidden sm:block text-gray-900 hover:text-gray-600 transition-colors">
              <span className="text-sm font-medium">Search</span>
            </button>
            <div className="relative group">
              <ShoppingBag className="w-6 h-6 cursor-pointer group-hover:text-gray-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-100 flex-shrink-0">
            <div className="text-2xl font-light tracking-widest uppercase">
              Kaleen<span className="font-bold"> </span>Baba
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-6 flex flex-col space-y-4">
            {[
              { name: 'Collections', href: '/collections' },
              { name: 'New Arrivals', href: '/new_arrival' },
              { name: 'Design', href: '/design' },
              { name: 'Trade', href: '/trade' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-xl font-light text-gray-900 py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-gray-100 flex-shrink-0 space-y-4">
            <button className="w-full text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Search
            </button>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Cart</span>
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-gray-900" />
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;