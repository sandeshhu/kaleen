'use client';
import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, RefreshCw, ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import ProductCard from '@/components/features/ProductCard';
import MagicCarpet from '@/components/features/MagicCarpet';
import WhatsAppWidget from '@/components/features/WhatsAppWidget';
import { products, testimonials } from '@/lib/data';

// --- Sub-components for cleaner Page file ---
const FeatureItem = ({ icon: Icon, title, description, delay }: any) => (
  <RevealOnScroll delay={delay} className="flex flex-col items-center text-center p-6 border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all duration-300 rounded-lg">
    <div className="mb-4 p-3 bg-gray-100 rounded-full text-gray-900 transform transition-transform group-hover:rotate-12">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{description}</p>
  </RevealOnScroll>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [forceCarpet, setForceCarpet] = useState(false);
  const [showFloatingWidgets, setShowFloatingWidgets] = useState(false);
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$', rate: 1 });

  useEffect(() => {
    // Initial Load Animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Scroll Detection for Floating Widgets
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
         // Show floating widgets after scrolling past hero (approx 600px)
        setShowFloatingWidgets(window.scrollY > 600);
      }
    };
    
    // Currency Detection
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTimeZone === 'Asia/Kolkata' || userTimeZone === 'Asia/Calcutta') {
         setCurrency({ code: 'INR', symbol: '₹', rate: 10.5 });
      }
    } catch (e) {
      console.warn("Could not detect timezone");
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white overflow-x-hidden">
      
      {/* Magic Carpet & Floating Widgets */}
      <MagicCarpet forceTrigger={forceCarpet} />
      
      <div 
        className={`fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3 transition-all duration-700 ease-out transform ${
          showFloatingWidgets ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <WhatsAppWidget />
        <button 
          onClick={() => setForceCarpet(prev => !prev)}
          className="bg-gray-900 text-white px-3 py-1 text-xs rounded opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap"
        >
          Magic Kaleen
        </button>
      </div>

      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop&fm=webp" 
            alt="Modern living room with elegant rug" 
            className="w-full h-full object-cover animate-scale-down"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <div className="overflow-hidden mb-6">
            <span className={`inline-block py-1 px-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase backdrop-blur-sm transition-transform duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Handcrafted Luxury
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
             <div className="overflow-hidden">
               <span className={`block transition-transform duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                 Elevate Your Space with
               </span>
             </div>
             <div className="overflow-hidden">
               <span className={`block font-serif italic transition-transform duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                 Timeless Elegance
               </span>
             </div>
          </h1>

          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Discover our curated collection of artisanal rugs, designed to bring warmth, texture, and modern sophistication to your home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gray-200 cursor-pointer border-none w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Shop New Arrivals
              </Button>
              <Button variant="outline" className="bg-gray-200 cursor-pointer text-gray-900 border-none w-full sm:w-auto hover:bg-white/10 ">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block transition-opacity duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
           <div className="w-[1px] h-16 bg-white/50 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-full bg-white animate-[reveal-mask_1.5s_infinite]"></div>
           </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem delay={0} icon={Truck} title="Complimentary Shipping" description="Free express delivery on all orders over $200. Securely packaged." />
          <FeatureItem delay={200} icon={ShieldCheck} title="Authentic Materials" description="Sourced directly from artisans using 100% organic wool and fibers." />
          <FeatureItem delay={400} icon={RefreshCw} title="30-Day Home Trial" description="Try it in your space. If it doesn't fit your vibe, return it for free." />
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Curated Collection" subtitle="Best Sellers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} currency={currency} />
            ))}
          </div>
          <RevealOnScroll className="mt-16 text-center">
            <Button variant="secondary" className="px-12">View All Rugs</Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <RevealOnScroll className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1596236563224-e2a220a32eef?auto=format&fit=crop&q=80&w=800&fm=webp" alt="Artisan weaving" className="w-full h-80 object-cover rounded-sm translate-y-8 shadow-lg" />
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800&fm=webp" alt="Detailed texture of rug" className="w-full h-80 object-cover rounded-sm shadow-lg" />
            </RevealOnScroll>

            <div className="w-full lg:w-1/2 lg:pl-10">
              <RevealOnScroll delay={200}>
                <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">Our Heritage</span>
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
                  Decades of Expertise, <br />
                  <span className="font-serif italic text-gray-600">Woven into Every Thread.</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded on the belief that a rug is the soul of a room, Kaleen Baba has spent over 20 years partnering with master artisans across the globe. We bridge the gap between traditional craftsmanship and contemporary design.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                   <div><h4 className="text-3xl font-light text-gray-900">20+</h4><span className="text-sm text-gray-500">Years Experience</span></div>
                   <div className="w-px h-10 bg-gray-300"></div>
                   <div><h4 className="text-3xl font-light text-gray-900">5k+</h4><span className="text-sm text-gray-500">Happy Homes</span></div>
                </div>
                <div className="flex items-center text-gray-900 font-medium cursor-pointer hover:text-gray-600 transition-colors group">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-white blur-[150px] rounded-full mix-blend-overlay"></div>
        </div>
        <RevealOnScroll className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-8" fill="currentColor" />
          <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-snug">"{testimonials[0].text}"</h2>
          <div className="flex flex-col items-center">
            <span className="font-medium text-lg tracking-wide">{testimonials[0].author}</span>
            <span className="text-sm text-gray-400 mt-1 uppercase tracking-widest font-xs">{testimonials[0].role}</span>
          </div>
        </RevealOnScroll>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <RevealOnScroll className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Join the Inner Circle</h2>
          <p className="text-gray-500 mb-8">Subscribe to receive early access to new collections and 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors rounded-sm" />
            <Button variant="primary">Subscribe</Button>
          </form>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
}