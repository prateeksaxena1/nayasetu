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
import { ArrowRight, Award, ChevronDown, HeartHandshake, Sprout, Plane, Users } from 'lucide-react';
import FadeIn from '../components/Animations/FadeIn';
import StaggerChildren, { StaggerItem } from '../components/Animations/StaggerChildren';

import PracticeAreaCard from '../components/UI/PracticeAreaCard';

import { faqs, FAQ } from '../data/faqs';
import FAQAccordion from '../components/UI/FAQAccordion';
import TrustStrip from '../components/UI/TrustStrip';
import ReadyToTalk from '../components/UI/ReadyToTalk';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showInheritanceLawModal, setShowInheritanceLawModal] = useState(false);
  const [showIntellectualPropertyModal, setShowIntellectualPropertyModal] = useState(false);
  const [showHinduSuccessionModal, setShowHinduSuccessionModal] = useState(false);

  // Persona State for Filter
  const [activePersona, setActivePersona] = useState<FAQ['category']>('daughter');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
  const featuredResources = resources.filter(r => r.featured);
  const featuredTeamMembers = team.filter(t => t.featured);

  const handleLearnMore = (title: string) => {
    if (title === "Inheritance Law") return () => setShowInheritanceLawModal(true);
    if (title === "Intellectual Property") return () => setShowIntellectualPropertyModal(true);
    if (title === "Hindu Succession Law") return () => setShowHinduSuccessionModal(true);
    return undefined;
  };

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
          <FadeIn direction="down" duration={0.8}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line tracking-tight">
              {t('hero.title')}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} duration={0.6}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="large"
                className="w-full sm:w-auto px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => setShowConsultationForm(true)}
              >
                {t('hero.consultation')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="w-full sm:w-auto px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-nayaysetu hover:border-white transition-all transform hover:-translate-y-1"
                onClick={() => {
                  const expertiseSection = document.getElementById('track-record');
                  expertiseSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.explore')}
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-300 font-medium tracking-wider uppercase opacity-80">
              {t('trust.heroDisclaimer')}
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50" />
          </div>
        </div>
      </section >

      {/* Persona Strip - Mobile Friendly Scrollable */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 md:relative z-30 shadow-sm md:shadow-none">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto pb-2 md:pb-0 md:justify-center no-scrollbar">
            {[
              { id: 'widow', label: 'Widow / Wife', icon: '👩' },
              { id: 'daughter', label: 'Daughter / Sister', icon: '👧' },
              { id: 'nri', label: 'NRI Heir', icon: '✈️' },
              { id: 'farmer', label: 'Farmer / Land Owner', icon: '🌾' },
            ].map((persona) => (
              <button
                key={persona.id}
                onClick={() => {
                  const faqSection = document.getElementById('common-questions');
                  faqSection?.scrollIntoView({ behavior: 'smooth' });
                  setActivePersona(persona.id as any);
                }}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${activePersona === persona.id
                  ? 'bg-nayaysetu text-white border-nayaysetu shadow-md'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-nayaysetu hover:text-nayaysetu'
                  }`}
              >
                <span className="mr-2">{persona.icon}</span>
                {persona.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <TrustStrip />

      {/* Who We Help Section */}
      <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">{t('whoWeHelp.title')}</h2>
            <div className="w-24 h-1 bg-nayaysetu-gold mx-auto rounded-full"></div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Widows Denied Share</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Legal support for claiming rights in husbands' ancestral property.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Married Daughters</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Securing equal coparcenary rights in father's HUF property.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <Plane className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">NRI Heirs</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Managing inheritance disputes and possession remotely.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <Sprout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Farmers & Landowners</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Resolving partition suits for agricultural land and revenue records.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section >

      {/* Track Record Section */}
      <section id="track-record" className="py-24 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">Our Track Record</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We take pride in our proven track record of helping clients achieve favorable outcomes through strategic legal counsel.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-nayaysetu transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-nayaysetu dark:text-white mb-3">93%</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Success Rate</div>
              </StaggerItem>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-nayaysetu transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-nayaysetu dark:text-white mb-3">500+</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Clients Helped</div>
              </StaggerItem>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-nayaysetu transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-nayaysetu dark:text-white mb-3">100+</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Disputes Resolved</div>
              </StaggerItem>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-nayaysetu transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-nayaysetu dark:text-white mb-3">15+</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Landmark Judgments</div>
              </StaggerItem>
            </StaggerChildren>

            <FadeIn direction="up" delay={0.4} className="text-center">
              <Button onClick={() => setShowConsultationForm(true)} size="large" className="shadow-xl hover:shadow-2xl px-10 py-4 text-xl">
                Book a Free Consultation
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('practiceAreas.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('practiceAreas.subtitle')}
            </p>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.slice(0, 6).map(area => {
              const handleClick = handleLearnMore(area.title);
              return (
                <StaggerItem key={area.id}>
                  <PracticeAreaCard
                    area={area}
                    onClick={handleClick}
                  />
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Common Questions (FAQ) Section */}
      <section id="common-questions" className="py-24 bg-gray-50 dark:bg-gray-800 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-nayaysetu/10 text-nayaysetu font-semibold text-sm mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Questions families often ask us
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['widow', 'daughter', 'nri', 'farmer'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActivePersona(cat as any)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activePersona === cat
                    ? 'bg-nayaysetu text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <FAQAccordion faqs={faqs.filter(f => f.category === activePersona)} />
          </FadeIn>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">Can't find your question?</p>
            <Button variant="outlined" size="small" onClick={() => setShowConsultationForm(true)}>
              Ask a Lawyer
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      < section className="py-20 bg-gray-50 dark:bg-gray-900" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Explore some case studies and get to know how they overcome these challenges.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/case-studies"
                className="text-nayaysetu font-medium inline-flex items-center hover:text-nayaysetu-gold mt-4 md:mt-0"
              >
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map(caseStudy => (
              <StaggerItem key={caseStudy.id}>
                <CaseStudyCard caseStudy={caseStudy} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="py-20 bg-nayaysetu text-white" >
        <div className="container mx-auto px-4">
          <FadeIn direction="down" className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nayaysetu</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We understand that property disputes are not just legal battles—they are family matters. We handle them with expertise and empathy.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem className="text-center p-6 rounded-lg bg-white/10">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-nayaysetu-gold text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inheritance Specialists</h3>
              <p className="text-gray-200">
                Unlike general firms, we focus exclusively on property and succession laws. We know every nuance of the Hindu Succession Act.
              </p>
            </StaggerItem>

            <StaggerItem className="text-center p-6 rounded-lg bg-white/10">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-nayaysetu-gold text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Harmony</h3>
              <p className="text-gray-200">
                We prioritize mediation and family settlements to resolve disputes amicably, saving you years of court battles and stress.
              </p>
            </StaggerItem>

            <StaggerItem className="text-center p-6 rounded-lg bg-white/10">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-nayaysetu-gold text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clear Rights</h3>
              <p className="text-gray-200">
                Whether you are a daughter, widow, or NRI, we explain your legal rights in simple language so you can make informed decisions.
              </p>
            </StaggerItem>

            <StaggerItem className="text-center p-6 rounded-lg bg-white/10">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-nayaysetu-gold text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Efficient</h3>
              <p className="text-gray-200">
                Property cases can drag on for decades. Our strategic approach is designed to reach a conclusion—settlement or decree—faster.
              </p>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section >

      {/* Testimonials */}
      < section className="py-20 bg-gray-50 dark:bg-gray-800" >
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from families we’ve helped with inheritance and property disputes in India.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map(testimonial => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* Team */}
      < section className="py-20 bg-white dark:bg-gray-900" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Legal Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Our attorneys bring decades of focused experience in inheritance, ancestral property, and family property disputes in India.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/team"
                className="text-nayaysetu dark:text-white font-medium inline-flex items-center hover:text-nayaysetu-gold mt-4 md:mt-0"
              >
                View All Team Members
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeamMembers.map(member => (
              <StaggerItem key={member.id}>
                <TeamMemberCard member={member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* Resources */}
      < section className="py-20 bg-gray-50 dark:bg-gray-800" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Legal Resources</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Access guides, articles, and templates to help you navigate legal challenges.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/resources"
                className="text-nayaysetu dark:text-white font-medium inline-flex items-center hover:text-nayaysetu-gold mt-4 md:mt-0"
              >
                View All Resources
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map(resource => (
              <StaggerItem key={resource.id}>
                <ResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* CTA Section */}
      <ReadyToTalk />
    </div >
  );
};

export default Home;
