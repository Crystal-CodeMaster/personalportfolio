import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "../../contexts/LanguageContext";
import { Globe, ChevronUp, ChevronDown } from "lucide-react";
import { trackEvent } from "../GoogleAnalytics";

type LanguageOption = {
  code: Language;
  label: string;
  flag: string;
};

const languageOptions: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

const PersistentLanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languageOptions.find(option => option.code === language);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleLanguageChange = (code: Language) => {
    // Track language change event for analytics
    trackEvent('manual_language_change', {
      from_language: language,
      to_language: code,
      language_name: languageOptions.find(opt => opt.code === code)?.label
    });
    
    setLanguage(code);
    closeDropdown();
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative">
        <button 
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all border border-gray-200"
        >
          <Globe className="h-4 w-4 text-specialty-global" />
          <span className="font-medium">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline text-sm font-medium uppercase">{currentLanguage?.code}</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-12 right-0 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
            >
              <div className="py-1">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => handleLanguageChange(option.code)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      language === option.code
                        ? "bg-light-blue text-specialty-global font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    } flex items-center space-x-2`}
                  >
                    <span className="text-base">{option.flag}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PersistentLanguageSwitcher;