'use client';

import React, { useRef } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderBeam?: boolean;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor,
  borderBeam = false,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    if (spotlightColor) {
      divRef.current.style.setProperty('--card-spotlight', spotlightColor);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card glass-panel relative rounded-2xl transition-all duration-300 ${
        borderBeam ? 'border-beam' : ''
      } ${className}`}
      {...props}
    >
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
