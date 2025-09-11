import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'IT Consulting', href: '#it-consulting' },
        { name: 'Managed Services', href: '#managed-services' },
        { name: 'Cloud Solutions', href: '#cloud-solutions' },
        { name: 'Cybersecurity', href: '#cybersecurity' },
        { name: 'Digital Transformation', href: '#digital-transformation' },
      ]
    },
    { name: 'About', href: '#about', hasDropdown: false },
    { name: 'Industries', href: '#industries', hasDropdown: false },
    { name: 'Case Studies', href: '#case-studies', hasDropdown: false },
    { name: 'Contact', href: '#contact', hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/azophi-logo.jpg"
              alt="Azophi"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={`font-medium flex items-center transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 ${isScrolled ? 'text-gray-500 group-hover:text-blue-600' : 'text-white group-hover:text-blue-200'
                        }`} />
                    )}
                  </a>

                  {link.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-1">
                        {link.dropdownItems?.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
            <Button className={isScrolled ? '' : 'bg-white text-blue-600 hover:bg-blue-50'}>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'h-6 w-6 text-gray-900' : 'h-6 w-6 text-white'} />
            ) : (
              <Menu className={isScrolled ? 'h-6 w-6 text-gray-900' : 'h-6 w-6 text-white'} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-10 flex flex-col p-8 pt-24 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-lg font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;