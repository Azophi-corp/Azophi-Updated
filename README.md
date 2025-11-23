# Azophi Website

This project is a single page application built with React, TypeScript, Vite, React Router, Tailwind CSS, and Netlify friendly form handling. It presents Azophi as an IT consulting and managed services partner.

## Project Structure

- `src/main.tsx`  
  Entry point that mounts the app and wraps it in a `BrowserRouter`.

- `src/App.tsx`  
  Top level layout which renders the shared header and footer and defines all routes.

- `src/components/layout/Header.tsx`  
  Fixed header with logo, navigation, and a mobile menu. It changes style on scroll.

- `src/components/layout/Footer.tsx`  
  Global footer with service links, company links, contact details, and social links.

- `src/components/ui/Button.tsx`  
  Reusable button that can act as a standard button or a React Router link. Supports size and variant props.

- `src/components/ui/Card.tsx`  
  Simple panel component used across services, industries, and other grids.

- `src/components/ui/Logo.tsx`  
  Shared logo component used by header and footer.

- `src/components/sections`  
  Reusable sections used on the home page and sometimes on other pages:
  - `Hero.tsx`  
    Main hero section with headline, value bullets, and a small feature panel.
  - `About.tsx`  
    Compact overview of who Azophi is and how the team works.
  - `Services.tsx`  
    Grid of core service cards that read from the shared configuration.
  - `Benefits.tsx`  
    Animated stats, deeper explanation cards, and the partner logo marquee.
  - `PartnerEcosystem.tsx`  
    Handles the continuously sliding partner logo strip. Logos are loaded from `/public/partners`.
  - `Testimonials.tsx`  
    Lightweight testimonial slider with dots and arrow controls.
  - `Contact.tsx`  
    Contact section with Netlify form, location details, and helper text.

- `src/pages`  
  Route level pages:
  - `Home.tsx`  
    Composes hero, about, services, benefits, testimonials, and contact sections.
  - `About.tsx`  
    Deeper description of how Azophi works and what long term relationships look like.
  - `Industries.tsx`  
    Industry grid with focus areas for each sector.
  - `ContactPage.tsx`  
    Thin wrapper around the shared contact section for the `/contact` route.
  - `Privacy.tsx` and `Terms.tsx`  
    Basic legal pages written in plain language.
  - `NotFound.tsx`  
    Simple 404 page with a link back to home.
  - `pages/services/*`  
    Detail pages for each service line: IT consulting, managed services, cloud solutions, cybersecurity, digital transformation, and data and analytics.

## Partner Logos

The partner logo marquee in `PartnerEcosystem.tsx` expects image files in the `public/partners` directory:

- `public/partners/partner-1.png`
- `public/partners/partner-2.png`
- `public/partners/partner-3.png`
- `public/partners/partner-4.png`
- `public/partners/partner-5.png`

You can replace these with your own files while keeping the same names, or update the array in `PartnerEcosystem.tsx` if you want different filenames.

## Forms And Netlify

The contact form posts to the root path with URL encoded data. A hidden static form is defined in `index.html` so Netlify can detect the form at build time. Spam protection uses a simple honeypot field.

If you change the form name or fields, update both the React component in `Contact.tsx` and the hidden form in `index.html`.

## Styling

Tailwind CSS is used for layout and styling. The site relies heavily on a primary brand color set through custom Tailwind configuration (for example `brand-600` and `brand-800`). When adding new components, follow the same spacing and text scale patterns for consistency.

## Developer Notes

- Comments at the bottom of most files explain the intent of the component so new developers can understand why things came together in a certain way.
- Case study content was intentionally removed from routes and navigation as part of a content simplification pass.
- The site is structured so that shared sections live under `components/sections` and pages mostly focus on composition, which keeps future changes easier to reason about.
