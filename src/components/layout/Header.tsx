import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav as navLinks } from "../../config/site";

const scrollToId = (hash: string) => {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToId(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-brand-900/60 backdrop-blur"
        }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/azophi-logo.jpg" alt="Azophi" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    className={`font-medium flex items-center transition-colors ${isScrolled
                      ? "text-gray-700 hover:text-brand-600"
                      : "text-white hover:text-brand-200"
                      }`}
                  >
                    {link.name}
                    {"dropdown" in link && link.dropdown && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 ${isScrolled ? "text-gray-500" : "text-white"
                          }`}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  {"dropdown" in link && link.dropdown && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => onNavClick(e, item.href)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <Button
              onClick={() => scrollToId("#contact")}
              className={isScrolled ? "" : "bg-white text-brand-600 hover:bg-brand-50"}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={isScrolled ? "h-6 w-6 text-gray-900" : "h-6 w-6 text-white"} />
            ) : (
              <Menu className={isScrolled ? "h-6 w-6 text-gray-900" : "h-6 w-6 text-white"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-10 flex flex-col p-8 pt-24 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="text-lg font-medium text-gray-900 hover:text-brand-600"
              >
                {link.name}
              </a>

              {"dropdown" in link && link.dropdown && (
                <ul className="mt-2 ml-4 space-y-2">
                  {link.dropdown.map((d) => (
                    <li key={d.name}>
                      <a
                        href={d.href}
                        onClick={(e) => onNavClick(e, d.href)}
                        className="text-gray-700 hover:text-brand-600"
                      >
                        {d.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button className="w-full" onClick={() => scrollToId("#contact")}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
