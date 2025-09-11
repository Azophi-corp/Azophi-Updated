import React from 'react';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}>
        azophi
      </span>
    </div>
  );
};

export default Logo;