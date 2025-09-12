import React from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Benefits from "../components/sections/Benefits";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Home: React.FC = () => (
  <>
    <Hero />
    <Services />
    <Benefits />
    <Testimonials />
    <Contact />
  </>
);

export default Home;
