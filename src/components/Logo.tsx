import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'compact';
  invert?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  invert = false 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Modern Architectural Symbol */}
      <div className="relative flex-shrink-0 w-10 h-10 md:w-11 md:h-11">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-label="Mwanaweika Construction Logo Mark"
        >
          {/* Foundation Blocks Base */}
          <rect x="10" y="82" width="80" height="8" rx="1.5" className="fill-amber-500" />
          <rect x="18" y="72" width="64" height="6" rx="1" className="fill-neutral-400" />
          
          {/* Left Structural Pillar */}
          <rect x="20" y="32" width="12" height="36" rx="1" className="fill-amber-500" />
          
          {/* Right Structural Pillar */}
          <rect x="68" y="32" width="12" height="36" rx="1" className="fill-amber-500" />
          
          {/* Central Architectural Apex / "M" Chevron Geometry */}
          <path
            d="M 20 32 L 50 14 L 80 32"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={invert ? "text-neutral-900" : "text-white"}
          />
          
          {/* Central Structural Beam / Tower Core */}
          <polygon
            points="50,22 60,42 40,42"
            className="fill-amber-400"
          />
          <rect x="44" y="45" width="12" height="23" rx="1" className={invert ? "fill-neutral-800" : "fill-white"} />

          {/* Geometric Grid Tie Lines */}
          <line x1="32" y1="52" x2="68" y2="52" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2" className="text-amber-500/80" />
        </svg>
      </div>

      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-extrabold tracking-wider text-sm md:text-base uppercase ${invert ? 'text-neutral-950' : 'text-white'}`}>
            MWANAWEIKA
          </span>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.22em] text-amber-500 uppercase mt-0.5">
            CONSTRUCTION
          </span>
          {variant === 'full' && (
            <span className="text-[8px] tracking-widest text-neutral-400 uppercase mt-0.5 hidden sm:inline">
              MUKONO · UGANDA
            </span>
          )}
        </div>
      )}
    </div>
  );
};
