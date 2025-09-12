import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to?: string; // allow internal navigation
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-5 py-3 text-lg',
};

const Button: React.FC<Props> = ({ to, variant = 'solid', size = 'md', className = '', ...props }) => {
  const base = 'rounded-xl font-semibold transition-colors shadow hover:shadow-md';
  const style =
    variant === 'outline'
      ? 'border border-white text-white hover:bg-white/10'
      : 'bg-brand-600 text-white hover:bg-brand-700';

  // If a `to` prop is provided, render a React Router Link
  if (to) {
    return (
      <Link to={to} className={`${base} ${sizes[size]} ${style} ${className}`}>
        {props.children}
      </Link>
    );
  }

  // Otherwise render a standard button
  return (
    <button className={`${base} ${sizes[size]} ${style} ${className}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

