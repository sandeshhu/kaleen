'use client';
import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  index: number;
  currency: { symbol: string; rate: number };
}

const ProductCard = ({ product, index, currency }: ProductCardProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle tilt
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  const displayPrice = Math.round(product.price * currency.rate).toLocaleString();

  return (
    <RevealOnScroll delay={index * 100}>
      <div 
        className="group cursor-pointer transition-transform duration-300 ease-out preserve-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4 rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-300">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5 text-gray-900" />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center z-10">
            <span className="text-sm font-medium text-gray-900">Quick Add</span>
            <ArrowRight className="w-4 h-4 text-gray-900" />
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 mb-1">{product.category}</p>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
              {product.name}
            </h3>
          </div>
          <span className="text-lg font-medium text-gray-900">
            {currency.symbol}{displayPrice}
          </span>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ProductCard;