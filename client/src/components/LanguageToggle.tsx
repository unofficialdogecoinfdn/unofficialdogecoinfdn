import { Button } from '@/components/ui/button';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
    >
      <Globe className="h-4 w-4" />
      <span>{t.header.currentLang}</span>
      <ChevronDown className="h-3 w-3" />
    </Button>
  );
}
