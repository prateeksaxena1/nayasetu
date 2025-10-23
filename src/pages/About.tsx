import React, { useEffect } from 'react';
import TeamMemberCard from '../components/UI/TeamMemberCard';
import { team } from '../data/team';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Nyaya Setu</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Making legal support accessible, one case at a time.
          </p>
        </div>
      </section>

      {/* Our Firm Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We are committed to making legal support accessible, especially in matters of inheritance law. 
              Our goal is to simplify legal processes and empower individuals through awareness and digital tools.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge We're Addressing</h3>
              <p className="text-gray-700 leading-relaxed">
                Users struggle to access, understand, and navigate judicial information due to overwhelming 
                legal jargon, technological barriers, and a lack of easily accessible resources that can 
                guide them through the legal processes and their rights.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Inheritance Law</h4>
                <p className="text-gray-600">
                  Helping individuals understand and navigate their inheritance rights and responsibilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Women's Legal Rights</h4>
                <p className="text-gray-600">
                  Empowering women with knowledge and support to assert their legal rights.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Property Disputes</h4>
                <p className="text-gray-600">
                  Resolving complex property disputes through legal expertise and mediation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated minds behind Nyaya Setu, working to simplify justice for all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(0, 3).map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;