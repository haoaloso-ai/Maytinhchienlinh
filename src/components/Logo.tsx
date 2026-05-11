import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
}

export default function Logo({ className = '', size = 'md', src = '/images/logo.png' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizes[size]} rounded-sm flex items-center justify-center relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt="Logo"
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback if image doesn't exist
          const target = e.target as HTMLImageElement;
          if (target.src !== 'https://placehold.co/100x100/0A192F/E9C46A?text=LOGO') {
            target.src = 'https://placehold.co/100x100/0A192F/E9C46A?text=LOGO';
          }
        }}
      />
    </div>
  );
}
