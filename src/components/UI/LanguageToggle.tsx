import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 flex items-center space-x-2 hover:bg-gray-50 transition-colors"
      aria-label="Toggle Language"
    >
      <Languages className="w-5 h-5 text-indigo-800" />
      <span className="pr-2 font-medium text-indigo-800">
        {language === 'en' ? 'हिंदी' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle