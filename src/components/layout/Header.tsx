import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import { nav as navLinks } from "../../config/site";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (active: boolean) =>
    `font-medium flex items-center transition-colors ${isScrolled ? "text-gray-700" : "text-white"
    } ${active
      ? "text-brand-600"
      : isScrolled
        ? "hover:text-brand-600"
        : "hover:text-brand-200"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-brand-900 to-brand-800"
        }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/azophi-logo.jpg" alt="Azophi" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {"dropdown" in link && link.dropdown ? (
                    <>
                      <NavLink to={link.to} className={({ isActive }) => linkClass(isActive)}>
                        {link.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 ${isScrolled ? "text-gray-500" : "text-white"
                            }`}
                        />
                      </NavLink>
                      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {link.dropdown.map((d) => (
                            <NavLink
                              key={d.name}
                              to={d.to}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm ${isActive ? "text-brand-700" : "text-gray-700"
                                } hover:bg-brand-50 hover:text-brand-700`
                              }
                            >
                              {d.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink to={link.to} className={({ isActive }) => linkClass(isActive)}>
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* Always-blue button */}
            <Button
              onClick={() => navigate("/contact")}
              className="bg-brand-600 text-white hover:bg-brand-700"
            >
              Get Started
            </Button>
          </div>

          <button className="md:hidden z-20" onClick={() => setIsMenuOpen((v) => !v)}>
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
        <ul className="space-y-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-brand-600" : "text-gray-900 hover:text-brand-600"
                }
              >
                {link.name}
              </NavLink>

              {"dropdown" in link && link.dropdown && (
                <ul className="mt-2 ml-4 space-y-2">
                  {link.dropdown.map((d) => (
                    <li key={d.name}>
                      <NavLink
                        to={d.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          isActive ? "text-brand-600" : "text-gray-700 hover:text-brand-600"
                        }
                      >
                        {d.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Button
          onClick={() => {
            setIsMenuOpen(false);
            navigate("/contact");
          }}
          className="w-full bg-brand-600 text-white hover:bg-brand-700 mt-8"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
