import React from "react";
import Logo from "../ui/Logo";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { company, social } from "../../config/site";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-6 text-white" />
            <p className="text-gray-400 mb-6">
              Your trusted partner for innovative IT solutions and managed services.
            </p>
            <div className="flex space-x-4">
              <a href={social.facebook} target="_blank" className="text-gray-400 hover:text-white" rel="noreferrer">
                <Facebook size={20} />
              </a>
              <a href={social.twitter} target="_blank" className="text-gray-400 hover:text-white" rel="noreferrer">
                <Twitter size={20} />
              </a>
              <a href={social.linkedin} target="_blank" className="text-gray-400 hover:text-white" rel="noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={social.instagram} target="_blank" className="text-gray-400 hover:text-white" rel="noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#it-consulting" className="text-gray-400 hover:text-white">IT Consulting</a></li>
              <li><a href="#managed-services" className="text-gray-400 hover:text-white">Managed Services</a></li>
              <li><a href="#cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</a></li>
              <li><a href="#cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</a></li>
              <li><a href="#digital-transformation" className="text-gray-400 hover:text-white">Digital Transformation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-white">Case Studies</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white">Industries</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-brand-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  {company.addressLines.map((l) => (
                    <span key={l}>
                      {l}
                      <br />
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-brand-500 flex-shrink-0" size={18} />
                <a href={company.phoneHref} className="text-gray-400 hover:text-white">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-brand-500 flex-shrink-0" size={18} />
                <a href={company.emailHref} className="text-gray-400 hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
              <a href="#services" className="text-gray-500 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
