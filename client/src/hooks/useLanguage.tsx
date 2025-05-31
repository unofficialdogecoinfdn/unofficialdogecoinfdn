import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Translations } from '@/translations/translations';

interface LanguageContextType {
  language: 'english' | 'korean';
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'english' | 'korean'>('english');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'korean' : 'english');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
