import React from 'react';

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/azophi-logo.jpg" alt="Azophi" className="h-8 w-auto mr-2" />
      <span className="text-xl font-bold">Azophi</span>
    </div>
  );
};

export default Logo;
