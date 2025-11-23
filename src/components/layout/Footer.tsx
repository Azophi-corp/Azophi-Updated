import React from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { company, social } from "../../config/site";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-6 text-white" />
            <p className="text-gray-400 mb-6">
              Your trusted partner for IT consulting, managed services, and secure
              cloud platforms that support everyday work.
            </p>
            <div className="flex space-x-4">
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-400 hover:text-white"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/managed-services"
                  className="text-gray-400 hover:text-white"
                >
                  Managed Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-solutions"
                  className="text-gray-400 hover:text-white"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cybersecurity"
                  className="text-gray-400 hover:text-white"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-transformation"
                  className="text-gray-400 hover:text-white"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/data-analytics"
                  className="text-gray-400 hover:text-white"
                >
                  Data and Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white">
                  Client Feedback
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="mr-3 text-brand-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-gray-400">
                  {company.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-3 text-brand-500 flex-shrink-0"
                  size={18}
                />
                <a
                  href={company.phoneHref}
                  className="text-gray-400 hover:text-white"
                >
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  className="mr-3 text-brand-500 flex-shrink-0"
                  size={18}
                />
                <a
                  href={company.emailHref}
                  className="text-gray-400 hover:text-white"
                >
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
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link
                to="/services"
                className="text-gray-500 hover:text-white text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Notes:
// The footer keeps the same layout so it drops in without any layout regression.
// Case studies were removed from the company column and replaced with a link into testimonials for social proof.
// Services list now includes the data and analytics offering so the footer reflects the full menu of work. 
