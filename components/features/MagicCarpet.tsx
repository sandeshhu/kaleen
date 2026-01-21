'use client';
import { useState, useEffect } from 'react';

const MagicCarpet = ({ forceTrigger }: { forceTrigger: boolean }) => {
  const [showCarpet, setShowCarpet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarpet(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (forceTrigger) {
      setShowCarpet(true);
    }
  }, [forceTrigger]);

  if (!showCarpet) return null;

  return (
    <div 
      className="fixed z-[100] w-40 h-28 pointer-events-none animate-fly-carpet"
      style={{ willChange: 'left, bottom, transform' }}
      onAnimationEnd={() => setShowCarpet(false)}
    >
      <div className="absolute inset-0 bg-black/40 blur-xl rounded-full translate-y-20 scale-75"></div>
      <div className="w-full h-full">
        <div className="relative w-full h-full ">
          <img 
            src="https://imgs.search.brave.com/PXjDuOigNMNJ6_gqTADgYQu2p312dpXp0FLXOVz4L5g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTMvQWxh/ZGRpbi1NYWdpYy1D/YXJwZXQtUE5HLUJh/Y2tncm91bmQtSW1h/Z2UucG5n" 
            alt="Flying Magic Carpet" 
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default MagicCarpet;