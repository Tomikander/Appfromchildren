import { useState } from 'react';
import translations from '../locales/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState('ru');

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return { language, setLanguage, t };
};