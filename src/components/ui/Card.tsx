import React from "react";

type CardVariant = "default" | "active";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const Card: React.FC<Props> = ({ variant = "default", className = "", ...props }) => {
  const base = "rounded-xl bg-white border shadow-sm";
  const active = variant === "active" ? "hover:shadow-lg transition-shadow" : "";
  return <div className={`${base} ${active} p-6 ${className}`} {...props} />;
};

export default Card;

// Notes:
// The card component gives us a single place to define the base panel style used around the site.
// The "active" variant adds a light hover state for cards that should feel clickable or highlighted.
// Keeping this generic makes it easy to use for services, industries, and any other grid content.
