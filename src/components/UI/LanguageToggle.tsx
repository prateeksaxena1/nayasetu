import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="p-2 rounded-full transition-colors duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 flex items-center gap-1"
      aria-label="Toggle Language"
    >
      <Languages className="w-5 h-5" />
      <span className="text-xs font-bold">{language === 'en' ? 'HI' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle