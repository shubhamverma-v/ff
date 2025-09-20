import { useState } from 'react';
import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languageOptions = [
    { value: 'hi', label: 'हिंदी' },
    { value: 'en', label: 'English' },
    { value: 'pa', label: 'ਪੰਜਾਬੀ' },
    { value: 'mr', label: 'मराठी' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-[hsl(134,45%,55%)] text-primary-foreground p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" data-testid="text-app-title">
          {t('app_title')}
        </h1>
        
        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
            <SelectTrigger 
              className="w-24 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
              data-testid="select-language"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('mandi')}
              className="hover:text-primary-foreground/80 transition-colors"
              data-testid="nav-mandi"
            >
              {t('nav_mandi')}
            </button>
            <button 
              onClick={() => scrollToSection('weather')}
              className="hover:text-primary-foreground/80 transition-colors"
              data-testid="nav-weather"
            >
              {t('nav_weather')}
            </button>
            <button 
              onClick={() => scrollToSection('schemes')}
              className="hover:text-primary-foreground/80 transition-colors"
              data-testid="nav-schemes"
            >
              {t('nav_schemes')}
            </button>
            <button 
              onClick={() => scrollToSection('chatbot')}
              className="hover:text-primary-foreground/80 transition-colors"
              data-testid="nav-chatbot"
            >
              {t('nav_chatbot')}
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-primary-foreground/20">
          <nav className="flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection('mandi')}
              className="text-left py-2 px-4 text-sm hover:bg-primary-foreground/10 rounded transition-colors"
              data-testid="nav-mandi-mobile"
            >
              {t('nav_mandi')}
            </button>
            <button 
              onClick={() => scrollToSection('weather')}
              className="text-left py-2 px-4 text-sm hover:bg-primary-foreground/10 rounded transition-colors"
              data-testid="nav-weather-mobile"
            >
              {t('nav_weather')}
            </button>
            <button 
              onClick={() => scrollToSection('schemes')}
              className="text-left py-2 px-4 text-sm hover:bg-primary-foreground/10 rounded transition-colors"
              data-testid="nav-schemes-mobile"
            >
              {t('nav_schemes')}
            </button>
            <button 
              onClick={() => scrollToSection('chatbot')}
              className="text-left py-2 px-4 text-sm hover:bg-primary-foreground/10 rounded transition-colors"
              data-testid="nav-chatbot-mobile"
            >
              {t('nav_chatbot')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}