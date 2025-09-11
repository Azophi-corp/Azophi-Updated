import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'active';
};

const Card: React.FC<Props> = ({ variant = 'default', className = '', ...props }) => {
  const base = 'rounded-xl bg-white border shadow-sm';
  const active = variant === 'active' ? 'hover:shadow-lg transition-shadow' : '';
  return <div className={`${base} ${active} p-6 ${className}`} {...props} />;
};

export default Card;
