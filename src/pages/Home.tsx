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
import { ArrowRight, Award, HeartHandshake, Sprout, Plane, Users } from 'lucide-react';
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-muted dark:bg-bg-dark">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Text & Personas */}
            <div className="space-y-8 text-center lg:text-left">
              <FadeIn direction="up" duration={0.6}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  Rated #1 Indian Inheritance Firm
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-text-inverted leading-[1.15] mb-6 font-poppins">
                  Protect Your Family's <span className="text-accent relative inline-block">
                    Legacy
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                    </svg>
                  </span> in Property Disputes
                </h1>
                <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We specialize in simplifying complex Indian inheritance laws to secure your rightful share, prevent family feuds, and deliver peace of mind.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} duration={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                  <Button
                    size="large"
                    className="shadow-lg hover:shadow-xl hover:scale-105"
                    onClick={() => setShowConsultationForm(true)}
                  >
                    {t('hero.consultation')}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      const expertiseSection = document.getElementById('track-record');
                      expertiseSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('hero.explore')}
                  </Button>
                </div>

                {/* Integrated Persona Chips */}
                <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm inline-block w-full">
                  <p className="text-sm font-semibold text-text-muted dark:text-gray-400 mb-3 uppercase tracking-wider text-left pl-1">
                    I am a...
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
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
                        className={`group flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${activePersona === persona.id
                          ? 'bg-primary text-text-inverted border-primary shadow-md'
                          : 'bg-bg-muted hover:bg-white text-text-default border-transparent hover:border-accent/50 hover:shadow-sm'
                          }`}
                      >
                        <span className="mr-2 group-hover:scale-110 transition-transform">{persona.icon}</span>
                        {persona.label}
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Visual */}
            <FadeIn direction="left" delay={0.3} duration={0.8} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src="https://images.pexels.com/photos/4584444/pexels-photo-4584444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Indian multigenerational family"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <p className="font-bold text-lg">Safeguarding Relationships</p>
                  <p className="text-sm opacity-90">Beyond just property distribution</p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-float">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary dark:text-white">500+</p>
                  <p className="text-xs text-text-muted">Families Helped</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section >

      <TrustStrip />

      {/* Who We Help Section */}
      <section className="py-24 bg-bg-default dark:bg-bg-dark border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-text-inverted mb-6 font-poppins">{t('whoWeHelp.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem className="flex items-center p-6 bg-bg-default dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-primary/5 dark:bg-primary/20 rounded-full text-primary dark:text-accent">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary dark:text-text-inverted mb-1">Widows Denied Share</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Legal support for claiming rights in husbands' ancestral property.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center p-6 bg-bg-default dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-primary/5 dark:bg-primary/20 rounded-full text-primary dark:text-accent">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary dark:text-text-inverted mb-1">Married Daughters</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Securing equal coparcenary rights in father's HUF property.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center p-6 bg-bg-default dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-primary/5 dark:bg-primary/20 rounded-full text-primary dark:text-accent">
                <Plane className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary dark:text-text-inverted mb-1">NRI Heirs</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Managing inheritance disputes and possession remotely.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center p-6 bg-bg-default dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6 p-4 bg-primary/5 dark:bg-primary/20 rounded-full text-primary dark:text-accent">
                <Sprout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary dark:text-text-inverted mb-1">Farmers & Landowners</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Resolving partition suits for agricultural land and revenue records.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section >

      {/* Track Record Section */}
      <section id="track-record" className="py-24 bg-bg-muted dark:bg-bg-dark border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-text-inverted mb-6 font-poppins">Our Track Record</h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We take pride in our proven track record of helping clients achieve favorable outcomes through strategic legal counsel.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
              <StaggerItem className="bg-bg-default dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-primary transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-primary dark:text-text-inverted mb-3">93%</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Success Rate</div>
              </StaggerItem>
              <StaggerItem className="bg-bg-default dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-primary transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-primary dark:text-text-inverted mb-3">500+</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Clients Helped</div>
              </StaggerItem>
              <StaggerItem className="bg-bg-default dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-primary transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-primary dark:text-text-inverted mb-3">100+</div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Disputes Resolved</div>
              </StaggerItem>
              <StaggerItem className="bg-bg-default dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border-b-4 border-primary transform hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-primary dark:text-text-inverted mb-3">15+</div>
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
      <section className="py-24 bg-bg-default dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">{t('practiceAreas.title')}</h2>
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
      <section id="common-questions" className="py-24 bg-bg-muted dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-text-inverted mb-6 font-poppins">
              Questions families often ask us
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['widow', 'daughter', 'nri', 'farmer'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActivePersona(cat as any)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activePersona === cat
                    ? 'bg-primary text-text-inverted shadow-lg transform scale-105'
                    : 'bg-bg-default dark:bg-gray-700 text-text-muted dark:text-gray-300 hover:bg-bg-muted dark:hover:bg-gray-600 shadow-sm'
                    }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="relative z-10">
            <FAQAccordion faqs={faqs.filter(f => f.category === activePersona)} />
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-xl border border-gray-100 dark:border-gray-600 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nayaysetu to-transparent opacity-50"></div>

              <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-primary dark:text-text-inverted mb-2">
                  Can't find your question?
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  Our legal experts are ready to help with your specific situation.
                </p>

                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => setShowConsultationForm(true)}
                  className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Ask a Lawyer
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      < section className="py-20 bg-bg-muted dark:bg-bg-dark" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Explore some case studies and get to know how they overcome these challenges.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/case-studies"
                className="text-primary font-medium inline-flex items-center hover:text-accent mt-4 md:mt-0"
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
      < section className="py-20 bg-primary text-text-inverted" >
        <div className="container mx-auto px-4">
          <FadeIn direction="down" className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nayaysetu</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We understand that property disputes are not just legal battles—they are family matters. We handle them with expertise and empathy.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem className="text-center p-6 rounded-lg bg-white/10">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inheritance Specialists</h3>
              <p className="text-gray-200">
                Unlike general firms, we focus exclusively on property and succession laws. We know every nuance of the Hindu Succession Act.
              </p>
            </StaggerItem>

            <StaggerItem className="text-center p-6 rounded-lg bg-white/10">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent text-white">
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
      < section className="py-20 bg-bg-muted dark:bg-gray-800" >
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Client Testimonials</h2>
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
      < section className="py-20 bg-bg-default dark:bg-bg-dark" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Meet Our Legal Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Our attorneys bring decades of focused experience in inheritance, ancestral property, and family property disputes in India.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/team"
                className="text-primary dark:text-text-inverted font-medium inline-flex items-center hover:text-accent mt-4 md:mt-0"
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
      < section className="py-20 bg-bg-muted dark:bg-bg-dark" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Legal Resources</h2>
              <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl">
                Access guides, articles, and templates to help you navigate legal challenges.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/resources"
                className="text-primary dark:text-text-inverted font-medium inline-flex items-center hover:text-accent mt-4 md:mt-0"
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
