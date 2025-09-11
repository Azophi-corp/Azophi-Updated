import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'active';
};

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseStyles = 'rounded-lg bg-white p-6 border border-gray-200';
  
  const variantStyles = {
    default: 'shadow-md',
    hover: 'shadow-md hover:shadow-lg transition-shadow duration-300',
    active: 'shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;