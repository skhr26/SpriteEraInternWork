import React from 'react';

export default function Logo({ isDark = false }) {
  return (
    <div className="flex items-center shrink-0">
      <img 
        src="/logo.webp" 
        alt="Vajra LED" 
        className={isDark ? "h-12 sm:h-16 object-contain brightness-0 invert" : "h-12 sm:h-16 object-contain"} 
      />
    </div>
  );
}
