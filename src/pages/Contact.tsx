import React, { useEffect } from 'react';
import ContactForm from '../components/UI/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            We're here to help with your legal needs. Reach out to schedule a consultation or learn more about our services.
            (24x7 Avilability)
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-indigo-800 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Our Office</h3>
                      <p className="text-indigo-100">
                        JK Lakshmipat University<br />
                        BH2 Room No. 208<br />
                        Jaipur, Rajasthan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Business Hours</h3>
                      <p className="text-indigo-100">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: By appointment only<br />
                        Sunday: For Primium Members only<br/>
                        24x7 Availability on Chat Portal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Phone</h3>
                      <p className="text-indigo-100">
                        <a href="tel:+12125551234" className="hover:text-white">+91 93525 11727</a><br />
                        <a href="tel:+18005551234" className="hover:text-white">0141 243-333</a> (Toll-free)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Email</h3>
                      <p className="text-indigo-100">
                        <a href="mailto:info@pursuitlegal.com" className="hover:text-white">info@nayaysetu.com</a><br />
                        <a href="mailto:inquiries@pursuitlegal.com" className="hover:text-white">inquiries@nayaysetu.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold text-amber-400 mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-indigo-200 hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="text-indigo-200 hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.457 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a href="#" className="text-indigo-200 hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Visit Our Office</h2>
          <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
            {/* Here you would typically insert a Google Maps iframe */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-center p-8">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-indigo-800" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map Placeholder</h3>
                <p className="text-gray-600">
                  JK Lakshmipat University<br />
                  Jaipur, Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;