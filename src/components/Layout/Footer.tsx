import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nayaysetu text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/images/logo.jpg"
                alt="Nayaysetu Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Dedicated to protecting your family's legacy and securing your property rights through expert legal counsel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-nayaysetu-gold">Practice Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/practice-areas/pa1" className="text-gray-400 hover:text-white transition-colors">
                  Inheritance Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/pa2" className="text-gray-400 hover:text-white transition-colors">
                  Ancestral Property Disputes
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/pa3" className="text-gray-400 hover:text-white transition-colors">
                  Hindu Succession Law
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-nayaysetu-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-nayaysetu-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-nayaysetu-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  JK Lakshmipat University<br />
                  Jaipur, Rajasthan
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-nayaysetu-gold mr-3 flex-shrink-0" />
                <a href="tel:+918302553346" className="text-gray-400 hover:text-white transition-colors">
                  +91 8302553346 (24x7 Availability)
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-nayaysetu-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@nayaysetu.com" className="text-gray-400 hover:text-white transition-colors">
                  info@nayaysetu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nayaysetu. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;