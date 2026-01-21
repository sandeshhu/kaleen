'use client';
import React, { ReactNode } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealOnScroll = ({ children, delay = 0, className = '' }: RevealProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;