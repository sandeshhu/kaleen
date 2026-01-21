import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: HeadingProps) => (
  <RevealOnScroll className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
      {title}
    </h2>
    <div className={`mt-4 h-1 w-16 bg-gray-900 ${center ? 'mx-auto' : ''}`}></div>
  </RevealOnScroll>
);

export default SectionHeading;