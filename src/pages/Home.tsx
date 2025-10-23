import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/UI/Button';
import ConsultationForm from '../components/UI/ConsultationForm';
import CaseStudyCard from '../components/UI/CaseStudyCard';
import TestimonialCard from '../components/UI/TestimonialCard';
import ResourceCard from '../components/UI/ResourceCard';
import TeamMemberCard from '../components/UI/TeamMemberCard';
import InheritanceLawModal from '../components/UI/InheritanceLawModal';
import IntellectualPropertyModal from '../components/UI/IntellectualPropertyModal';
import HinduSuccessionModal from '../components/UI/HinduSuccessionModal';
import { caseStudies } from '../data/caseStudies';
import { testimonials } from '../data/testimonials';
import { resources } from '../data/resources';
import { team } from '../data/team';
import { practiceAreas } from '../data/practiceAreas';
import { Briefcase, Lightbulb, Leaf, Users, Globe, ArrowRight, Award, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase className="w-6 h-6" />;
    case 'Lightbulb':
      return <Lightbulb className="w-6 h-6" />;
    case 'Leaf':
      return <Leaf className="w-6 h-6" />;
    case 'Users':
      return <Users className="w-6 h-6" />;
    case 'Globe':
      return <Globe className="w-6 h-6" />;
    default:
      return <Briefcase className="w-6 h-6" />;
  }
};

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showInheritanceLawModal, setShowInheritanceLawModal] = useState(false);
  const [showIntellectualPropertyModal, setShowIntellectualPropertyModal] = useState(false);
  const [showHinduSuccessionModal, setShowHinduSuccessionModal] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
  const featuredResources = resources.filter(r => r.featured);
  const featuredTeamMembers = team.filter(t => t.featured);

  const caseData = [
    { name: 'Successful Cases', value: 93, color: '#22c55e' },
    { name: 'Ongoing Cases', value: 5, color: '#eab308' },
    { name: 'Unsuccessful Cases', value: 2, color: '#ef4444' },
  ];

  const stats = [
    { label: 'Case Success Rate', value: '93%' },
    { label: 'Clients Helped', value: '500+' },
    { label: 'Inheritance Disputes Resolved', value: '100+' },
    { label: 'Landmark Judgments', value: '15+' },
  ];
  
  return (
    <div>
      {showConsultationForm && (
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      )}
      
      {showInheritanceLawModal && (
        <InheritanceLawModal onClose={() => setShowInheritanceLawModal(false)} />
      )}

      {showIntellectualPropertyModal && (
        <IntellectualPropertyModal onClose={() => setShowIntellectualPropertyModal(false)} />
      )}

      {showHinduSuccessionModal && (
        <HinduSuccessionModal onClose={() => setShowHinduSuccessionModal(false)} />
      )}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg)', 
            filter: 'brightness(0.4)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight whitespace-pre-line">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="large"
              onClick={() => setShowConsultationForm(true)}
            >
              {t('hero.consultation')}
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              className="border-white text-white hover:bg-white hover:text-indigo-900"
              onClick={() => {
                const expertiseSection = document.getElementById('track-record');
                expertiseSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.explore')}
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section id="track-record" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record of Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in our proven track record of helping clients achieve favorable outcomes.
            </p>
          </div>

          <div className="md:flex items-center justify-between max-w-5xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={caseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {caseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-indigo-800 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button onClick={() => setShowConsultationForm(true)}>
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('practiceAreas.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('practiceAreas.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.slice(0, 6).map(area => (
              <div key={area.id} className="bg-white rounded-lg shadow-md p-8 transition duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                    {getIconComponent(area.icon)}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900">{area.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="mb-4">
                  {area.services.slice(0, 3).map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 mb-2">
                      <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
                {area.title === "Inheritance Law" ? (
                  <button
                    onClick={() => setShowInheritanceLawModal(true)}
                    className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                ) : area.title === "Intellectual Property" ? (
                  <button
                    onClick={() => setShowIntellectualPropertyModal(true)}
                    className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                ) : area.title === "Hindu Succession Law" ? (
                  <button
                    onClick={() => setShowHinduSuccessionModal(true)}
                    className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <Link 
                    to={`/practice-areas/${area.id}`}
                    className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explore some case studies and get to know how they overcome these challenges.
              </p>
            </div>
            <Link 
              to="/case-studies"
              className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600 mt-4 md:mt-0"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map(caseStudy => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Pursuit Legal</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Our commitment to excellence, client service, and results sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-indigo-800 bg-opacity-50">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-indigo-100">
                Our attorneys bring decades of experience and specialized knowledge to every case.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-indigo-800 bg-opacity-50">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
              <p className="text-indigo-100">
                We prioritize understanding your business objectives and tailoring our approach accordingly.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-indigo-800 bg-opacity-50">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Thinking</h3>
              <p className="text-indigo-100">
                We develop innovative strategies that address immediate needs while positioning you for long-term success.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-indigo-800 bg-opacity-50">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-indigo-100">
                We work as an extension of your team, ensuring seamless communication and aligned objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our clients have to say about their experience working with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Legal Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Our attorneys bring decades of experience across a wide range of practice areas.
              </p>
            </div>
            <Link 
              to="/team"
              className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600 mt-4 md:mt-0"
            >
              View All Team Members
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Resources</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Access guides, articles, and templates to help you navigate legal challenges.
              </p>
            </div>
            <Link 
              to="/resources"
              className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600 mt-4 md:mt-0"
            >
              View All Resources
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Schedule a consultation with our team to explore how we can help you navigate your legal challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => setShowConsultationForm(true)}
            >
              Schedule a Consultation
            </Button>
            <Link to="/contact">
              <Button variant="outlined" size="large" className="border-white text-white hover:bg-white hover:text-indigo-800">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;