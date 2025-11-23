import React from "react";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/About";
import Services from "../components/sections/Services";
import Benefits from "../components/sections/Benefits";
import Testimonials from "../components/sections/Testimonials";
import ContactSection from "../components/sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Benefits />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Home;

// Notes:
// The home page is a simple composition of the shared sections in the order we want visitors to experience them.
// AboutSection here is the smaller overview and the About page gives more depth when someone wants details.
// This file stays deliberately thin so design changes happen in the section components, not here.
