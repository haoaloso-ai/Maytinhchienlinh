import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const navyColor = '#0A192F';

  return (
    <div className={`${sizes[size]} bg-[#E9C46A] rounded-sm flex items-center justify-center relative overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-[80%] h-[80%]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arc - starts near 12 o'clock, goes counter-clockwise to near 3 o'clock */}
        <path 
          d="M 50 10 A 40 40 0 1 0 90 50" 
          stroke={navyColor} 
          strokeWidth="10" 
          strokeLinecap="butt"
        />
        {/* L shape */}
        <path 
          d="M 50 10 V 50 H 90" 
          stroke={navyColor} 
          strokeWidth="10" 
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}
