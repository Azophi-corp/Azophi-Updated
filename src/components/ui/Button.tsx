import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-5 py-3 text-lg',
};

const Button: React.FC<Props> = ({ variant = 'solid', size = 'md', className = '', ...props }) => {
  const base = 'rounded-xl font-semibold transition-colors shadow hover:shadow-md';
  const style =
    variant === 'outline'
      ? 'border border-white text-white hover:bg-white/10'
      : 'bg-brand-600 text-white hover:bg-brand-700';
  return <button className={`${base} ${sizes[size]} ${style} ${className}`} {...props} />;
};

export default Button;
