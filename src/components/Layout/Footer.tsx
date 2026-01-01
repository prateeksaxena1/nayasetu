import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nayaysetu text-white border-t border-nayaysetu-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/images/logo.jpg"
                alt="Nayaysetu Logo"
                className="h-14 w-auto rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-sm">
              Dedicated to protecting your family's legacy and securing your property rights through expert legal counsel in Jaipur and across India.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-nayaysetu-gold transition-colors transform hover:scale-110 duration-200">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nayaysetu-gold transition-colors transform hover:scale-110 duration-200">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nayaysetu-gold transition-colors transform hover:scale-110 duration-200">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-nayaysetu-gold inline-block pb-1">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-nayaysetu-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nayaysetu-gold rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-nayaysetu-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nayaysetu-gold rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-nayaysetu-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nayaysetu-gold rounded-full mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-nayaysetu-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nayaysetu-gold rounded-full mr-2"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-nayaysetu-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nayaysetu-gold rounded-full mr-2"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-nayaysetu-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nayaysetu-gold rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-nayaysetu-gold inline-block pb-1">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-nayaysetu-gold/10 p-2 rounded-lg mr-4 group-hover:bg-nayaysetu-gold/20 transition-colors">
                  <MapPin size={24} className="text-nayaysetu-gold" />
                </div>
                <span className="text-gray-300">
                  JK Lakshmipat University<br />
                  Jaipur, Rajasthan
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-nayaysetu-gold/10 p-2 rounded-lg mr-4 group-hover:bg-nayaysetu-gold/20 transition-colors">
                  <Phone size={24} className="text-nayaysetu-gold" />
                </div>
                <div>
                  <a href="tel:+918302553346" className="text-gray-300 hover:text-white transition-colors block font-medium">
                    +91 8302553346
                  </a>
                  <span className="text-sm text-gray-500">24x7 Availability</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-nayaysetu-gold/10 p-2 rounded-lg mr-4 group-hover:bg-nayaysetu-gold/20 transition-colors">
                  <Mail size={24} className="text-nayaysetu-gold" />
                </div>
                <a href="mailto:info@nayaysetu.com" className="text-gray-300 hover:text-white transition-colors">
                  info@nayaysetu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Nayaysetu. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-nayaysetu-gold transition-colors">privacy Policy</Link>
            <Link to="/terms" className="hover:text-nayaysetu-gold transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-nayaysetu-gold transition-colors">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;