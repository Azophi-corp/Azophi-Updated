import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="py-32 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-4">
        The page you are looking for is not available or may have been moved.
      </p>
      <p className="text-gray-600 mb-6">
        Use the navigation at the top or return to the home page to continue browsing.
      </p>
      <Link
        to="/"
        className="text-brand-600 hover:text-brand-800 font-semibold underline"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;

// Notes:
// The not found page keeps the message short and friendly while pointing people back to the main site.
// Styling matches the rest of the site and uses the same brand color for the main link.
// If we ever add a search feature we can offer it here as another path for lost visitors.
