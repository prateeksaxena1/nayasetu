import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.practiceAreas': 'Practice Areas',
    'nav.caseStudies': 'Case Studies',
    'nav.resources': 'Resources',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.title': 'Expert Legal Solutions\nFor Complex Challenges',
    'hero.subtitle': 'Law ki baat, bina tension ke saath.',
    'hero.consultation': 'Schedule a Consultation',
    'hero.explore': 'Explore Our Expertise',
    'practiceAreas.title': 'Our Practice Areas',
    'practiceAreas.subtitle': 'We provide comprehensive legal services across a range of specialized practice areas.',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.practiceAreas': 'प्रैक्टिस एरिया',
    'nav.caseStudies': 'केस स्टडीज',
    'nav.resources': 'संसाधन',
    'nav.blog': 'ब्लॉग',
    'nav.contact': 'संपर्क करें',
    'hero.title': 'जटिल चुनौतियों के लिए\nविशेषज्ञ कानूनी समाधान',
    'hero.subtitle': 'हम आज के जटिल नियामक वातावरण में व्यवसायों और संगठनों को परिष्कृत कानूनी सलाह प्रदान करते हैं।',
    'hero.consultation': 'परामर्श शेड्यूल करें',
    'hero.explore': 'हमारी विशेषज्ञता जानें',
    'practiceAreas.title': 'हमारे अभ्यास क्षेत्र',
    'practiceAreas.subtitle': 'हम विशेष अभ्यास क्षेत्रों की एक श्रृंखला में व्यापक कानूनी सेवाएं प्रदान करते हैं।',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};