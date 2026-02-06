'use client'

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTranslation } from 'react-i18next'; // Add this import

const languages = [
  { name: 'English', code: 'en' }, // Change to lowercase 'en'
  { name: 'Français', code: 'fr' }, // Change to lowercase 'fr'
  { name: 'Español', code: 'es' }, // Change to lowercase 'es'
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation(); // Get i18n instance
  
  // Get current language from i18n
  const currentLang = i18n.language;
  const selected = languages.find(lang => lang.code === currentLang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    // This changes the language for the entire app
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200",
          "bg-slate-200/50 hover:bg-slate-300",
          "text-slate-900 font-medium text-sm border border-transparent",
          isOpen && "border-blue-500/50 ring-2 ring-stone-500/10"
        )}
        aria-label="Select language"
      >
        <Globe size={16} className="text-stone-500" />
        
        <span>{selected.code.toUpperCase()}</span>

        <ChevronDown 
          size={14} 
          className={cn("transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul 
          className={cn(
            "absolute right-0 mt-2 w-40 origin-top-right z-50 overflow-hidden",
            "bg-white border border-blue-200",
            "rounded-2xl shadow-xl animate-in fade-in zoom-in-95 duration-200"
          )}
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "block w-full text-left px-4 py-2.5 text-sm transition-colors",
                  "hover:bg-blue-100",
                  currentLang === lang.code 
                    ? "text-stone-600 font-semibold bg-stone-300/50" 
                    : "text-slate-700"
                )}
              >
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;