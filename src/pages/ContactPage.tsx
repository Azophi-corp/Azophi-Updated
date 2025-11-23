import React from "react";
import ContactSection from "../components/sections/Contact";

const ContactPage: React.FC = () => {
  return <ContactSection />;
};

export default ContactPage;

// Notes:
// This page simply wraps the shared contact section so routing stays clean and we avoid duplicating layout logic.
// Using the same component for the home page and this route keeps the form configuration in one place.
// If we ever need to add extra content around the contact form for the page view we can extend this component.
