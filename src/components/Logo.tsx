import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8" }: LogoProps) {
  return (
    <div className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Dr.DevOps"
        className={className}
      />
    </div>
  );
}