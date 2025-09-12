import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <section className="py-32 text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="text-brand-600 hover:text-brand-800 font-semibold">Back to Home →</Link>
  </section>
);
export default NotFound;
