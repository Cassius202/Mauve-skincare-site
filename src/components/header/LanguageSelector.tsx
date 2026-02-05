'use client'

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

const languages = [
  { name: 'English', code: 'EN' },
  { name: 'Français', code: 'FR' },
  { name: 'Español', code: 'ES' },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      >
        <Globe size={16} className="text-stone-500" />
        <span>{selected.code}</span>
        <ChevronDown 
          size={14} 
          className={cn("transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>

      {/* Dropdown Menu - Aligned to the far end (right) */}
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
                onClick={() => {
                  setSelected(lang);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-2.5 text-sm transition-colors",
                  "hover:bg-stone-50",
                  selected.code === lang.code 
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