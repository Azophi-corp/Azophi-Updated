import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-fade-in");
      });
    };
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const go = (hash: string) => {
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-24 bg-gradient-to-r from-brand-900 to-brand-800 text-white" ref={heroRef}>
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative IT Solutions for Business Growth
            </h1>
            <p className="text-lg md:text-xl text-brand-100/90 mb-8">
              We provide tailored technology services that drive efficiency, security, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-lg shadow-brand-500/30" onClick={() => go("#services")}>
                Build your IT Strategy
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => go("#contact")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out animate-fade-in">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="IT Professionals collaborating"
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
