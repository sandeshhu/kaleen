'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';

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

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            className="lg:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <a href="/" className={`text-2xl font-light tracking-widest uppercase cursor-pointer transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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

          <div className={`flex items-center space-x-6 transition-opacity duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <div className="text-2xl font-light tracking-widest uppercase">
            Kaleen<span className="font-bold"> </span>Baba
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        <div className="p-8 flex flex-col space-y-6">
          {['Collections', 'New Arrivals', 'Bestsellers', 'About Us', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-2xl font-light text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-8 border-t border-gray-100">
              <Button className="w-full">View Cart (2)</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;