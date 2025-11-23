import React from "react";
import { Link } from "react-router-dom";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline";

type Props = {
  to?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
};

const Button: React.FC<Props> = ({
  to,
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base = "rounded-xl font-semibold transition-colors shadow hover:shadow-md";
  const style =
    variant === "outline"
      ? "border border-white text-white hover:bg-white/10"
      : "bg-brand-600 text-white hover:bg-brand-700";

  if (to) {
    return (
      <Link to={to} className={`${base} ${sizes[size]} ${style} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${sizes[size]} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

// Notes:
// This button supports both regular button behavior and internal navigation through React Router when a "to" prop is passed.
// Size and variant are kept small and predictable so it is easy to get a consistent look across the site.
// The default style uses the brand color but the outline variant is available where we need a lighter treatment.
