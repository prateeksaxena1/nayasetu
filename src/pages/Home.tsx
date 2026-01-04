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

      {/* Who We Help Section */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('whoWeHelp.title')}</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
            <StaggerItem className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="mb-3 p-3 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white text-center text-sm md:text-base">{t('whoWeHelp.widows')}</p>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="mb-3 p-3 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <Users className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white text-center text-sm md:text-base">{t('whoWeHelp.daughters')}</p>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="mb-3 p-3 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <Plane className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white text-center text-sm md:text-base">{t('whoWeHelp.nris')}</p>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="mb-3 p-3 bg-nayaysetu/5 dark:bg-nayaysetu/20 rounded-full text-nayaysetu dark:text-nayaysetu-gold">
                <Sprout className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white text-center text-sm md:text-base">{t('whoWeHelp.farmers')}</p>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section >

      {/* Track Record Section */}
      <section id="track-record" className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We take pride in our proven track record of helping clients achieve favorable outcomes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all border-b-4 border-nayaysetu">
                <div className="text-4xl font-bold text-nayaysetu dark:text-white mb-2">93%</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Success Rate</div>
              </StaggerItem>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all border-b-4 border-nayaysetu">
                <div className="text-4xl font-bold text-nayaysetu dark:text-white mb-2">500+</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Clients Helped</div>
              </StaggerItem>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all border-b-4 border-nayaysetu">
                <div className="text-4xl font-bold text-nayaysetu dark:text-white mb-2">100+</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Disputes Resolved</div>
              </StaggerItem>
              <StaggerItem className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all border-b-4 border-nayaysetu">
                <div className="text-4xl font-bold text-nayaysetu dark:text-white mb-2">15+</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Landmark Judgments</div>
              </StaggerItem>
            </StaggerChildren>

            <FadeIn direction="up" delay={0.4} className="mt-12 text-center">
              <Button onClick={() => setShowConsultationForm(true)} size="large" className="shadow-lg hover:shadow-xl">
                Talk to a Property Lawyer
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
      < section className="py-20 bg-nayaysetu text-white" >
        <FadeIn direction="up" className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Schedule a consultation with our team to explore how we can help you navigate your legal challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="large"
              onClick={() => setShowConsultationForm(true)}
              className="shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Button>
            <Link to="/contact">
              <Button variant="outlined" size="large" className="border-white text-white hover:bg-white hover:text-nayaysetu">
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-nayaysetu-gold/80">
            {t('trust.ctaDisclaimer')}
          </p>
        </FadeIn>
      </section >
    </div >
  );
};

export default Home;
